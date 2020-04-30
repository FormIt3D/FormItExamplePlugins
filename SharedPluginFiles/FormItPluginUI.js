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
FormIt.PluginUI.createTextInputModule = function(moduleParent, moduleLabelText, moduleID, moduleClassName, inputID, inputOnKeyUpFunction) 
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

    textInput.onkeydown = function()
    {
        if (event.keyCode === 13)
        {
            
        // don't let Enter refresh the page
            event.preventDefault();
        }
    }

    textInput.onkeyup = function()
    {
        // execute the desired function
        inputOnKeyUpFunction();

        // don't let Enter refresh the page
        if (event.keyCode === 13)
        {
            event.preventDefault();
        }
    }

    return textInputModuleContainer;
}