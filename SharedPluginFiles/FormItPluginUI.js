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
        headerContainer.id = this.moduleID;
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


// create a container to host multiple child elements, organizing them horizontally
FormIt.PluginUI.createHorizontalModuleContainer = function(parent)
{
    var multiModuleContainer = document.createElement('div');
    multiModuleContainer.className = 'multiModuleContainer';

    parent.appendChild(multiModuleContainer);

    return multiModuleContainer;
}