if (typeof FormIt === 'undefined')
{
    FormIt = {};
}

if (typeof FormIt.PluginUI === 'undefined')
{
    FormIt.PluginUI = {};
}

// create a container to host multiple child elements, organizing them horizontally
FormIt.PluginUI.createHorizontalModuleContainer = function(parent)
{
    var multiModuleContainer = document.createElement('div');
    multiModuleContainer.className = 'multiModuleContainer';

    parent.appendChild(multiModuleContainer);

    return multiModuleContainer;
}

// create a typical text input and a label - no button (the onKeyUpFunction commits the contents)
FormIt.PluginUI.createTextInputModule = function(moduleParent, moduleLabelText, moduleID, moduleClassName, inputID, submitTextFunction) 
{
    var textInputModuleContainer = document.createElement('form');
    textInputModuleContainer.id = moduleID;
    textInputModuleContainer.className = moduleClassName;
    moduleParent.appendChild(textInputModuleContainer)

    var textInputLabel = document.createElement('div');
    textInputLabel.className = 'inputLabel';
    textInputLabel.innerHTML = moduleLabelText;
    textInputModuleContainer.appendChild(textInputLabel);

    var textInput = document.createElement('input');
    textInput.id = inputID;
    textInput.className = moduleClassName;
    textInput.setAttribute("type", "text");
    textInputModuleContainer.appendChild(textInput);

    // execute the submit function when user changes focus away from this input
    textInput.onblur = function()
    {
        submitTextFunction();
    }

    // prevent enter from refreshing the page
    textInput.onkeydown = function()
    {
        if (event.keyCode === 13)
        {
            event.preventDefault();
        }
    }
    textInput.onkeyup = function()
    {
        if (event.keyCode === 13)
        {
            event.preventDefault();
        }
    }

    return textInputModuleContainer;
}

// create a typical FormIt Plugin footer with information about the plugin
FormIt.PluginUI.createFooter = function() {
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
}