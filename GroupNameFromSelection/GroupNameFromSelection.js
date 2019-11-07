if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

FormItExamplePlugins.GroupNameFromSelection = {};
FormItExamplePlugins.GroupNameFromSelection.GetGroupName = function()
{
    var selection = FormIt.Selection.GetSelections();
    //console.log(JSON.stringify(selection));
    // Check that we only got 1 selection.
    if (selection.length == 1)
    {
        //var finalHistory = selection[0].ids[0].History;
        var selectedObject = selection[0];
        //console.log("selectedObject: " + JSON.stringify(selectedObject));
        // Check if the selection is an instance
        if (WSM.Utils.IsObjectType(selectedObject, WSM.nInstanceType))
        {
            //console.log("Got WSM.nInstanceType");
            var History = selectedObject.ids[0].History;
            var Object = selectedObject.ids[0].Object;
            //console.log("History: " + History + " Object: " + Object);
            var refHistory = WSM.APIGetGroupReferencedHistoryReadOnly(History, Object);
            console.log(FormIt.Model.GetGroupHistoryName(refHistory));
        }
    }
}

FormItExamplePlugins.GroupNameFromSelection.msg = "FormIt.Message.kSelectionsChanged";
FormItExamplePlugins.GroupNameFromSelection.Listener = FormIt.Messaging.NewMessageListener();
FormItExamplePlugins.GroupNameFromSelection.Listener[FormItExamplePlugins.GroupNameFromSelection.msg] = function(msg)
{
    //console.log("(FormItExamplePlugins.GroupNameFromSelection) msg: " + msg);
    FormItExamplePlugins.GroupNameFromSelection.GetGroupName();
};
FormItExamplePlugins.GroupNameFromSelection.Listener.SubscribeMessage(FormItExamplePlugins.GroupNameFromSelection.msg);
