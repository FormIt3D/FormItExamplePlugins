// CreateBlock runs from Pyramid.
function CreateBlock(args)
{
    //debugger;
    var histID = WSM.APIGetActiveHistory();
    var pt1 = WSM.Geom.Point3d(0.0, 0.0, 0.0);
    var pt2 = WSM.Geom.Point3d(args.w, args.l, args.h);
    var blockID = WSM.APICreateBlock(histID, pt1, pt2);
    return blockID;
}

// Submit runs from the HTML page.
function Submit()
{
    var args = {
    "w": parseFloat(document.a.width.value),
    "l": parseFloat(document.a.length.value),
    "h": parseFloat(document.a.height.value)
    }
    window.NewFormItInterface.ConsoleLog("CreateBlock");
    var argsString = JSON.stringify(args);
    window.NewFormItInterface.ConsoleLog("args: " + argsString);
    window.NewFormItInterface.CallMethod("CreateBlock", argsString, function(result)
    {
        window.NewFormItInterface.ConsoleLog("CreateBlock Result: " + result);
    });
    window.PluginDialog.Close();
}
