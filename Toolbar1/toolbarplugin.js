ToolbarPlugin = {};

ToolbarPlugin.Button = function()
{
    console.log("Toolbar Plugin button clicked!!");
}
FormIt.Commands.RegisterJSCommand("ToolbarPlugin.Button");

ToolbarPlugin.HelloBlockPanelCreated = false;
ToolbarPlugin.CreatePanel = function()
{
    if (!ToolbarPlugin.HelloBlockPanelCreated)
    {
        // TODO (hauswirth) Need a way to get the plugin URL so the panel URL isn't hardcoded.
        FormIt.UI.CreatePanel("Only One Panel", "https://formit3d.github.io/FormItExamplePlugins/Toolbar1/panel.html");
    }
    else
    {
        console.log("Panel already created!!");
    }
    ToolbarPlugin.HelloBlockPanelCreated = true;
}
FormIt.Commands.RegisterJSCommand("ToolbarPlugin.CreatePanel");
