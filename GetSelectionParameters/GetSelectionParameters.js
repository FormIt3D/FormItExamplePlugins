if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.GetSelectionParameters == 'undefined')
{
    FormItExamplePlugins.GetSelectionParameters = {};
}

// these get populated with the getSelectionBasics()function
var nHistoryID;
var currentSelection;

// define how to get the current history, query the selection, and report the number of items successfully selected
FormItExamplePlugins.GetSelectionParameters.getSelectionBasics = function()
{
    console.log("\nGetting selection basics...");
    // get current history
    nHistoryID = FormIt.GroupEdit.GetEditingHistoryID();
    console.log("\nCurrent history: " + JSON.stringify(nHistoryID));

    // get current selection
    currentSelection = FormIt.Selection.GetSelections();
    // console.log("Current selection: " + JSON.stringify(currentSelection));

    // report how many items in the selection
    var currentSelectionLength = currentSelection.length;
    console.log("Number of objects in selection: " + currentSelectionLength);

    if (currentSelection.length === 0)
    {
        console.log("\nSelect something to begin.");
        return false;
    }
}

// define how to gather necessary data about the selection and store it in arrays
FormItExamplePlugins.GetSelectionParameters.getSelectionInfo = function(nHistoryID, currentSelection)
{
    // create or empty the arrays before starting
    FormItExamplePlugins.GetSelectionParameters.arrays = {};
    FormItExamplePlugins.GetSelectionParameters.arrays.typeArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.nObjectIDArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.nVertexIDArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.point3DArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.bIsEdgeTypeArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.arcCircleAnalysisArray = new Array();    
    FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnCircleArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnSplineArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.siblingArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.faceIDArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray = new Array();
    FormItExamplePlugins.GetSelectionParameters.arrays.bIsFaceOnCylinderArray = new Array();

    // for each object in the selection, get info
    for (var j = 0; j < currentSelection.length; j++)
    {
        // if you're not in the Main History, calculate the depth to extract the correct history data
        var historyDepth = (currentSelection[j]["ids"].length) - 1;

        // get objectID of the current selection, then push the results into an array
        var nObjectID = currentSelection[j]["ids"][historyDepth]["Object"];
        //console.log("Selection ID: " + nObjectID);
        FormItExamplePlugins.GetSelectionParameters.arrays.nObjectIDArray.push(nObjectID);
        //console.log("ObjectID array: " + FormItExamplePlugins.GetSelectionParameters.arrays.nObjectIDArray);

        // get object type of the current selection, then push the results into an array
        var nType = WSM.APIGetObjectTypeReadOnly(nHistoryID, nObjectID);
        //console.log("Object type: " + nType);
        FormItExamplePlugins.GetSelectionParameters.arrays.typeArray.push(nType);
        //console.log("Object type array: " + FormItExamplePlugins.GetSelectionParameters.arrays.typeArray);

        // test for whether each ID is an edge type, and push the results into an array
        var edgeType = 7;
        for (var m = 0; m < FormItExamplePlugins.GetSelectionParameters.arrays.typeArray.length; m++)
        {
            if (FormItExamplePlugins.GetSelectionParameters.arrays.typeArray[m] === edgeType)
            {
                FormItExamplePlugins.GetSelectionParameters.arrays.bIsEdgeTypeArray.push(true);
            }
            else 
            {
                FormItExamplePlugins.GetSelectionParameters.arrays.bIsEdgeTypeArray.push(false);
            }
        }
        //console.log("Is edgeType array: " + deanstein.GenerateStringLights.arrays.bIsEdgeTypeArray);




        // get edgeIDs of the current selection, then push the results into an array
        //WSM.Utils.GetFaceIDFromCoedge(nHistoryID, coedgeID);

        // get vertexIDs of the current selection, then push the results into an array
        var nVertexIDSet = WSM.APIGetObjectsByTypeReadOnly(nHistoryID, nObjectID, WSM.nVertexType, false);
        //console.log("nVertex ID: " + nVertexIDSet);
        FormItExamplePlugins.GetSelectionParameters.arrays.nVertexIDArray.push(nVertexIDSet);
        //console.log("VertexID array: " + FormItExamplePlugins.GetSelectionParameters.arrays.nVertexIDArray);

        // convert vertexIDs on each end of the line to point3Ds, then push the results into an array
        var point3D0 = WSM.APIGetVertexPoint3dReadOnly(nHistoryID, FormItExamplePlugins.GetSelectionParameters.arrays.nVertexIDArray[j][0]);
        var point3D1 = WSM.APIGetVertexPoint3dReadOnly(nHistoryID, FormItExamplePlugins.GetSelectionParameters.arrays.nVertexIDArray[j][1]);
        FormItExamplePlugins.GetSelectionParameters.arrays.point3DArray.push(point3D0);
        FormItExamplePlugins.GetSelectionParameters.arrays.point3DArray.push(point3D1);
        //console.log("Point3D array: " + JSON.stringify(FormItExamplePlugins.GetSelectionParameters.arrays.point3DArray));

        function getArcCircleAnalysis() 
        {
            // test selection for arc/circle attributes, then push the results into array
            var arcCircleAnalysis = WSM.APIIsEdgeOnCircleReadOnly(nHistoryID, nObjectID);
            //console.log("Report results of arc/circle analysis: " + JSON.stringify(arcCircleAnalysis));
            var bIsOnCircle = arcCircleAnalysis["bHasCircleAttribute"];
            //console.log("Is selection part of a circle? " + arcCircleAnalysis["bHasCircleAttribute"]);
            FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnCircleArray.push(bIsOnCircle);
            FormItExamplePlugins.GetSelectionParameters.arrays.arcCircleAnalysisArray.push(arcCircleAnalysis);
            return arcCircleAnalysis;
        }

        var arcCircleAnalysis = getArcCircleAnalysis();

        function getSplineAnalysis()
        {
            // test selection for spline attributes, then push the results into an array
            var splineAnalysis = WSM.APIIsEdgeOnSplineReadOnly(nHistoryID, nObjectID);
            var bIsOnSpline = splineAnalysis["bHasSplineAttribute"];
            FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnSplineArray.push(bIsOnSpline);
        }

        var splineAnalysis = getSplineAnalysis();

        // determine which siblings the current edge has, then push the results into an array
        var currentSiblings = "[" + arcCircleAnalysis["aAllCircleSiblings"] + "]";
        //console.log("Current sibling IDs: " + currentSiblings);
        FormItExamplePlugins.GetSelectionParameters.arrays.siblingArray.push(currentSiblings);

        // get all the faceIDs in the selection, then push the results into an array
        var currentFaceIDArray = WSM.APIGetBodyFacesReadOnly(nHistoryID, nObjectID);
        FormItExamplePlugins.GetSelectionParameters.arrays.faceIDArray.push(currentFaceIDArray);
        //console.log("Current faceID array: " + JSON.stringify(FormItExamplePlugins.GetSelectionParameters.arrays.faceIDArray));
    }
}

