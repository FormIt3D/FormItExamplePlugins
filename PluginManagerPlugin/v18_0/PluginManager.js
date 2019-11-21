/* known repo URLs:

FormIt default:
https://formit3d.github.io/FormItExamplePlugins
https://formit3d.github.io/FormItWorkflowPlugins

FormIt team members:
https://deanstein.github.io/PluginPlayground
https://jhauswirth.github.io/FormItPlugins

*/

if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.PluginManager == 'undefined')
{
    FormItExamplePlugins.PluginManager = {};
}

FormItExamplePlugins.PluginManager.InstalledPlugins = [];

// Save the list of repos (on the FormIt side)
FormItExamplePlugins.PluginManager.SaveRepos = function(repos)
{
    FormIt.SaveAppData('FormItExamplePlugins.PluginManagerPlugin', repos);
}

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

FormItExamplePlugins.PluginManager.ShowDialog = function(dialogParams)
{
    FormIt.Commands.RegisterJSCommand("FormItExamplePlugins.PluginManager.ShowDialog");
    FormItInterface.CallMethod("CreateDialogBox", dialogParams);
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

FormItExamplePlugins.PluginManager.OpenAboutPluginsURL = function()
{
    FormIt.OpenURL('https://formit3d.github.io/FormItExamplePlugins/index.html'); 
}

FormItExamplePlugins.PluginManager.OpenBuildPluginsURL = function()
{
    FormIt.OpenURL('https://formit3d.github.io/FormItExamplePlugins/docs/HowToBuild.html'); 
}

FormItExamplePlugins.PluginManager.createHeader = function() {
    var headerContainer = document.createElement('div');
    headerContainer.id = 'headerContainer';
    window.document.body.appendChild(headerContainer);

    var headerDiv = document.createElement('div');
    headerDiv.id = 'header';
    headerDiv.className = 'header';
    headerDiv.innerHTML = 'Plugin Manager';
    headerContainer.appendChild(headerDiv);

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
    linkRepoButton.setAttribute("title", "Link a new repository from URL");
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

FormItExamplePlugins.PluginManager.createFooter = function() {
    var footerContainer = document.createElement('div');
    footerContainer.id = 'footerContainer';
    footerContainer.className = 'footerContainer';
    window.document.body.appendChild(footerContainer);

    var footerDiv = document.createElement('div');
    footerDiv.id = 'footerDiv';
    footerDiv.className = 'footerDiv';
    footerContainer.appendChild(footerDiv);

    var footerDescriptionText = document.createTextNode("Powered by FormIt JavaScript plugins");
    footerDiv.appendChild(footerDescriptionText);

    var footerDivUL = document.createElement('ul');
    footerDiv.appendChild(footerDivUL);

    var footerLearnAboutPluginsLI = document.createElement('li');
    var footerLearnAboutPluginsLink = document.createElement('a');
    var footerLearnAboutPluginsText = document.createTextNode("Learn about plugins");
    footerLearnAboutPluginsLink.appendChild(footerLearnAboutPluginsText);
    footerLearnAboutPluginsLink.setAttribute("href", "javascript:void(0);");
    footerDivUL.appendChild(footerLearnAboutPluginsLI);
    footerLearnAboutPluginsLI.appendChild(footerLearnAboutPluginsLink);

    footerLearnAboutPluginsLink.onclick = function() {
        FormItInterface.CallMethod('FormItExamplePlugins.PluginManager.OpenAboutPluginsURL', "");
    }

    var footerLearnToBuildLI = document.createElement('li');
    var footerLearnToBuildLink = document.createElement('a');
    var footerLearnToBuildText = document.createTextNode("Build your own");
    footerLearnToBuildLink.appendChild(footerLearnToBuildText);
    footerLearnToBuildLink.setAttribute("href", "javascript:void(0);");
    footerDivUL.appendChild(footerLearnToBuildLI);
    footerLearnToBuildLI.appendChild(footerLearnToBuildLink);

    footerLearnToBuildLink.onclick = function() {
        FormItInterface.CallMethod('FormItExamplePlugins.PluginManager.OpenBuildPluginsURL', "");
    }

    var resetReposDiv = document.createElement('p');
    var resetReposListLink = document.createElement('a');
    var repoListText = document.createTextNode("Reset repos");
    resetReposDiv.appendChild(resetReposListLink);
    resetReposListLink.appendChild(repoListText);
    resetReposListLink.setAttribute("href", "javascript:void(0);");
    footerDiv.appendChild(resetReposDiv);

    resetReposListLink.onclick = function(){
        var confirmed = window.confirm('Reset the Plugin Manager to the default repositories? This will remove any custom linked repositories.')

        if (confirmed){
            FormItInterface.CallMethod('FormItExamplePlugins.PluginManager.SaveRepos', JSON.stringify([]));
            window.location.reload(true);
        }
    }
}

FormItExamplePlugins.PluginManager.createPluginContainerDiv = function()
{
    // create the container for plugin repository listing
    var repoListContainer = document.createElement('div');
    repoListContainer.id = 'repoListContainer';
    repoListContainer.className = 'repoListContainer';
    window.document.body.appendChild(repoListContainer);
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

    // TODO: add a console clear here when it's available from FormItInterface
    FormItInterface.ConsoleLog("FormIt Plugin Manager");
    //console.log("pluginsites: " + this.responseText);

    var repoArray = JSON.parse(this.responseText);
    for(var i=0; i < repoArray.length; i++)
    {
         // Now add the plugins.
        var repoURL = repoArray[i];
        FormItInterface.ConsoleLog("Loading repository: " + repoURL);
        FormItExamplePlugins.PluginManager.MakePluginRepoDiv(repoURL);
    }

    // Now add the repos the user added previously
    FormItInterface.CallMethod("FormItExamplePlugins.PluginManager.GetAddedRepos", '',
        function(addedRepos)
        {
            FormItExamplePlugins.PluginManager.AddedRepos = JSON.parse(addedRepos);
            for (var i in FormItExamplePlugins.PluginManager.AddedRepos)
            {
                var repoURL = FormItExamplePlugins.PluginManager.AddedRepos[i];
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
    // create the tree arrow image for repos
    var treeArrowRepo = document.createElement('img');
    treeArrowRepo.src = 'img/arrow_right_blue.png';
    treeArrowRepo.id = 'treeArrowRepo';
    treeArrowRepo.className = 'treeArrowRepo';

    // create the info button
    var repoInfoButton = document.createElement('button');
    repoInfoButton.setAttribute("type", "submit");
    repoInfoButton.setAttribute("title", this.pluginSiteURL);
    repoInfoButton.id = 'repoInfoButton';
    repoInfoButton.className = 'repoInfoButton';

    // prevent clicks on the info button from triggering the parent accordion
    // TODO: get this to open the repo in a webview
    repoInfoButton.onclick = function(e) {

        /*
        var dialogParams = {
            "PluginName": "Dialog From Toolbar",
            "DialogBox": "PLUGINLOCATION/../HelloBlock/hello_block.html",
            "DialogBoxWidth": 500,
            "DialogBoxHeight": 300,
            "DialogBoxType": "Modeless"};
        FormItExamplePlugins.PluginManagerPlugin.ShowDialog(dialogParams);
        */
        e.stopPropagation();
    }

    // create the unlink repo button
    var unlinkRepoButton = document.createElement('button');
    unlinkRepoButton.setAttribute("type", "submit");
    unlinkRepoButton.setAttribute("title", "Unlink this repository");
    unlinkRepoButton.className = 'unlinkRepoButton';
    var unlinkURL = this.pluginSiteURL;

    var repoPlugins = JSON.parse(this.responseText);
    var repoElemDiv = document.createElement('div');
    repoElemDiv.id = repoPlugins.RepoName.replace(/\s/g,'');
    unlinkRepoButton.id = repoElemDiv.id + 'unlinkRepoButton';
    repoElemDiv.className = "repoName";
    repoElemDiv.innerHTML = repoPlugins.RepoName;
    repoElemDiv.appendChild(treeArrowRepo);

    document.getElementById(repoListContainer.id).appendChild(repoElemDiv);
    document.getElementById(repoListContainer.id).appendChild(unlinkRepoButton);

    unlinkRepoButton.onclick = function()
    {
        var confirmUnlink = confirm("Are you sure you want to unlink this plugin repository? \n\n" + repoPlugins.RepoName + "\n" + unlinkURL);
        if (confirmUnlink)
        {
            // if removing the example plugins or workflow plugins, do it without iterating over the list of AddedRepos
            if (repoElemDiv.id == "FormItExamplePlugins" || repoElemDiv.id == "FormItWorkflowPlugins")
            {
                document.getElementById(repoElemDiv.id).remove();
                // also remove the unlink button div
                document.getElementById(unlinkRepoButton.id).remove();
            }
            else
            {
                // Remove the div
                document.getElementById(repoElemDiv.id).remove();
                document.getElementById(unlinkRepoButton.id).remove();

                FormItExamplePlugins.PluginManager.AddedRepos =
                    FormItExamplePlugins.PluginManager.AddedRepos.filter(function(element) { return element !== unlinkURL; });
                // NOTE: Need to save the list of repos on the FormIt side.
                FormItInterface.CallMethod('FormItExamplePlugins.PluginManager.SaveRepos', JSON.stringify(FormItExamplePlugins.PluginManager.AddedRepos));
            }
            // check if both default plugins are uninstalled and provide a link to reinstall them
            if (!(document.getElementById("FormItExamplePlugins")) && !(document.getElementById("FormItWorkflowPlugins")))
            {
                var examplesUnlinked = true;

            }
            if (!successfulUnlink)
            {
                FormItInterface.ConsoleLog("Couldn't find this repo to unlink.");
                alert("Couldn't find this repo to unlink.");
            }
        }
    };

    var repoContainerDiv = document.createElement('div');
    repoContainerDiv.id = repoPlugins.RepoName.replace(/\s/g,'') + "Container";
    repoContainerDiv.className = "repoContainer";

    repoElemDiv.appendChild(repoInfoButton);
    repoElemDiv.appendChild(repoContainerDiv);

    // repo description
    var repoDescriptionDiv = document.createElement('div');
    repoDescriptionDiv.id = repoPlugins.RepoName.replace(/\s/g,'') + "Description";
    repoDescriptionDiv.className = "repoDescription";
    repoDescriptionDiv.innerHTML = repoPlugins.RepoDescription;

    // if a repo description was provided, show it
    if (repoPlugins.RepoDescription) {
        repoContainerDiv.appendChild(repoDescriptionDiv);
    }

    // prevent clicks on repo divs from triggering the parent accordion
    repoContainerDiv.onclick = function(e) {
        e.stopPropagation();
    }

    // expand or collapse the repo list when clicked
    repoElemDiv.onclick = function()
    {
        repoElemDiv.classList.toggle("active");
        // show the tree arrow as active
        treeArrowRepo.src = 'img/arrow_down_white.png';
        if (repoContainerDiv.style.display === "block")
            {
                repoContainerDiv.style.display = "none";
                // change the tree arrow back
                treeArrowRepo.src = 'img/arrow_right_blue.png';
            } else {
                repoContainerDiv.style.display = "block";
        }
    }

    // optionally start all repos expanded to reveal nested plugins
    var startReposExpanded = false;

    if (startReposExpanded == true)
    {
        repoElemDiv.click();
    } else
    {
        repoContainerDiv.style.display = "none";
    }

    // optionally start the workflow plugins expanded to reveal nested plugins
    var startWorkflowPluginRepoExpanded = true;

    if (document.getElementById('FormItWorkflowPlugins') && startWorkflowPluginRepoExpanded == true && document.getElementById('FormItWorkflowPluginsContainer').style.display == "none")
    {
        document.getElementById('FormItWorkflowPlugins').click();
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
    //TODO: Check if this plugin is in installed plugin list and skip if it is not.
    var pluginData = JSON.parse(this.responseText);
    var pluginLocation = this.PluginURL;
    //console.log("Plugin URL: " + pluginLocation);
    var pluginName = pluginData["PluginName"];
    //console.log("Creating Plugin: " + pluginName);
    var pluginDescription = pluginData["PluginDescription"];
    //NOTE: "CustomDescription": *.html
    var pluginCustomDescription = pluginData["CustomDescription"];
    //console.log("Custom Description: " + pluginCustomDescription);
    var pluginType = pluginData["PluginType"];
    var pluginAuthor = pluginData["PluginAuthor"];

    // create the tree arrow image for plugins
    var treeArrowPlugin = document.createElement('img');
    treeArrowPlugin.src = 'img/arrow_right_blue.png';
    treeArrowPlugin.id = 'treeArrowPlugin';
    treeArrowPlugin.className = 'treeArrowPlugin';

    var pluginContainerDiv = document.createElement('div');
    pluginContainerDiv.id = pluginName.replace(/\s/g,'') + "Container";
    this.parentElemDiv.appendChild(pluginContainerDiv);

    var pluginNameDiv = document.createElement('div');
    pluginNameDiv.id = 'pluginName' + pluginName.replace(/\s/g,'');
    pluginNameDiv.className = 'pluginName';
    pluginNameDiv.innerHTML = pluginName;
    pluginNameDiv.appendChild(treeArrowPlugin);
    pluginContainerDiv.appendChild(pluginNameDiv);
    pluginContainerDiv.className = 'pluginContainer';


    var pluginDescriptionDiv = document.createElement('div');
    pluginDescriptionDiv.id = pluginName.replace(/\s/g,'') + "Description";
    pluginDescriptionDiv.className = 'pluginDescription';
    pluginDescriptionDiv.style = 'clear: both;';
    pluginContainerDiv.appendChild(pluginDescriptionDiv);

    // start accordion collapsed
    pluginDescriptionDiv.style.display = "none";

    // expand or collapse the plugin list when clicked
    pluginNameDiv.onclick = function(e)
        {
            pluginNameDiv.classList.toggle("active");
            if (pluginDescriptionDiv.style.display === "block")
                {
                // show the tree arrow as active
                treeArrowPlugin.src = 'img/arrow_right_blue.png';
                pluginDescriptionDiv.style.display = "none";
                } else {
                // change the tree arrow back
                treeArrowPlugin.src = 'img/arrow_down_blue.png';
                pluginDescriptionDiv.style.display = "block";
                }
            e.stopPropagation();
        }

    pluginDescriptionDiv.onclick = function(e) { e.stopPropagation(); }

    // Add checkbox input
    var checkboxElemDiv = document.createElement('div');
    checkboxElemDiv.id = pluginName.replace(/\s/g,'') + "Checkbox";
    checkboxElemDiv.className = "checkboxDiv";

    pluginNameDiv.appendChild(checkboxElemDiv);
    var checkboxElem = document.createElement("input");
    checkboxElem.id = pluginName.replace(/\s/g,'') + "Checkbox";
    checkboxElem.type = 'checkbox';
    checkboxElem.setAttribute("title", "Install this plugin");
    checkboxElem.name = 'plugInCheckBox';
    checkboxElem.className = "checkmark";
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

    //Things will diverge here with custom description...
    if(pluginCustomDescription != undefined || pluginDescription != undefined)
    {

        pluginDescriptionDiv.innerHTML = pluginDescription.replace(/\n/g,"<br>") + "<br><br>" + "Plugin Type: " + pluginType + "<br>";

    }
    else
    {
        if(pluginDescription == undefined)
        {
            pluginDescription = "Description not provided for this plugin.";
            pluginDescriptionDiv.innerHTML = pluginDescription;
        }
    }
}

FormItExamplePlugins.PluginManager.CreatePlugins = function()
{
    console.log("---> FormItExamplePlugins.PluginManager.CreatePlugins");
    //Clear the body to reconstruct the plugin UI.
    //document.body.innerHTML = "";

    // build the component UI parts
    FormItExamplePlugins.PluginManager.createHeader();
    FormItExamplePlugins.PluginManager.createPluginContainerDiv();

    FormItExamplePlugins.PluginManager.createFooter();

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
