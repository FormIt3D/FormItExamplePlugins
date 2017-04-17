// CreateBlock runs from FormIt's built-in JS engine.
// NOTE!! FormIt runs in one process and the HTML panel runs in another process.
// This is why window.NewFormItInterface.CallMethod is needed to communicate
// between the 2 processes.
function CreateBlock(args)
{
    //debugger;
    var histID = WSM.APIGetActiveHistory();
    var pt1 = WSM.Geom.Point3d(0.0, 0.0, 0.0);
    var pt2 = WSM.Geom.Point3d(args.w, args.l, args.h);
    var blockID = WSM.APICreateBlock(histID, pt1, pt2);
}

// Submit runs from the HTML page.  This script gets loaded up in both FormIt's
// JS engine and also in the embedded web JS engine inside the panel.
function Submit()
{
    var args = {
    "w": parseFloat(document.a.width.value),
    "l": parseFloat(document.a.length.value),
    "h": parseFloat(document.a.height.value)
    }
    console.log("CreateBlock");
    console.log("args");
    // NOTE: window.FormItInterface.CallMethod will call the CreateBlock function
    // defined above with the given args.  This is needed to communicate
    // between the web JS enging process and the FormIt process.
    window.FormItInterface.CallMethod("CreateBlock", JSON.stringify(args));
}
