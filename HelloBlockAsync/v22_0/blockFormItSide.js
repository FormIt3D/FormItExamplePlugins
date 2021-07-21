
// CreateBlock runs from Pyramid.
function CreateBlock(args)
{
    var histID = FormIt.GroupEdit.GetEditingHistoryID();
    var pt1 = WSM.Geom.Point3d(0.0, 0.0, 0.0);
    var pt2 = WSM.Geom.Point3d(FormIt.PluginUtils.currentUnits(args.w),
                               FormIt.PluginUtils.currentUnits(args.l),
                               FormIt.PluginUtils.currentUnits(args.h));
    var blockID = WSM.APICreateBlock(histID, pt1, pt2);
    return {"blockID" : blockID,
             "Result" : "It Worked!!"};
}

// Submit runs from the HTML page.
function Submit()
{
    var args = {
    "w": parseFloat(document.a.width.value),
    "l": parseFloat(document.a.length.value),
    "h": parseFloat(document.a.height.value)
    }
    //console.log("CreateBlock");
    //console.log("args");
    FormItInterface.CallMethod("CreateBlock", args);
}
