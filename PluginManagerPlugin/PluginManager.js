PluginManager = {};

PluginManager.InstalledPlugins = [];

PluginManager.GeneratePluginHTML = function(response)
{
    //TODO (herrj) Needs to be implemented. Initial Idea: These "installed" plugins are added first to the PluginManager.html
    // which in turn means they will be at the top. Goal: top plugins = installed plugins, bottom plugins = uninstalled
    //TODO (herrj): Could potentially just concatenated installed and uninstalled plugin list and sort alphanumerically.
    alert("Generating HTML for: " + response);
}

PluginManager.RemovePluginFromInstalled = function(pluginLocation)
{
    var newInstalledList = [];
    for(var i=0; i<PluginManager.InstalledPlugins.length; i++)
    {
        if(PluginManager.InstalledPlugins[i] != pluginLocation)
        {
            newInstalledList.push(PluginManager.InstalledPlugins[i]);
        }
    }
    PluginManager.InstalledPlugins = newInstalledList;
}

PluginManager.GetPluginManifest = function()
{
    //TODO (herrj): Check if this plugin is in installed plugin list and skip if it is not.
    var pluginData = JSON.parse(this.responseText);
    var pluginName = pluginData["PluginName"];
    console.log("Creating Plugin: " + pluginName);
    var pluginLocation = this.PluginURL;
    console.log("Plugin URL: " + pluginLocation);
    var pluginDescription = pluginData["PluginDescription"];
    //NOTE: "CustomDescription": *.html
    var pluginCustomDescription = pluginData["CustomDescription"];
    console.log("Custom Description: " + pluginCustomDescription);
    var pluginNameHTML = "<h3>" + pluginName + "</h3>";
    var descriptionContentHTML = "";
    var pluginButtonName = pluginName.replace(/\s/g,'') + "Button";
    //Thing will diverge here with custom description...
    if(pluginCustomDescription != undefined)
    {
      //create an iframe to encapsulate the plugin custom description html.
      descriptionContentHTML = "<div><iframe src='" + pluginLocation + "/" + pluginCustomDescription + "'></iframe><input id='" + pluginButtonName + "' type=button value='Install Plugin'></input></div>";
    }
    else
    {
        if(pluginDescription == undefined)
        {
            pluginDescription = "Description not provided for this plugin.";
        }
        //NOTE: Add Install button before closing div tag
        descriptionContentHTML = "<div>" + pluginDescription + "<input id='" + pluginButtonName + "' type=button value='Install Plugin'></input></div>";
    }
    $("#accordion").append(pluginNameHTML);
    $("#accordion").append(descriptionContentHTML);
    $("#accordion").accordion("refresh");
    var pluginButton = document.getElementById(pluginButtonName);
    console.log("Plugin Button: " + pluginButton);
    var installFunction = function() {
        FormIt.InstallPlugin(pluginLocation);
        PluginManager.InstalledPlugins.push(pluginLocation);
        console.log("Attempted to install: " + pluginLocation);
        this.value = "Uninstall Plugin";
        this.onclick = uninstallFunction;
    };
    var uninstallFunction = function() {
        FormIt.UninstallPlugin(pluginLocation);
        PluginManager.RemovePluginFromInstalled(pluginLocation);
        console.log("Attmpted to uninstall: " + pluginLocation);
        this.value = "Install Plugin";
        this.onclick = installFunction;
    };
    pluginButton.onclick = installFunction;
    console.log(pluginName + " was added to accordion.");
}

PluginManager.BuildPluginInformation = function()
{
    console.log("Received Manifest for Manager: " + this.responseText);
    var pluginArray = JSON.parse(this.responseText);
    //TODO (herrj): Figure out how to get the full URL of the plugins. This will be needed for installed comparisons.
    //Ex. FormIt will return: http://localhost:8000/PluginManager for the installed PluginManager. Need to figure out
    // how to get this current web URL to add to beginning of plugin addresses used here.
    // Diff:
    // Installed Plugin: http://localhost:8000/PluginManager
    // Building Now: ../PluginManager
    // I'm hard-coding this bit for now.
    var HARDCODEDLOCATION = "http://localhost:8000/";
    console.log("Plugin Array Generated: " + pluginArray["Plugins"].length + " " + pluginArray);
    for(var i=0; i<pluginArray["Plugins"].length; i++)
    {
        var directoryLocation = "../" + pluginArray["Plugins"][i];
        var directoryLocationFull = directoryLocation + "/manifest.json";
        var directoryURL = HARDCODEDLOCATION + pluginArray["Plugins"][i];
        console.log("Building plugin request for: " + directoryLocation);
        var request = new XMLHttpRequest();
        request.addEventListener("load", PluginManager.GetPluginManifest);
        request.PluginURL = directoryURL;
        request.open("GET", directoryLocationFull);
        request.send();
    }
}

PluginManager.CreatePlugins = function()
{
    console.log("Create plugins firing!");
    //Clear the body to reconstruct the plugin UI.
    //document.body.innerHTML = "";
    
    //Skip this for now in web since we don't have persisted plugins...
    if(FormItInterface.Platform == WINDOWS)
    {
        //Start by getting internal plugins and adding them to the panel.
        var installedPlugins = FormItInterface.CallMethod("GetInstalledPlugins", "");
        
        //Loop over the list of installed plugins and add them to the Plugin Manager.
        
        //TODO (herrj): Support for persistence plugins hasn't been added
        for(var i=0; i<installedPlugins.length; i++)
        {
            $.ajax({
                method: "GET",
                url: "manifest.json",
            }).done(PluginManager.GeneratePluginHTML(response));
        }
    }
    
    //Get the list of plugins from the top level manifest
    //Keep things synchronous. Use callback method to spin off creation of plugins
    var request = new XMLHttpRequest();
    request.addEventListener("load", PluginManager.BuildPluginInformation);
    request.open("GET", "../manifest.json");
    request.send();
}




