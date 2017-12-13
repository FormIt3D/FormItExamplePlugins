if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.ObjectAttributes2 == 'undefined')
{
    FormItExamplePlugins.ObjectAttributes2 = {};
}

// Submit runs from the HTML page.
FormItExamplePlugins.ObjectAttributes2.Submit = function()
{
    var args = {
        "key": "Building Type",
        "value": document.a.buildingType.value
    }

    FormItInterface.ConsoleLog("Create Attribute");
    FormItInterface.ConsoleLog("args: " + JSON.stringify(args));
    FormItInterface.CallMethod("FormItExamplePlugins.ObjectAttributes2.ApplyWSMAttriblute", args);
}

// FormItExamplePluginsApplyWSMAttriblute runs from the FormIt App side.
FormItExamplePlugins.ObjectAttributes2.ApplyWSMAttriblute = function(args)
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
