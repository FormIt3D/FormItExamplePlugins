FormItPluginManagerToolbar = {};
FormItPluginManagerToolbar.PluginLocation = "PLUGINLOCATION";
FormItPluginManagerToolbar.ShowDialog = function()
{
    var dialogParams = {
    "PluginName": "FormIt Plugin Manager",
    "DialogBox": "PLUGINLOCATION/../PluginManagerPlugin/PluginManager.html",
    "DialogBoxWidth": 640,
    "DialogBoxHeight": 480,
    "DialogBoxType": "Modeless"};

    console.log("FormItPluginManagerToolbar.ShowDialog: " + FormItPluginManagerToolbar.PluginLocation);
    FormIt.CreateDialogBox(JSON.stringify(dialogParams));
}
FormIt.Commands.RegisterJSCommand("FormItPluginManagerToolbar.ShowDialog");
