// initialize namespaces
window.FormIt = window.FormIt || {};
FormIt.PluginUI = FormIt.PluginUI || {};

// all text or number inputs
FormIt.PluginUI.AlphaNumericInput = class AlphaNumericInput {
    constructor() {
        this.existingInputValue = undefined;
    }

    // these events need to be attached to every input
    attachEvents() {
        this.input.addEventListener("focus", (event) => {

            // keep track of the existing input value - used to prevent submission if nothing changed
            this.existingInputValue = event.currentTarget.value;

        });

        this.input.addEventListener("blur", (event) => {

            // ensure that only if the value is different than it was when we started, do we submit the function
            if (event.currentTarget.value !== this.existingInputValue)
            {
                this.submitTextFunction();
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
                event.preventDefault();
            }
        });
    }
}

// typical text input and a label - no button (the onblur event commits the contents)
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
        this.build();
        this.attachEvents();
    }

    // construct and append the UI elements
    build() {
        this.container = document.createElement('form');
        this.container.id = this.moduleID;
        this.container.className = this.moduleClassName;

        var textInputLabel = document.createElement('div');
        textInputLabel.className = 'inputLabel';
        textInputLabel.innerHTML = this.moduleLabelText;
        this.container.appendChild(textInputLabel);

        this.input = document.createElement('input');
        this.input.id = this.inputID;
        this.input.className = this.moduleClassName;
        this.input.setAttribute("type", "text");
        this.container.appendChild(this.input);
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