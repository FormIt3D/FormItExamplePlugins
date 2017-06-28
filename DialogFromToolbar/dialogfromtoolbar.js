DialogFromToolbar = {};
DialogFromToolbar.PluginLocation = "PLUGINLOCATION";
DialogFromToolbar.ShowDialog = function()
{
    var dialogParams = {
    "PluginName": "Dialog From Toolbar",
    "DialogBox": "PLUGINLOCATION/../HelloBlock/hello_block.html",
    "DialogBoxWidth": 300,
    "DialogBoxHeight": 180,
    "DialogBoxType": "Modeless"};

    console.log("DialogFromToolbar.ShowDialog: " + DialogFromToolbar.PluginLocation );
    FormIt.CreateDialogBox(JSON.stringify(dialogParams));
}
FormIt.Commands.RegisterJSCommand("DialogFromToolbar.ShowDialog");
