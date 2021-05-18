// initialize namespaces
window.FormIt = window.FormIt || {};
FormIt.PluginUI = FormIt.PluginUI || {};

/// UI utilities ///

// converts a value to a properly-formatted FormIt dimension string
// according to the current units
FormIt.PluginUI.convertValueToDimensionString = function(value, callbackFunction)
{
    window.FormItInterface.CallMethod("FormIt.StringConversion.StringToLinearValue", value, function(result)
    {
        // parse the result
        result = JSON.parse(result);

        // if the API was able to convert the value to a dimension, return it
        if (result.first === true)
        {
            window.FormItInterface.CallMethod("FormIt.StringConversion.LinearValueToString", Number(result.second), callbackFunction);
        }
        // otherwise, the value was not a valid number or dimension
        // so return a single unit of value
        else
        {
            window.FormItInterface.CallMethod("FormIt.StringConversion.LinearValueToString", 1, callbackFunction);
        }
    });
}

/// UI classes and modules ///

// typical header - can be used at the top of a whole plugin, or at the top of a subsection
FormIt.PluginUI.HeaderModule = class HeaderModule {
    constructor(headerTitle, headerSubtitle, moduleClassName) {

        // initialize the arguments
        this.headerTitle = headerTitle;
        this.headerSubtitle = headerSubtitle;
        this.moduleClassName = moduleClassName;
        
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the header
        var headerContainer = document.createElement('div');
        headerContainer.id = 'pluginHeaderContainer';
        headerContainer.className = this.moduleClassName;

        // create the header elements
        var titleDiv = document.createElement('h1');
        titleDiv.innerHTML = this.headerTitle;
        headerContainer.appendChild(titleDiv);

        var subtitleDiv = document.createElement('p');
        subtitleDiv.innerHTML =  this.headerSubtitle;
        headerContainer.appendChild(subtitleDiv);

        return headerContainer;
    }
}

// typical subheader - can be used to define a sub-section of a multi-plugin
FormIt.PluginUI.SubheaderModule = class SubheaderModule {
    constructor(subheaderTitle, moduleClassName) {

        // initialize the arguments
        this.subheaderTitle = subheaderTitle;
        this.moduleClassName = moduleClassName;
        
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the header
        var subheaderContainer = document.createElement('div');
        subheaderContainer.id = 'pluginSubheaderContainer';
        subheaderContainer.className = this.moduleClassName;

        var subtitleDiv = document.createElement('p');
        subtitleDiv.innerHTML =  this.subheaderTitle;
        subheaderContainer.appendChild(subtitleDiv);

        return subheaderContainer;
    }
}

// typical button
FormIt.PluginUI.Button = class Button {
    constructor(buttonText, onClickFunction) {

        // initialize the arguments
        this.buttonText = buttonText;
        this.onClickFunction = onClickFunction;

        // build and attach events
        this.element = this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the header
        this.button = document.createElement("input");
        this.button.setAttribute("type", "button");
        this.button.value = this.buttonText;
        
        return this.button;
    }

    attachEvents() {
        this.button.addEventListener('click', this.onClickFunction);
    }

}

// button with description
FormIt.PluginUI.ButtonWithInfoToggleModule = class ButtonWithInfoToggleModule {
    constructor(buttonText, buttonDescription, onClickFunction) {

        // initialize the arguments
        this.buttonText = buttonText;
        this.buttonDescription = buttonDescription;
        this.onClickFunction = onClickFunction;

        // build and attach events
        this.element = this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the button and description
        this.moduleContainer = document.createElement("div");
        this.moduleContainer.id = "buttonWithInfoToggleModule"

        this.buttonRow = document.createElement("div");
        this.buttonRow.id = "buttonWithInfoToggleRow";

        this.moduleContainer.appendChild(this.buttonRow);

        // create the button
        this.button = document.createElement("input");
        this.button.setAttribute("type", "button");
        this.button.value = this.buttonText;
        this.button.id = "buttonWithInfoToggle";
        
        this.buttonRow.appendChild(this.button);

        // create the info button
        this.infoButton = document.createElement("img");
        this.infoButton.src = "https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/img/info_blue.png";
        this.infoButton.id = "infoToggle";

        this.buttonRow.appendChild(this.infoButton);

        // create the description div
        this.descriptionDiv = document.createElement("div");
        this.descriptionDiv.innerHTML = this.buttonDescription;
        this.descriptionDiv.id = "infoToggleDescription";
        this.descriptionDiv.className = "hide";

        this.moduleContainer.appendChild(this.descriptionDiv);

        return this.moduleContainer;
    }

    attachEvents() {
        this.button.addEventListener('click', this.onClickFunction);

        let descriptionDiv = this.descriptionDiv;
        let infoButton = this.infoButton;
        this.infoButton.addEventListener('click', function() {

                if (descriptionDiv.className == "hide")
                {
                    descriptionDiv.className = "show";
                    infoButton.className = 'infoToggleActive';
                }
                else
                {
                    descriptionDiv.className = "hide";
                    infoButton.className = 'infoToggleInactive';
                }

        });
    }

}

