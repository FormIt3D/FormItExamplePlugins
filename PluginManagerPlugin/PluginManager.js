PluginManager = {};

PluginManager.InstalledPlugins = [];

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
    console.log("---> PluginManager.GetPluginManifest");
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
      descriptionContentHTML = "<div><iframe src='" + pluginLocation + "/" + pluginCustomDescription +
        "'></iframe><input id='" + pluginButtonName + "' type=button value=BUTTON_TEXT></input></div>";
    }
    else
    {
        if(pluginDescription == undefined)
        {
            pluginDescription = "Description not provided for this plugin.";
        }
        //NOTE: Add Install button before closing div tag
        descriptionContentHTML = "<div>" + pluginDescription + "<input id='" + pluginButtonName +
            "' type=button value=BUTTON_TEXT></input></div>";
    }

    var installFunction = function() {
        FormItInterface.CallMethod("FormIt.InstallPlugin", JSON.stringify(pluginLocation));
        PluginManager.InstalledPlugins.push(pluginLocation);
        console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));
        console.log("Attempted to install: " + pluginLocation);
        this.value = "Uninstall Plugin";
        this.onclick = uninstallFunction;
    };
    var uninstallFunction = function() {
        FormItInterface.CallMethod("FormIt.UninstallPlugin",  JSON.stringify(pluginLocation));
        PluginManager.RemovePluginFromInstalled(pluginLocation);
        console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));
        console.log("Attempted to uninstall: " + pluginLocation);
        this.value = "Install Plugin";
        this.onclick = installFunction;
    };

    var pluginButtonFunc = uninstallFunction;
    if (PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1)
    {
        console.log("Setting button text: " + 'Uninstall Plugin');
        descriptionContentHTML = descriptionContentHTML.replace('BUTTON_TEXT', 'Uninstall Plugin');
    }
    else
    {
        console.log("Setting button text: " + 'Install Plugin');
        descriptionContentHTML = descriptionContentHTML.replace('BUTTON_TEXT', 'Install Plugin');        
        pluginButtonFunc = installFunction;
    }

    $("#accordion").append(pluginNameHTML);
    $("#accordion").append(descriptionContentHTML);
    $("#accordion").accordion("refresh");
    var pluginButton = document.getElementById(pluginButtonName);
    pluginButton.onclick = pluginButtonFunc;
    
    console.log(pluginName + " was added to accordion.");
}

PluginManager.BuildPluginInformation = function()
{
    console.log("---> PluginManager.BuildPluginInformation");

    //TODO (hauswij): Figure out how to get the full URL of the plugins. This will be needed for installed comparisons.
    //Ex. FormIt will return: http://localhost:8000/PluginManager for the installed PluginManager. Need to figure out
    // how to get this current web URL to add to beginning of plugin addresses used here.
    // Diff:
    // Installed Plugin: http://localhost:8000/PluginManager
    // Building Now: ../PluginManager
    // I'm hard-coding this bit for now.
    var originURL = document.URL;
    originURL = originURL.replace('PluginManagerPlugin\/PluginManager.html', '');
    console.log("Doc URL: " + document.URL);
    console.log("Origin URL: " + originURL);
    var pluginArray = JSON.parse(this.responseText);
    console.log("pluginArray: " + JSON.stringify(pluginArray));
    for(var i=0; i < pluginArray["Plugins"].length; i++)
    {
        var pluginURL = originURL + pluginArray["Plugins"][i];
        //console.log("Building plugin request for: " + pluginURL);
        var manifestURL = pluginURL + "/manifest.json";
        //console.log("manifestURL: " + manifestURL);
        var request = new XMLHttpRequest();
        request.addEventListener("load", PluginManager.GetPluginManifest);
        request.PluginURL = pluginURL;
        request.open("GET", manifestURL);
        request.send();
    }
}

PluginManager.CreatePlugins = function()
{
    console.log("---> PluginManager.CreatePlugins");
    //Clear the body to reconstruct the plugin UI.
    //document.body.innerHTML = "";
    if (true)
    {
        //Start by getting internal plugins and adding them to the panel.
        //console.log("Calling FormIt.GetInstalledPlugins");
        FormItInterface.CallMethod("FormIt.GetInstalledPlugins", "",
            function(installedPlugins)
            {
                PluginManager.InstalledPlugins = eval(installedPlugins);
                console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));

                //Get the list of plugins from the top level manifest
                //Keep things synchronous. Use callback method to spin off creation of plugins
                console.log("************** Requesting plugins.json to call PluginManager.BuildPluginInformation.");
                var request = new XMLHttpRequest();
                request.addEventListener("load", PluginManager.BuildPluginInformation);
                request.open("GET", "plugins.json");
                request.send();
            });                
    }
}
