FlipAlongPlugin = {};
FlipAlongPlugin.ButtonX = function()
{
    //console.log("FlipAlongPlugin.ButtonX clicked!!");
    var selections = FormIt.Selection.GetSelections();
    //console.log("Selections: " + JSON.stringify(selections));
    var AABB = WSM.Utils.GetAxisAlignedBoundingBox(selections, WSM.Utils.CoordSystem.HCS);
    //console.log("AABB: " + JSON.stringify(AABB));
    
    var histID = FormIt.GetEditingHistoryID();
    //console.log("histID: " + histID);
    var pt1 = WSM.Geom.Point3d(AABB.upper.x, AABB.lower.y, AABB.lower.z); 
    var pt2 = WSM.Geom.Point3d(AABB.upper.x, AABB.upper.y, AABB.lower.z); 
    var pt3 = WSM.Geom.Point3d(AABB.upper.x, AABB.upper.y, AABB.upper.z); 
    //WSM.APICreateRectangle(histID, pt1, pt2, pt3, false);
    
    var trans = WSM.Geom.MakeRigidTransform(WSM.Geom.Point3d(AABB.upper.x * 2 + (AABB.upper.x - AABB.lower.x) * .1 , 0.0, 0.0) ,
        WSM.Geom.Vector3d(-1, 0, 0), WSM.Geom.Vector3d(0, 1, 0), WSM.Geom.Vector3d(0, 0, 1));
    
    WSM.APICopyOrSketchAndTransformObjects( histID, histID, selections, trans, 1 /*one copy */, false /*bGroupBodies*/);
}
FormIt.Commands.RegisterJSCommand("FlipAlongPlugin.ButtonX");

FlipAlongPlugin.ButtonY = function()
{
    //console.log("FlipAlongPlugin.ButtonY clicked!!");
    var selections = FormIt.Selection.GetSelections();
    var AABB = WSM.Utils.GetAxisAlignedBoundingBox(selections, WSM.Utils.CoordSystem.HCS);
    
    var histID = FormIt.GetEditingHistoryID();
    var pt1 = WSM.Geom.Point3d(AABB.lower.x, AABB.upper.y, AABB.lower.z); 
    var pt2 = WSM.Geom.Point3d(AABB.upper.x, AABB.upper.y, AABB.lower.z); 
    var pt3 = WSM.Geom.Point3d(AABB.upper.x, AABB.upper.y, AABB.upper.z); 
    //WSM.APICreateRectangle(histID, pt1, pt2, pt3, false);

    var trans = WSM.Geom.MakeRigidTransform(WSM.Geom.Point3d(0.0, AABB.upper.y * 2 + (AABB.upper.y - AABB.lower.y) * .1 , 0.0) ,
        WSM.Geom.Vector3d(1, 0, 0), WSM.Geom.Vector3d(0, -1, 0), WSM.Geom.Vector3d(0, 0, 1));
    
    WSM.APICopyOrSketchAndTransformObjects( histID, histID, selections, trans, 1 /*one copy */, false /*bGroupBodies*/);
}
FormIt.Commands.RegisterJSCommand("FlipAlongPlugin.ButtonY");

FlipAlongPlugin.ButtonZ = function()
{
    //console.log("FlipAlongPlugin.ButtonZ clicked!!");
    var selections = FormIt.Selection.GetSelections();
    var AABB = WSM.Utils.GetAxisAlignedBoundingBox(selections, WSM.Utils.CoordSystem.HCS);
    
    var histID = FormIt.GetEditingHistoryID();
    var pt1 = WSM.Geom.Point3d(AABB.lower.x, AABB.lower.y, AABB.upper.z); 
    var pt2 = WSM.Geom.Point3d(AABB.upper.x, AABB.lower.y, AABB.upper.z); 
    var pt3 = WSM.Geom.Point3d(AABB.upper.x, AABB.upper.y, AABB.upper.z); 
    //WSM.APICreateRectangle(histID, pt1, pt2, pt3, false);
    
    var trans = WSM.Geom.MakeRigidTransform(WSM.Geom.Point3d(0.0, 0.0, AABB.upper.z * 2 + (AABB.upper.z - AABB.lower.z) * .1) ,
        WSM.Geom.Vector3d(1, 0, 0), WSM.Geom.Vector3d(0, 1, 0), WSM.Geom.Vector3d(0, 0, -1));
    
    WSM.APICopyOrSketchAndTransformObjects( histID, histID, selections, trans, 1 /*one copy */, false /*bGroupBodies*/);
}
FormIt.Commands.RegisterJSCommand("FlipAlongPlugin.ButtonZ");
