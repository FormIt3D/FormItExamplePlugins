PluginManager = {};

PluginManager.InstalledPlugins = [];

PluginManager.createHeader = function() {
    var headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    headerDiv.className = 'header';
    headerDiv.innerHTML = 'Plugin Manager';
    window.document.body.appendChild(headerDiv);

    var linkRepoContainer = document.createElement('div');
    linkRepoContainer.style = "display: block";
    headerDiv.appendChild(linkRepoContainer);

    var linkRepoInput = document.createElement('INPUT');
    linkRepoInput.setAttribute("type", "text");
    linkRepoInput.setAttribute("placeholder", "Paste new repo URL here...");
    linkRepoInput.className = 'linkRepoInput';
    linkRepoContainer.appendChild(linkRepoInput);

    var linkRepoButton = document.createElement('button');
    linkRepoButton.setAttribute("type", "input");
    linkRepoButton.className = 'linkRepoButton';
    linkRepoContainer.appendChild(linkRepoButton);
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

PluginManager.MakePluginRepoDivs = function()
{
    console.log("---> PluginManager.MakePluginRepoDivs");

    //TODO (hauswij): Figure out how to get the full URL of the plugins. This will be needed for installed comparisons.
    //Ex. FormIt will return: http://localhost:8000/PluginManager for the installed PluginManager. Need to figure out
    // how to get this current web URL to add to beginning of plugin addresses used here.
    // Diff:
    // Installed Plugin: http://localhost:8000/PluginManager
    // Building Now: ../PluginManager
    // I'm hard-coding this bit for now.
    var originURL = document.URL;
    originURL = originURL.replace('PluginManagerPlugin\/PluginManager.html', '');
    //console.log("pluginsites: " + this.responseText);
    var repoArray = JSON.parse(this.responseText);
    for(var i=0; i < repoArray.length; i++)
    {
         // Now add the plugins.
        var pluginsManifest = repoArray[i] + "/plugins.json";
        var request = new XMLHttpRequest();
        request.addEventListener("load", PluginManager.AddPluginRepo);
        request.pluginSiteURL = repoArray[i];
        request.open("GET", pluginsManifest);
        request.send();
    }
}

PluginManager.AddPluginRepo = function()
{
    var repoPlugins = JSON.parse(this.responseText);
    var repoElemDiv = document.createElement('div');
    repoElemDiv.id = repoPlugins.RepoName.replace(/\s/g,'');
    repoElemDiv.className = "repoName";
    repoElemDiv.innerHTML = repoPlugins.RepoName;
    window.document.body.appendChild(repoElemDiv);

    var repoContainerDiv = document.createElement('div');
    repoContainerDiv.id = repoPlugins.RepoName.replace(/\s/g,'') + "Container";
    repoContainerDiv.className = "repoContainer";
    repoElemDiv.appendChild(repoContainerDiv);
    repoContainerDiv.onclick = function(e) {
        e.stopPropagation();
    }

    // start accordion collapsed
    repoElemDiv.firstElementChild.style.display = "none";
    repoElemDiv.onclick = function()
    {
        repoElemDiv.classList.toggle("active");
        var firstChild = repoElemDiv.firstElementChild;
        if (firstChild.style.display === "block")
            {
            firstChild.style.display = "none";
            } else {
            firstChild.style.display = "block";
        }
    }

    // Now add the plugins.
    repoPlugins.Plugins.forEach(function(element) {
        var request = new XMLHttpRequest();
        request.addEventListener("load", PluginManager.MakePluginDiv);
        request.pluginSiteURL = this.pluginSiteURL;
        request.parentElemDiv = repoContainerDiv;
        request.PluginURL = this.pluginSiteURL + "/" + element;
        request.open("GET", this.pluginSiteURL + "/" + element + "/manifest.json");
        request.send();
        }, this);
}


PluginManager.MakePluginDiv = function(plugin)
{
    //console.log("---> PluginManager.MakePluginDiv");
    //TODO (herrj): Check if this plugin is in installed plugin list and skip if it is not.
    var pluginData = JSON.parse(this.responseText);
    var pluginName = pluginData["PluginName"];
    //console.log("Creating Plugin: " + pluginName);
    var pluginLocation = this.PluginURL;
    console.log("Plugin URL: " + pluginLocation);
    var pluginDescription = pluginData["PluginDescription"];
    //NOTE: "CustomDescription": *.html
    var pluginCustomDescription = pluginData["CustomDescription"];
    //console.log("Custom Description: " + pluginCustomDescription);

    var pluginContainerDiv = document.createElement('div');
    pluginContainerDiv.id = pluginName.replace(/\s/g,'') + "Container";
    this.parentElemDiv.appendChild(pluginContainerDiv);

    var pluginNameDiv = document.createElement('div');
    pluginNameDiv.id = 'pluginName' + pluginName.replace(/\s/g,'');
    pluginNameDiv.className = 'pluginName';
    pluginNameDiv.innerHTML = pluginName;
    pluginContainerDiv.appendChild(pluginNameDiv);
    pluginContainerDiv.className = 'pluginContainer';


    var pluginDescriptionDiv = document.createElement('div');
    pluginDescriptionDiv.id = pluginName.replace(/\s/g,'') + "Description";
    pluginDescriptionDiv.className = 'pluginDescription';
    pluginDescriptionDiv.style = 'clear: both;';
    pluginContainerDiv.appendChild(pluginDescriptionDiv);

    // start accordion collapsed
    pluginDescriptionDiv.style.display = "none";

    pluginNameDiv.onclick = function(e)
        {
            pluginNameDiv.classList.toggle("active");
            if (pluginDescriptionDiv.style.display === "block")
                {
                pluginDescriptionDiv.style.display = "none";
                } else {
                pluginDescriptionDiv.style.display = "block";
                }
            e.stopPropagation();
        }

    pluginDescriptionDiv.onclick = function(e)
        {
            e.stopPropagation();
        }


    // Add checkbox input
    var checkboxElemDiv = document.createElement('div');
    checkboxElemDiv.id = pluginName.replace(/\s/g,'') + "Checkbox";
    checkboxElemDiv.className = "checkboxDiv";

    pluginNameDiv.appendChild(checkboxElemDiv);
    var checkboxElem = document.createElement("input");
    checkboxElem.id = pluginName.replace(/\s/g,'') + "Checkbox";
    checkboxElem.type = 'checkbox';
    checkboxElem.name = 'plugInCheckBox';
    checkboxElem.checked = PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1;
    checkboxElemDiv.onclick = function(e)
    {
        if (PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1)
        {
            FormItInterface.CallMethod("FormIt.UninstallPlugin",  pluginLocation);
            PluginManager.RemovePluginFromInstalled(pluginLocation);
        }
        else
        {
            FormItInterface.CallMethod("FormIt.InstallPlugin", pluginLocation);
            PluginManager.InstalledPlugins.push(pluginLocation);
        }
        e.stopPropagation();
    }
    checkboxElemDiv.appendChild(checkboxElem);

    //Thing will diverge here with custom description...
    if(pluginCustomDescription != undefined || pluginDescription != undefined)
    {
        pluginDescriptionDiv.appendChild(document.createTextNode(pluginDescription));
    }
    else
    {
        if(pluginDescription == undefined)
        {
            pluginDescription = "Description not provided for this plugin.";
            pluginDescriptionDiv.appendChild(document.createTextNode(pluginDescription));
        }
    }
}

PluginManager.CreatePlugins = function()
{
    console.log("---> PluginManager.CreatePlugins");
    //Clear the body to reconstruct the plugin UI.
    //document.body.innerHTML = "";
    PluginManager.createHeader();
    if (true)
    {
        //Start by getting internal plugins and adding them to the panel.
        console.log("Calling FormIt.GetInstalledPlugins");
        FormItInterface.CallMethod("FormIt.GetInstalledPlugins", "",
            function(installedPlugins)
            {
                PluginManager.InstalledPlugins = eval(installedPlugins);
                if (!PluginManager.InstalledPlugins)
                {
                    PluginManager.InstalledPlugins = [];
                }
                console.log("PluginManager.InstalledPlugins: " + JSON.stringify(PluginManager.InstalledPlugins));

                //Get the list of plugins from the top level manifest
                //Keep things synchronous. Use callback method to spin off creation of plugins
                console.log("************** Requesting plugins.json to call PluginManager.MakePluginRepoDivs.");
                var request = new XMLHttpRequest();
                request.addEventListener("load", PluginManager.MakePluginRepoDivs);
                request.open("GET", "pluginsites.json");
                request.send();
            });
    }
}