// "deselect" button - used in Properties Plus
FormIt.PluginUI.DeselectButtonModule = class DeselectButtonModule {
    constructor(onClickFunction, deselectObjectType, buttonLabelText, moduleID, buttonLabelID) {

        // initialize the arguments
        this.onClickFunction = onClickFunction;
        this.deselectObjectType = deselectObjectType;
        this.buttonLabelText = buttonLabelText;
        this.moduleID = moduleID;
        this.buttonLabelID = buttonLabelID;

        // build and attach events
        this.element = this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        
        // create a container for the button and label
        this.moduleContainer = document.createElement("div");
        this.moduleContainer.id = this.moduleID;

        // create a row for flex styling
        this.deselectButtonRow = document.createElement("div");
        this.deselectButtonRow.id = "deselectButtonRow";
        this.moduleContainer.appendChild(this.deselectButtonRow);

        // create the deselect button
        this.deselectButton = document.createElement("img");
        this.deselectButton.src = "https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/img/remove_blue.png";
        this.deselectButton.id = "deselectButton";
        this.deselectButton.title = "Click to remove this object type from the current selection."
        this.deselectButtonRow.appendChild(this.deselectButton);

        // create the button label
        this.deselectButtonLabel = document.createElement("div");
        this.deselectButtonLabel.innerHTML = this.buttonLabelText;
        this.deselectButtonLabel.id = this.buttonLabelID;
        this.deselectButtonRow.appendChild(this.deselectButtonLabel);

        return this.moduleContainer;
    }

    attachEvents() {

        this.deselectButton.addEventListener("click", () => {

            this.onClickFunction(this.deselectObjectType);

        });

    }

}

// all text or number inputs
FormIt.PluginUI.AlphaNumericInput = class AlphaNumericInput {
    constructor(submitTextFunction) {
        this.existingInputValue = undefined;
        this.submitTextFunction = submitTextFunction;
    }

    // these events need to be attached to every input
    attachEvents() {
        this.input.addEventListener("focus", (event) => {
            // keep track of the existing input value - used to prevent submission if nothing changed
            this.existingInputValue = event.currentTarget.value;
        });

        this.input.addEventListener("blur", (event) => {

            if (this.submitTextFunction)
            {
                // ensure that only if the value is different than it was when we started, do we submit the function
                if (event.currentTarget.value !== this.existingInputValue)
                {
                    const resultCallback = (returnVal) => {

                        returnVal = JSON.parse(returnVal);

                        if (returnVal){
                            this.input.value = returnVal;
                        }
                    }

                    this.submitTextFunction(event.currentTarget.value, resultCallback);
                }
            }
        });

        this.input.addEventListener("keydown", (event) => {
            if (event.keyCode === 13)
            {
                event.preventDefault();
            }
        });

        this.input.addEventListener("keyup", (event) => {
            if (event.keyCode === 13)
            {
                const resultCallback = (returnVal) => {

                    returnVal = JSON.parse(returnVal);

                    if (returnVal){
                        this.input.value = returnVal;
                    }
                }
                this.submitTextFunction(event.currentTarget.value, resultCallback);
                event.preventDefault();
            }
        });
    }
}

// typical text/dimension input and a label - no button
FormIt.PluginUI.TextInputModule = class TextInputModule extends FormIt.PluginUI.AlphaNumericInput {
    constructor(moduleLabelText, moduleID, moduleClassName, inputID, submitTextFunction) {
        
        // call the super function
        super();

        // initialize the arguments
        this.moduleLabelText = moduleLabelText;
        this.moduleID = moduleID;
        this.moduleClassName = moduleClassName;
        this.inputID = inputID;
        this.submitTextFunction = submitTextFunction;

        // build and attach events
        this.element = this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        
        // create the container
        var container = document.createElement('form');
        container.id = this.moduleID;
        container.className = this.moduleClassName;

        // create the label
        var textInputLabel = document.createElement('div');
        textInputLabel.className = 'inputLabel';
        textInputLabel.innerHTML = this.moduleLabelText;
        container.appendChild(textInputLabel);

        // create the input
        this.input = document.createElement('input');
        this.input.id = this.inputID;
        this.input.setAttribute("type", "text");
        container.appendChild(this.input);

        return container;
    }
}

// typical numeric input and a label
FormIt.PluginUI.NumberInputModule = class NumberInputModule extends FormIt.PluginUI.AlphaNumericInput {
    constructor(moduleLabelText, moduleID, moduleClassName, inputID, submitTextFunction) {
        
        // call the super function
        super();

        // initialize the arguments
        this.moduleLabelText = moduleLabelText;
        this.moduleID = moduleID;
        this.moduleClassName = moduleClassName;
        this.inputID = inputID;
        this.submitTextFunction = submitTextFunction;

        // build and attach events
        this.element = this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        
        // create the container
        var container = document.createElement('form');
        container.id = this.moduleID;
        container.className = this.moduleClassName;

        // create the label
        var textInputLabel = document.createElement('div');
        textInputLabel.className = 'inputLabel';
        textInputLabel.innerHTML = this.moduleLabelText;
        container.appendChild(textInputLabel);

        // create the input
        this.input = document.createElement('input');
        this.input.id = this.inputID;
        this.input.setAttribute("type", "number");
        container.appendChild(this.input);

        return container;
    }
}

