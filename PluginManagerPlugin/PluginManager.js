if (typeof FormItExamplePlugins === 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.PluginManager === 'undefined')
{
    FormItExamplePlugins.PluginManager = {};
}

FormItExamplePlugins.PluginManager.InstalledPlugins = [];

// SaveRepoLink saved the added repo into the app registry.
// Returns true if the repo hasn't already been added.
FormItExamplePlugins.PluginManager.SaveRepoLink = function(repoURL)
{
    // Make sure the app supports SaveAppData/RestoreAppData
    var typeofRestoreAppData = typeof FormIt.RestoreAppData;
    if (typeofRestoreAppData === 'function')
    {
        var addedRepos = FormIt.RestoreAppData('FormItExamplePlugins.PluginManagerPlugin', '[]');
        addedRepos = JSON.parse(addedRepos);

        // Check if repo is already added.
        for (var alreadyAddedRepo in addedRepos)
        {
            if (addedRepos[alreadyAddedRepo] == repoURL)
            {
                return false;
            }
        };
        addedRepos.push(repoURL);
        FormIt.SaveAppData('FormItExamplePlugins.PluginManagerPlugin', JSON.stringify(addedRepos));
    }
    return true;
}

FormItExamplePlugins.PluginManager.GetAddedRepos = function()
{
    // Make sure the app supports SaveAppData/RestoreAppData
    var typeofRestoreAppData = typeof FormIt.RestoreAppData;
    if (typeofRestoreAppData === 'function')
    {
        var repos = FormIt.RestoreAppData('FormItExamplePlugins.PluginManagerPlugin', '[]');
        repos = JSON.parse(repos);
        return repos;
    }
    return '[]';
}

FormItExamplePlugins.PluginManager.createHeader = function() {
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
    linkRepoButton.setAttribute("type", "submit");
    linkRepoButton.id = 'linkRepoButton';
    linkRepoButton.className = 'linkRepoButton';
    linkRepoContainer.appendChild(linkRepoButton);
    linkRepoButton.onclick = submitURL;

    function submitURL()
    {
        var repoURL = linkRepoInput.value;
        linkRepoInput.value='';
        // NOTE: The saving of the added repos needs to happen on the FormIt side (CallMethod).
        FormItInterface.CallMethod('FormItExamplePlugins.PluginManager.SaveRepoLink', repoURL,
            function(added)
            {
                if (added == 'true')
                {
                    FormItExamplePlugins.PluginManager.MakePluginRepoDiv(repoURL);
                }
            });
    }

    linkRepoInput.onkeydown = function(event)
    {
        if (event.keyCode == 13)
        {
            submitURL();
        }
    }
}

FormItExamplePlugins.PluginManager.RemovePluginFromInstalled = function(pluginLocation)
{
    var newInstalledList = [];
    for(var i=0; i < FormItExamplePlugins.PluginManager.InstalledPlugins.length; i++)
    {
        if(FormItExamplePlugins.PluginManager.InstalledPlugins[i] != pluginLocation)
        {
            newInstalledList.push(FormItExamplePlugins.PluginManager.InstalledPlugins[i]);
        }
    }
    FormItExamplePlugins.PluginManager.InstalledPlugins = newInstalledList;
}

FormItExamplePlugins.PluginManager.MakePluginRepoDivs = function()
{
    console.log("---> FormItExamplePlugins.PluginManager.MakePluginRepoDivs");

    var originURL = document.URL;
    originURL = originURL.replace('FormItExamplePlugins.PluginManagerPlugin\/PluginManager.html', '');
    //console.log("pluginsites: " + this.responseText);
    var repoArray = JSON.parse(this.responseText);
    for(var i=0; i < repoArray.length; i++)
    {
         // Now add the plugins.
        var repoURL = repoArray[i];
        FormItExamplePlugins.PluginManager.MakePluginRepoDiv(repoURL);
    }

    // Now add the repos the user added previously
    FormItInterface.CallMethod("FormItExamplePlugins.PluginManager.GetAddedRepos", '',
        function(addedRepos)
        {
            addedRepos = JSON.parse(addedRepos);
            for (var i in addedRepos)
            {
                var repoURL = addedRepos[i];
                console.log('repoURL: ' + repoURL);
                FormItExamplePlugins.PluginManager.MakePluginRepoDiv(repoURL);
            }
        });
}

FormItExamplePlugins.PluginManager.MakePluginRepoDiv = function(repoURL)
{
    // Now add the plugins.
    var pluginsManifest = repoURL + "/plugins.json";
    var request = new XMLHttpRequest();
    request.addEventListener("load", FormItExamplePlugins.PluginManager.AddPluginRepo);
    request.pluginSiteURL = repoURL;
    request.open("GET", pluginsManifest);
    request.send();
}

FormItExamplePlugins.PluginManager.AddPluginRepo = function()
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
        request.addEventListener("load", FormItExamplePlugins.PluginManager.MakePluginDiv);
        request.pluginSiteURL = this.pluginSiteURL;
        request.parentElemDiv = repoContainerDiv;
        request.PluginURL = this.pluginSiteURL + "/" + element;
        request.open("GET", this.pluginSiteURL + "/" + element + "/manifest.json");
        request.send();
        }, this);
}


FormItExamplePlugins.PluginManager.MakePluginDiv = function(plugin)
{
    //console.log("---> FormItExamplePlugins.PluginManager.MakePluginDiv");
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
    checkboxElem.checked = FormItExamplePlugins.PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1;
    checkboxElemDiv.onclick = function(e)
    {
        if (FormItExamplePlugins.PluginManager.InstalledPlugins.indexOf(pluginLocation) > -1)
        {
            FormItInterface.CallMethod("FormIt.UninstallPlugin",  pluginLocation);
            FormItExamplePlugins.PluginManager.RemovePluginFromInstalled(pluginLocation);
        }
        else
        {
            FormItInterface.CallMethod("FormIt.InstallPlugin", pluginLocation);
            FormItExamplePlugins.PluginManager.InstalledPlugins.push(pluginLocation);
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

FormItExamplePlugins.PluginManager.CreatePlugins = function()
{
    console.log("---> FormItExamplePlugins.PluginManager.CreatePlugins");
    //Clear the body to reconstruct the plugin UI.
    //document.body.innerHTML = "";
    FormItExamplePlugins.PluginManager.createHeader();
    if (true)
    {
        //Start by getting internal plugins and adding them to the panel.
        console.log("Calling FormIt.GetInstalledPlugins");
        FormItInterface.CallMethod("FormIt.GetInstalledPlugins", "",
            function(installedPlugins)
            {
                FormItExamplePlugins.PluginManager.InstalledPlugins = eval(installedPlugins);
                if (!FormItExamplePlugins.PluginManager.InstalledPlugins)
                {
                    FormItExamplePlugins.PluginManager.InstalledPlugins = [];
                }
                console.log("FormItExamplePlugins.PluginManager.InstalledPlugins: " + JSON.stringify(FormItExamplePlugins.PluginManager.InstalledPlugins));

                //Get the list of plugins from the top level manifest
                //Keep things synchronous. Use callback method to spin off creation of plugins
                console.log("************** Requesting plugins.json to call FormItExamplePlugins.PluginManager.MakePluginRepoDivs.");
                var request = new XMLHttpRequest();
                request.addEventListener("load", FormItExamplePlugins.PluginManager.MakePluginRepoDivs);
                request.open("GET", "pluginsites.json");
                request.send();
            });
    }
}
