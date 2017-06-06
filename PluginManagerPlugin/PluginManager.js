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
    var descriptionContentHTML = "";
    // plugInInstalled returns a boolean value for whether the current plugin is installed.
    var plugInInstalled = PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1;
    // plugInChecked returns a "checked" value to insert in the checkbox div, if the plugin is installed at initialization time
    var plugInChecked;
    if (plugInInstalled) {
        plugInChecked = "checked";
    }

    var pluginCheckboxName = pluginName.replace(/\s/g,'') + "Checkbox";
    var plugInCheckBox = "<div id='checkbox' style='float: right; display: inline;'><input type='checkbox' id='" + pluginCheckboxName + "' name='plugInCheckBox' value='Installed' " + plugInChecked + "></input></div>";
    var pluginNameHTML = "<div><div id='pluginName''>" + pluginName + "</div>" + plugInCheckBox + "</div>";
    //Thing will diverge here with custom description...
    if(pluginCustomDescription != undefined)
    {
      //create an iframe to encapsulate the plugin custom description html.
      descriptionContentHTML = "<div><iframe src='" + pluginLocation + "/" + pluginCustomDescription +
        "'></iframe></div>";
    }
    else
    {
        if(pluginDescription == undefined)
        {
            pluginDescription = "Description not provided for this plugin.";
        }

        descriptionContentHTML = "<div style='clear: both'>" + pluginDescription + "</div>";
    }

        var installFunctionCB = function() {
        FormItInterface.CallMethod("FormIt.InstallPlugin", JSON.stringify(pluginLocation));
        PluginManager.InstalledPlugins.push(pluginLocation);
        console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));
        console.log("Attempted to install: " + pluginLocation);
        this.value = "Uninstall";
        this.onclick = uninstallFunctionCB;
        document.getElementById(pluginCheckboxName).checked = true;
    };

    var uninstallFunctionCB = function() {
        FormItInterface.CallMethod("FormIt.UninstallPlugin",  JSON.stringify(pluginLocation));
        PluginManager.RemovePluginFromInstalled(pluginLocation);
        console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));
        console.log("Attempted to uninstall: " + pluginLocation);
        this.value = "Install";
        this.onclick = installFunctionCB;
        document.getElementById(pluginCheckboxName).checked = false;
    };

    var pluginCheckboxFunc = uninstallFunctionCB;

    if (plugInInstalled)
    {
        pluginCheckboxFunc = uninstallFunctionCB;
    }
    else
    {       
        pluginCheckboxFunc = installFunctionCB;
    }

    $("#accordion").append(pluginNameHTML);
    $("#accordion").append(descriptionContentHTML);
    $("#accordion").accordion("refresh");
   
    var plugInCheckbox = document.getElementById(pluginCheckboxName);
    plugInCheckbox.onclick = pluginCheckboxFunc;
    $('#accordion input[type="checkbox"]').click(function(e) {
    e.stopPropagation();
});
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