// define how to determine the operation type
FormItExamplePlugins.GetSelectionParameters.getOperationType = function()
{
    // TEST if selection contains only a single body
    if ((currentSelection.length === 1) && JSON.stringify(FormItExamplePlugins.GetSelectionParameters.arrays.typeArray) === "[1]")
    {
        var bIsSelectionBody = true;
    }
    else
    {
        var bIsSelectionBody = false;
    }
    console.log("TEST: Is selection set a single body only? " + bIsSelectionBody);

    // TEST if selection contains only edges
    bIsSelectionEdgeTypeOnly = booleanReduce(FormItExamplePlugins.GetSelectionParameters.arrays.bIsEdgeTypeArray);
    console.log("TEST: Is selection set edges only? " + bIsSelectionEdgeTypeOnly);

    // define how to determine the type of body operation to proceed with
    FormItExamplePlugins.GetSelectionParameters.getBodyOperationType = function()
    {
        function checkIfCylinder()
        {
            // for ever face, get the cylinder analysis results
            for (var i = 0; i < FormItExamplePlugins.GetSelectionParameters.arrays.faceIDArray[0].length; i ++)
            {
                var faceOnCylinderAnalysis = WSM.APIIsFaceOnCylinderReadOnly(nHistoryID, FormItExamplePlugins.GetSelectionParameters.arrays.faceIDArray[0][i]);
                FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray.push(faceOnCylinderAnalysis);
                //console.log("Face on cylinder analysis array: " + JSON.stringify(FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray));
            }
            
            // look through the results, and the first one to true for isOnCylinder ends the function and returns the index that was true
            for (var j = 0; j < FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray.length; j++)
            {
                if (FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray[j]["bHasCylinderAttribute"] === true)
                {
                    var cylinderTestResults = ["true", j];
                    return cylinderTestResults;
                }

                else
                {
                    var cylinderTestResults = false;
                }
            }
        }

        cylinderTestResults = checkIfCylinder();

        // if any of the faces have a cylinder attribute, we'll assume a cylinder because it's also one body
        if (cylinderTestResults)
        {
            var operationType = "cylinder";
        }

        else
        {
            var operationType = "genericBody";
        }

        return operationType;
    }

    // define how to determine the type of edge operation to proceed with
    FormItExamplePlugins.GetSelectionParameters.getEdgeOperationType = function() 
    {
        // TEST if the entire selection has the circle attribute
        var bIsArcCircleType = booleanReduce(FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnCircleArray);
        //console.log("bIsOnCirclArray: " + FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnCircleArray);

        // TEST if the entire selection has the spline attribute
        var bIsSplineType = booleanReduce(FormItExamplePlugins.GetSelectionParameters.arrays.bIsOnSplineArray);

        if (bIsArcCircleType === true)
        {
            var operationType = "arcCircle";
        }

        else if (bIsSplineType === true)
        {
            var operationType = "spline";
        }

        else
        {
            var operationType = "line";
        }

        //console.log("Operation type: " + operationType);
        return operationType;
    }

    // if edges only, determine what kind of edges
    if (bIsSelectionEdgeTypeOnly)
    {
        var operationType = FormItExamplePlugins.GetSelectionParameters.getEdgeOperationType();
    }
    // if a body only, determine what kind of body
    else if (bIsSelectionBody)
    {
        var operationType = FormItExamplePlugins.GetSelectionParameters.getBodyOperationType();
    }
    // otherwise, this is probably a mixed selection set
    else
    {
        var operationType = "mixed";
    }
    return operationType;
}