// typical checkbox input
FormIt.PluginUI.CheckboxModule = class CheckboxModule {
    constructor(labelText, moduleID, moduleClassName, inputID) {
       
        // initialize the arguments
        this.labelText = labelText;
        this.moduleID = moduleID;
        this.moduleClassName = moduleClassName;
        this.inputID = inputID;

        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {

        // build the container
        var container = document.createElement('form');
        container.id = this.moduleID;
        container.className = this.moduleClassName;

        // create the checkbox
        this.input = document.createElement('input');
        this.input.id = this.inputID;
        this.input.setAttribute("type", "checkbox");
        container.appendChild(this.input);

        // create the label
        var checkboxLabel = document.createElement('div');
        checkboxLabel.className = 'inputLabel';
        checkboxLabel.innerHTML = this.labelText;
        container.appendChild(checkboxLabel);

        return container;
    }
}

// typical footer
FormIt.PluginUI.FooterModule = class FooterModule {
    constructor() {
       
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        var footerContainer = document.createElement('div');
        footerContainer.id = 'pluginFooterContainer';
    
        var footerDiv = document.createElement('div');
        footerDiv.id = 'pluginFooterDiv';
        footerContainer.appendChild(footerDiv);

        var footerIcon = document.createElement('img');
        footerIcon.src = 'https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/img/plugin_manager_grey.png';
        footerIcon.id = 'pluginFooterIcon';
        footerDiv.appendChild(footerIcon);
    
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
            FormItInterface.CallMethod("FormIt.OpenURL", 'https://formit3d.github.io/FormItExamplePlugins/index.html');
        }
    
        var footerLearnToBuildLI = document.createElement('li');
        var footerLearnToBuildLink = document.createElement('a');
        var footerLearnToBuildText = document.createTextNode("Build your own");
        footerLearnToBuildLink.appendChild(footerLearnToBuildText);
        footerLearnToBuildLink.setAttribute("href", "javascript:void(0);");
        footerDivUL.appendChild(footerLearnToBuildLI);
        footerLearnToBuildLI.appendChild(footerLearnToBuildLink);
    
        footerLearnToBuildLink.onclick = function() {
            FormItInterface.CallMethod("FormIt.OpenURL", 'https://formit3d.github.io/FormItExamplePlugins/docs/HowToBuild.html');
        }

        return footerContainer;
    }
}

// message module for unsupported version
// if a specific version is specified, the message will tell the user they need at least that version
FormIt.PluginUI.UnsupportedVersionModule = class UnsupportedVersionModule {
    constructor(versionString) {

        // initialize the arguments
        this.versionString = versionString;
        
        // build
        this.element = this.build();
    }

    // construct and append the UI elements
    build() {
        
        // create a container
        var unsupportedVersionContainer = document.createElement('div');
        unsupportedVersionContainer.id = 'unsupportedVersionContainer';

        // create the icon
        var unsupportedVersionIcon = document.createElement('img');
        // https://formit3d.github.io
        unsupportedVersionIcon.src = 'https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/img/info_grey.png';
        unsupportedVersionIcon.id = 'unsupportedVersionIcon';
        unsupportedVersionContainer.appendChild(unsupportedVersionIcon);

        // create the message
        var unsupportedVersionMessage = document.createElement('p');
        unsupportedVersionContainer.appendChild(unsupportedVersionMessage);

        // if the version is specified, use it
        if (this.versionString)
        {
            unsupportedVersionMessage.innerHTML =  'FormIt ' + this.versionString + ' or newer is required to run this plugin.';
        }
        // otherwise, use a generic message
        else
        {
            unsupportedVersionMessage.innerHTML =  'A newer version of FormIt is required to run this plugin.';
        }

        var downloadLink = document.createElement('a');
        downloadLink.innerHTML =  'Download the latest version of FormIt.';
        unsupportedVersionContainer.appendChild(downloadLink);

        downloadLink.setAttribute("href", "javascript:void(0);");
    
        downloadLink.onclick = function() {
            FormItInterface.CallMethod("FormIt.OpenURL", 'https://formit.autodesk.com/page/download');
        }

        return unsupportedVersionContainer;
    }
}


// create a container to host multiple child elements, organizing them horizontally
FormIt.PluginUI.createHorizontalModuleContainer = function(parent)
{
    var multiModuleContainer = document.createElement('div');
    multiModuleContainer.className = 'multiModuleContainer';

    parent.appendChild(multiModuleContainer);

    return multiModuleContainer;
}