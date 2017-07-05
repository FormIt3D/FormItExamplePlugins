FormItExamplePluginsWindTurbine = {};

// Submit runs from the HTML page.
FormItExamplePluginsWindTurbine.Submit = function()
{
    var args = {
    "bladeNumber": parseFloat(document.a.bladeNumber.value),
    }
    console.log("FormItExamplePluginsWindTurbine.Create");
    console.log("args");
    FormItInterface.CallMethod("FormItExamplePluginsWindTurbine.Create", args);
}

FormItExamplePluginsWindTurbine.Create = function(args) 
{
    var bladeNumber  = args.bladeNumber;
    var wingSpan     = 10;    // linear units
    var rootChord    =  1;    // linear units <--- don't change that!
    var taperRatio   = 0.3;
    var rootTwist    = 0.4;   // radian
    var stemDiameter = 0.117; // thickness of Clark-Y airfoil of chord 1
    var stemLength   = 1.6;   // linear units
    var elevation    = 20;    // linear units
    var noseConeR    = 0.5;   // linear units
    var noseConeL    = 1.0;   // linear units
    var tailConeL    = 2.5;   // linear units
    var poleBaseR    = 0.5;   // linear units
    var poleTopR     = 0.15;   // linear units
    var yBaseCenter = -1.2*noseConeR;

    // Helper function to mark all but first and last vertices smooth
    function markVerticesSmooth(histID, posArray, zDir) {
        var rayZDir = zDir || 1;
        for (var i=1;  i+1 < posArray.length; ++i) {
            var ray = WSM.Geom.Line3d(posArray[i], WSM.Geom.Vector3d(0, 0, rayZDir));
            var vertices = WSM.APIRayFireReadOnly(histID, ray, .000001, true, false, false);
            if (vertices.length === 1) {
                WSM.APISetEdgesOrVerticesMarkedSmooth(histID, vertices, true); // true = smooth
            }
        }
    }

    // Construct points for the circle: same relative X as the airfoil, but Y computed to lie on the circle of stemDiameter, whose left point is at airfoils LE.
    function mapAirfoilToCircle(ptsAirfoil, sectionZ) {
        var N = 3.0; // curvature factor
        var z = sectionZ || 0.0;
        var ptsCircle = []; 
        for (var i=0;  i < ptsAirfoil.length; ++i) {
            var x = ptsAirfoil[i].x; // it's in [0, 1] interval
            var y = 0;
            if (0.0 < x) {
                if (x < 1.0) {
                    var xFromCenter = x - 0.5;
                    y = Math.sqrt(0.25 - xFromCenter*xFromCenter);
                    if (ptsAirfoil[i].y < 0.0) {
                        y *= -1;
                    }
                } else { // x == 1.0
                    y = ptsAirfoil[i].y/(stemDiameter/2);
                    x = 0.5 + Math.sqrt(0.25 - y*y);
                }
            }
            var circleX = x*stemDiameter;
            var circleY = y*stemDiameter;
            var sZ = z / stemLength;      // [0...1]
            var morfeS = Math.pow(sZ, N); // [0...1] 
            x = circleX + (ptsAirfoil[i].x - circleX)*morfeS;
            y = circleY + (ptsAirfoil[i].y - circleY)*morfeS;
            ptsCircle.push(WSM.Geom.Point3d(x, y, z));
        }
        return ptsCircle;
    }


    // Clark-Y airfoil, 11.7% thick
    var topPtsAirfoil = [WSM.Geom.Point3d(0.0000, 0.0000000, 0),    WSM.Geom.Point3d(0.0005, 0.0023390, 0), WSM.Geom.Point3d(0.0010, 0.0037271, 0), WSM.Geom.Point3d(0.0020, 0.0058025, 0), WSM.Geom.Point3d(0.0040, 0.0089238, 0), 
                         WSM.Geom.Point3d(0.0080, 0.0137350, 0), // WSM.Geom.Point3d(0.0120, 0.0178581, 0), WSM.Geom.Point3d(0.0200, 0.0253735, 0), WSM.Geom.Point3d(0.0300, 0.0330215, 0), WSM.Geom.Point3d(0.0400, 0.0391283, 0), 
                         WSM.Geom.Point3d(0.0500, 0.0442753, 0), // WSM.Geom.Point3d(0.0600, 0.0487571, 0), WSM.Geom.Point3d(0.0800, 0.0564308, 0), WSM.Geom.Point3d(0.1000, 0.0629981, 0), WSM.Geom.Point3d(0.1200, 0.0686204, 0), 
                         WSM.Geom.Point3d(0.1400, 0.0734360, 0), // WSM.Geom.Point3d(0.1600, 0.0775707, 0), WSM.Geom.Point3d(0.1800, 0.0810687, 0), WSM.Geom.Point3d(0.2000, 0.0839202, 0), WSM.Geom.Point3d(0.2200, 0.0861433, 0), 
                         WSM.Geom.Point3d(0.2400, 0.0878308, 0), // WSM.Geom.Point3d(0.2600, 0.0890840, 0), WSM.Geom.Point3d(0.2800, 0.0900016, 0), WSM.Geom.Point3d(0.3000, 0.0906804, 0), WSM.Geom.Point3d(0.3200, 0.0911857, 0), 
                         WSM.Geom.Point3d(0.3400, 0.0915079, 0), // WSM.Geom.Point3d(0.3600, 0.0916266, 0), WSM.Geom.Point3d(0.3800, 0.0915212, 0), WSM.Geom.Point3d(0.4000, 0.0911712, 0), WSM.Geom.Point3d(0.4200, 0.0905657, 0), 
                         WSM.Geom.Point3d(0.4400, 0.0897175, 0), // WSM.Geom.Point3d(0.4600, 0.0886427, 0), WSM.Geom.Point3d(0.4800, 0.0873572, 0), WSM.Geom.Point3d(0.5000, 0.0858772, 0), WSM.Geom.Point3d(0.5200, 0.0842145, 0), 
                         WSM.Geom.Point3d(0.5400, 0.0823712, 0), // WSM.Geom.Point3d(0.5600, 0.0803480, 0), WSM.Geom.Point3d(0.5800, 0.0781451, 0), WSM.Geom.Point3d(0.6000, 0.0757633, 0), WSM.Geom.Point3d(0.6200, 0.0732055, 0), 
                         WSM.Geom.Point3d(0.6400, 0.0704822, 0), // WSM.Geom.Point3d(0.6600, 0.0676046, 0), WSM.Geom.Point3d(0.6800, 0.0645843, 0), WSM.Geom.Point3d(0.7000, 0.0614329, 0), WSM.Geom.Point3d(0.7200, 0.0581599, 0), 
                         WSM.Geom.Point3d(0.7400, 0.0547675, 0), // WSM.Geom.Point3d(0.7600, 0.0512565, 0), WSM.Geom.Point3d(0.7800, 0.0476281, 0), WSM.Geom.Point3d(0.8000, 0.0438836, 0), WSM.Geom.Point3d(0.8200, 0.0400245, 0), 
                         WSM.Geom.Point3d(0.8400, 0.0360536, 0), // WSM.Geom.Point3d(0.8600, 0.0319740, 0), WSM.Geom.Point3d(0.8800, 0.0277891, 0), WSM.Geom.Point3d(0.9000, 0.0235025, 0), WSM.Geom.Point3d(0.9200, 0.0191156, 0), 
                         WSM.Geom.Point3d(0.9400, 0.0146239, 0), // WSM.Geom.Point3d(0.9600, 0.0100232, 0), WSM.Geom.Point3d(0.9700, 0.0076868, 0), WSM.Geom.Point3d(0.9800, 0.0053335, 0), WSM.Geom.Point3d(0.9900, 0.0029690, 0), 
                         WSM.Geom.Point3d(1.0000, 0.0005993, 0)];
    var botPtsAirfoil = [WSM.Geom.Point3d(0.0000, 0.0000000, 0),    WSM.Geom.Point3d(0.0005, -.0046700, 0), WSM.Geom.Point3d(0.0010, -.0059418, 0), WSM.Geom.Point3d(0.0020, -.0078113, 0), WSM.Geom.Point3d(0.0040, -.0105126, 0), 
                         WSM.Geom.Point3d(0.0080, -.0142862, 0), // WSM.Geom.Point3d(0.0120, -.0169733, 0), WSM.Geom.Point3d(0.0200, -.0202723, 0), WSM.Geom.Point3d(0.0300, -.0226056, 0), WSM.Geom.Point3d(0.0400, -.0245211, 0), 
                         WSM.Geom.Point3d(0.0500, -.0260452, 0), // WSM.Geom.Point3d(0.0600, -.0271277, 0), WSM.Geom.Point3d(0.0800, -.0284595, 0), WSM.Geom.Point3d(0.1000, -.0293786, 0), WSM.Geom.Point3d(0.1200, -.0299633, 0), 
                         WSM.Geom.Point3d(0.1400, -.0302404, 0), // WSM.Geom.Point3d(0.1600, -.0302546, 0), WSM.Geom.Point3d(0.1800, -.0300490, 0), WSM.Geom.Point3d(0.2000, -.0296656, 0), WSM.Geom.Point3d(0.2200, -.0291445, 0), 
                         WSM.Geom.Point3d(0.2400, -.0285181, 0), // WSM.Geom.Point3d(0.2600, -.0278164, 0), WSM.Geom.Point3d(0.2800, -.0270696, 0), WSM.Geom.Point3d(0.3000, -.0263079, 0), WSM.Geom.Point3d(0.3200, -.0255565, 0), 
                         WSM.Geom.Point3d(0.3400, -.0248176, 0), // WSM.Geom.Point3d(0.3600, -.0240870, 0), WSM.Geom.Point3d(0.3800, -.0233606, 0), WSM.Geom.Point3d(0.4000, -.0226341, 0), WSM.Geom.Point3d(0.4200, -.0219042, 0), 
                         WSM.Geom.Point3d(0.4400, -.0211708, 0), // WSM.Geom.Point3d(0.4600, -.0204353, 0), WSM.Geom.Point3d(0.4800, -.0196986, 0), WSM.Geom.Point3d(0.5000, -.0189619, 0), WSM.Geom.Point3d(0.5200, -.0182262, 0), 
                         WSM.Geom.Point3d(0.5400, -.0174914, 0), // WSM.Geom.Point3d(0.5600, -.0167572, 0), WSM.Geom.Point3d(0.5800, -.0160232, 0), WSM.Geom.Point3d(0.6000, -.0152893, 0), WSM.Geom.Point3d(0.6200, -.0145551, 0), 
                         WSM.Geom.Point3d(0.6400, -.0138207, 0), // WSM.Geom.Point3d(0.6600, -.0130862, 0), WSM.Geom.Point3d(0.6800, -.0123515, 0), WSM.Geom.Point3d(0.7000, -.0116169, 0), WSM.Geom.Point3d(0.7200, -.0108823, 0), 
                         WSM.Geom.Point3d(0.7400, -.0101478, 0), // WSM.Geom.Point3d(0.7600, -.0094133, 0), WSM.Geom.Point3d(0.7800, -.0086788, 0), WSM.Geom.Point3d(0.8000, -.0079443, 0), WSM.Geom.Point3d(0.8200, -.0072098, 0), 
                         WSM.Geom.Point3d(0.8400, -.0064753, 0), // WSM.Geom.Point3d(0.8600, -.0057408, 0), WSM.Geom.Point3d(0.8800, -.0050063, 0), WSM.Geom.Point3d(0.9000, -.0042718, 0), WSM.Geom.Point3d(0.9200, -.0035373, 0), 
                         WSM.Geom.Point3d(0.9400, -.0028028, 0), // WSM.Geom.Point3d(0.9600, -.0020683, 0), WSM.Geom.Point3d(0.9700, -.0017011, 0), WSM.Geom.Point3d(0.9800, -.0013339, 0), WSM.Geom.Point3d(0.9900, -.0009666, 0), 
                         WSM.Geom.Point3d(1.0000, -.0005993, 0)];

    var topPtsCircle = mapAirfoilToCircle(topPtsAirfoil);
    var botPtsCircle = mapAirfoilToCircle(botPtsAirfoil);
//debugger;    

    var histID = WSM.APIGetActiveHistory();

    var s = Math.sin(rootTwist);
    var c = Math.cos(rootTwist);

    var transitionFaces = [];
    var Nfaces = 11;
    for (var i=0;  i < Nfaces;  ++i) {
        var z = stemLength * i/Nfaces;

        // Create the circular face at the end of the stem or a transition face
        var topPts = mapAirfoilToCircle(topPtsAirfoil, z);
        var botPts = mapAirfoilToCircle(botPtsAirfoil, z);

        WSM.APICreatePolyline (histID, topPts, false);
        WSM.APICreatePolyline (histID, botPts, false);
        WSM.APIConnectPoint3ds(histID, topPts[0], botPts[0]);
        WSM.APIConnectPoint3ds(histID, topPts[topPts.length-1], botPts[botPts.length-1]);
        markVerticesSmooth(histID, topPts, -1);
        markVerticesSmooth(histID, botPts, -1);

        var ray = WSM.Geom.Line3d(WSM.Geom.Point3d(stemDiameter/2, 0, z), WSM.Geom.Vector3d(0, 0, 1));
        var faces = WSM.APIRayFireReadOnly(histID, ray, .000001, false, false, true);
        if (faces.length !== 1) {
            console.log("ERROR: can't find a transition face");
            return false;
        }
        var face0 = faces[0];
        WSM.APITransformObject(histID, face0, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, 0), WSM.Geom.Vector3d(c, -s, 0), WSM.Geom.Vector3d(s, c, 0), WSM.Geom.Vector3d(0, 0, 1)));
        transitionFaces.push(face0); // the circular face
    }


    // Create the root airfoil face
    for (i=0;  i < topPtsAirfoil.length;  ++i) {
        topPtsAirfoil[i].z = stemLength;
    }
    for (i=0;  i < botPtsAirfoil.length;  ++i) {
        botPtsAirfoil[i].z = stemLength;
    }
    WSM.APICreatePolyline (histID, topPtsAirfoil, false);
    WSM.APICreatePolyline (histID, botPtsAirfoil, false);
    WSM.APIConnectPoint3ds(histID, topPtsAirfoil[0], botPtsAirfoil[0]);
    WSM.APIConnectPoint3ds(histID, topPtsAirfoil[topPtsAirfoil.length-1], botPtsAirfoil[botPtsAirfoil.length-1]);
    markVerticesSmooth(histID, topPtsAirfoil);
    markVerticesSmooth(histID, botPtsAirfoil);

    var ray = WSM.Geom.Line3d(WSM.Geom.Point3d(0.50, 0, topPtsAirfoil[0].z), WSM.Geom.Vector3d(0, 0, 1));
    var faces = WSM.APIRayFireReadOnly(histID, ray, .000001, false, false, true);
    if (faces.length !== 1) {
        console.log("ERROR: can't find the root airfoil face");
        return false;
    }
    var face1 = faces[0];

    var face2 = WSM.APICopyObject(histID, histID, face1);
    WSM.APITransformObject(histID, face2, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, wingSpan), WSM.Geom.Vector3d(taperRatio, 0, 0), WSM.Geom.Vector3d(0, taperRatio, 0), WSM.Geom.Vector3d(0, 0, 1)));
    //WSM.APITransformObject(histID, face2, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, 0), WSM.Geom.Vector3d(c, s, 0), WSM.Geom.Vector3d(-s, c, 0), WSM.Geom.Vector3d(0, 0, 1)));

    WSM.APITransformObject(histID, face1, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, 0), WSM.Geom.Vector3d(c, -s, 0), WSM.Geom.Vector3d(s, c, 0), WSM.Geom.Vector3d(0, 0, 1)));

    // Loft these faces
    var loftFacesArr = [];
    for (i=0;  i < transitionFaces.length;  ++i) {
        loftFacesArr.push([transitionFaces[i]]);
    }
    loftFacesArr.push([face1]);
    loftFacesArr.push([face2]);
    WSM.APILoft(histID, loftFacesArr);


    // Delete inder faces
    var innerFaces = [];
    for (i=1;  i+1 < loftFacesArr.length;  ++i) {
        innerFaces.push(loftFacesArr[i][0]);
    }
    for (i=0;  i < innerFaces.length;  ++i) {
        WSM.APIDeleteObject(histID, innerFaces[i]);
    }


    var bodies = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nBodyType);
    if (bodies.length !== 1) {
        console.log("ERROR: looks like lofting has failed");
        return false;
    }

    // Clumzy edge smoothing...
    var edges = WSM.APIGetObjectsByTypeReadOnly(histID, bodies[0], WSM.nEdgeType);
    var smoothEdges = [];
    var nonSmoothEdges = [];
    for (i=0;  i < edges.length;  ++i) {
        var edge = edges[i];
        var edgeVtxs = WSM.APIGetObjectsByTypeReadOnly(histID, edge, WSM.nVertexType);
        if (edgeVtxs.length !== 2) {
            console.log("ERROR: something wrong with Edge-" + edge);
            return false;
        }
        var pt0 = WSM.APIGetVertexPoint3dReadOnly(histID, edgeVtxs[0]);
        var pt1 = WSM.APIGetVertexPoint3dReadOnly(histID, edgeVtxs[1]);

        var markEdgeSmooth = true;
        var eps = 1.0e-5;
        if (((Math.abs(pt0.x) < eps && Math.abs(pt0.y) < eps) && (Math.abs(pt1.x) < eps && Math.abs(pt1.y) < eps)) && (Math.abs(pt0.z-pt1.z) > 10*eps)){
            markEdgeSmooth = false;
        } else {
            var minZ = 0.0, 
                maxZ = wingSpan + stemLength;
            if ((Math.abs(pt0.z-minZ) < eps && Math.abs(pt1.z-minZ) < eps) || (Math.abs(pt0.z-maxZ) < eps && Math.abs(pt1.z-maxZ) < eps)) {
                markEdgeSmooth = false;
            } else if ((Math.abs(pt0.z-maxZ) < eps || Math.abs(pt1.z-maxZ) < eps) && (Math.abs(pt0.z-pt1.z) > 10*eps)) {
                var maxXofTopAirfoil = rootChord * taperRatio;
                markEdgeSmooth = !((Math.abs(pt0.x-maxXofTopAirfoil) < eps) || (Math.abs(pt0.x-maxXofTopAirfoil) < eps));
            }

        }
        if (markEdgeSmooth) {
            smoothEdges.push(edge);
        } else {
            nonSmoothEdges.push(edge);
        }
    }
    WSM.APISetEdgesOrVerticesMarkedSmooth(histID, smoothEdges,    true);
    WSM.APISetEdgesOrVerticesMarkedSmooth(histID, nonSmoothEdges, false);


    // Group the blade
    var groupID = WSM.APICreateGroup(histID, bodies, [], WSM.INVALID_ID, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, elevation), WSM.Geom.Vector3d(1, 0, 0), WSM.Geom.Vector3d(0, 1, 0), WSM.Geom.Vector3d(0, 0, 1)));

    // Create bladeNumber of instabces
    for (i=1;  i < bladeNumber;  ++i) {
        var angle = 2*Math.PI*i/bladeNumber;
        var trans = WSM.Geom.MakeRotationTransform(WSM.Geom.Line3d(WSM.Geom.Point3d(0, 0, elevation), WSM.Geom.Vector3d(0, 1, 0)), angle);
        WSM.APIAddInstancesToGroup(histID, groupID, [trans]);
    }
    
    var instances = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nInstanceType);
    if (instances.length !== bladeNumber) {
        return false;
    }

    
    var centerPt = WSM.Geom.Point3d(0, 0, elevation);

    // Create nose cone
    var noseCone = WSM.APICreateHemisphere(histID, noseConeR, WSM.Geom.Point3d(0, 0, 0), 5.0);
    WSM.APITransformObject(histID, noseCone, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, elevation-noseConeR/2), WSM.Geom.Vector3d(1, 0, 0), WSM.Geom.Vector3d(0, 1, 0), WSM.Geom.Vector3d(0, 0, noseConeL/noseConeR)));
    trans = WSM.Geom.MakeRotationTransform(WSM.Geom.Line3d(centerPt, WSM.Geom.Vector3d(1, 0, 0)), -Math.PI/2);
    WSM.APITransformObject(histID, noseCone, trans);

    bodies = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nBodyType);
    if (bodies.length !== 1) {
        console.log("ERROR: there should only be the nose cone in the main history");
        return false;
    }
    noseCone = bodies[0];
    var bodies = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nInstanceType);
    if (bodies.length !== bladeNumber) {
        console.log("ERROR: wrong number of blade instances in the main history");
        return false;
    }
    bodies.push(noseCone);
    var rotorGroupID = WSM.APICreateGroup(histID, bodies, [], WSM.INVALID_ID);


    // Create nacelle
    var nacelle = WSM.APICreateHemisphere(histID, noseConeR, WSM.Geom.Point3d(0, 0, 0), 5.0);
    WSM.APITransformObject(histID, nacelle, WSM.Geom.Transf3d(WSM.Geom.Point3d(0, 0, elevation+noseConeR/1.8), WSM.Geom.Vector3d(1, 0, 0), WSM.Geom.Vector3d(0, 1, 0), WSM.Geom.Vector3d(0, 0, tailConeL/noseConeR)));
    trans = WSM.Geom.MakeRotationTransform(WSM.Geom.Line3d(centerPt, WSM.Geom.Vector3d(1, 0, 0)), Math.PI/2);
    WSM.APITransformObject(histID, nacelle, trans);

    bodies = WSM.APIGetAllObjectsByTypeReadOnly(histID, WSM.nBodyType);
    if (bodies.length !== 1) {
        console.log("ERROR: there should only be the nacelle in the main history");
        return false;
    }
    var nacelleGroupID = WSM.APICreateGroup(histID, bodies, [], WSM.INVALID_ID);

    // Create the pole
    var pole = WSM.APICreateCylinder(histID, WSM.Geom.Point3d(0, yBaseCenter, 0), poleBaseR, elevation, 5.0);

    ray = WSM.Geom.Line3d(WSM.Geom.Point3d(0, yBaseCenter, elevation), WSM.Geom.Vector3d(0, 0, 1));
    faces = WSM.APIRayFireReadOnly(histID, ray, .000001, false, false, true);
    if (faces.length !== 1) {
        console.log("ERROR: can't find the top pole face");
        return false;
    }
    WSM.APIScaleFace(histID, faces[0], poleTopR/poleBaseR);
}