// define how to get the bounding box of the selection
FormItExamplePlugins.GetSelectionParameters.getBoundingBox = function()
{
    var boundingBox = WSM.APIGetBoxReadOnly(nHistoryID, FormItExamplePlugins.GetSelectionParameters.arrays.nObjectIDArray[0]);
    //console.log("Bounding box: " + JSON.stringify(boundingBox));

    var lowerX = boundingBox["lower"]["x"];
    var upperX = boundingBox["upper"]["x"];
    var boundingX = upperX - lowerX;

    var lowerY = boundingBox["lower"]["y"];
    var upperY = boundingBox["upper"]["y"];
    var boundingY = upperY - lowerY;

    var lowerZ = boundingBox["lower"]["z"];
    var upperZ = boundingBox["upper"]["z"];
    var boundingZ = upperZ - lowerZ;

    console.log("Bounding box X: " + boundingX);
    console.log("Bounding box Y: " + boundingY);
    console.log("Bounding box Z: " + boundingZ);

    var boundingBoxDimensions = new Array(boundingX, boundingY, boundingZ);
    return boundingBoxDimensions;
}

// macro list of all the definitions that are invoked, and in which order
FormItExamplePlugins.GetSelectionParameters.execute = function(args)
{
    console.clear();

    // execute the get selection basics routine
    FormItExamplePlugins.GetSelectionParameters.getSelectionBasics();

    // if selection is empty, stop
    if (currentSelection.length === 0)
    {
        return;
    }

    // execute the get selection info routine
    FormItExamplePlugins.GetSelectionParameters.getSelectionInfo(nHistoryID, currentSelection);

    // execute the get operation type routine
    var operationType = FormItExamplePlugins.GetSelectionParameters.getOperationType();

    // if the operation is a line, report specific parameters
    if (operationType === "line")
    {
        console.log("\nLine detected.");
    }

    // if the operation is an arc or circle, report specific parameters
    if (operationType === "arcCircle")
    {
        console.log("\nArc or circle detected.");
    }

    // if the operation is a spline, report specific parameters
    if (operationType === "spline")
    {
        console.log("\nSpline detected.");
    }

    // if the operation is a cylinder, report specific parameters
    if (operationType === "cylinder")
    {
        console.log("\nCylinder detected.");

        // get the bounding box
        console.log("\nGetting bounding box...");
        var boundingBoxDimensions = FormItExamplePlugins.GetSelectionParameters.getBoundingBox();

        // report the radius by checking the face analysis array, and accessing the first face that tested positive for cylinder attribute
        var cylinderRadius = FormItExamplePlugins.GetSelectionParameters.arrays.faceOnCylinderAnalysisArray[cylinderTestResults[1]]["radius"];
        console.log("\nCylinder radius: " + cylinderRadius);

        // report the height
        var cylinderHeight = boundingBoxDimensions[2];
        console.log("Cylinder height: " + cylinderHeight);

    }

    // if the operation is a generic body, report specific parameters
    if (operationType === "genericBody")
    {
        console.log("\nGeneric body detected.");

        // get the bounding box
        console.log("\nGetting bounding box...");
        var boundingBoxDimensions = FormItExamplePlugins.GetSelectionParameters.getBoundingBox();
    }

    // otherwise this is a mixed selection set, or otherwise not supported
    if (operationType === "mixed")
    {
        console.log("\nMixed or multiple selection set(s) detected.");

        // get the bounding box
        //console.log("\nGetting bounding box...");
        //var boundingBoxDimensions = FormItExamplePlugins.GetSelectionParameters.getBoundingBox();
    }

}

// Submit runs from the HTML page.  This script gets loaded up in both FormIt's
// JS engine and also in the embedded web JS engine inside the panel.
FormItExamplePlugins.GetSelectionParameters.Submit = function()
{
    var args = 
    {
    }

    console.log("FormItExamplePlugins.GetSelectionParameters.execute");
    console.log("args");
    // NOTE: window.FormItInterface.CallMethod will call the function
    // defined above with the given args.  This is needed to communicate
    // between the web JS enging process and the FormIt process.
    window.FormItInterface.CallMethod("FormItExamplePlugins.GetSelectionParameters.execute", args);
}