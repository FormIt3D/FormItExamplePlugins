// Submit runs from the HTML page.
function Submit()
{
    var args = {
        "key": document.a.key.value,
        "value": document.a.value.value
    }
    FormItInterface.ConsoleLog("Create Attribute");
    FormItInterface.ConsoleLog("args: " + JSON.stringify(args));
    FormItInterface.CallMethod("FormItExamplePluginsApplyWSMAttriblute", args);
}

function FormItExamplePluginsApplyWSMAttriblute(args)
{
    if (FormIt.Selection.HasSelections())
    {
        FormIt.UndoManagement.BeginState();
        var selectedObjs = FormIt.Selection.GetSelections();
        selectedObjs.forEach(function(obj) {
            console.log("obj: " + JSON.stringify(obj));
            var WSMObj = obj.ids[obj.ids.length - 1];
            console.log("WSMObj: " + JSON.stringify(WSMObj));
            WSM.APICreateStringAttribute(WSMObj.History, args.key, args.value, WSMObj.Object);
        }, this);
        FormIt.UndoManagement.EndState("FormItExamplePluginsApplyWSMAttriblute");
    }
}
