// FormIt plugin text input shared element
// Usage: <plugin-input label="Label: "></plugin-input>
//
// Attributes:"on-input" or the onInput class property. Triggered when the user hits the enter key.

class TextInputModule extends HTMLElement {
    constructor() {
        super();

        this.label = this.getAttribute('label');

        this.shadow = this.attachShadow({mode: 'open'});
        const style = document.createElement('style');
        style.innerHTML = `
        * {
            font-family: Arial;
        }

        label {
            width: auto;
            align-self: center;
        }

        input {
            box-sizing: border-box;
            border: 1px solid #4676a9;
            padding: 4px;
            margin-top: 5px;
            margin-bottom: 5px;
            width: 100%;
        }
        `;

        // create the container
        const container = document.createElement('div');

        // create the label
        this.textInputLabel = document.createElement('label');
        this.textInputLabel.innerHTML = this.label;
        container.appendChild(this.textInputLabel);
        container.appendChild(document.createElement('br'));

        // create the input
        this.onInput = this.getAttribute('on-input');
        this.input = document.createElement('input');
        this.input.setAttribute("type", "text");
        this.input.addEventListener('keyup', e => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                if (this.onInput) {
                    this.onInput(this.input.textContent);
                }
            }
        });
        container.appendChild(this.input);

        this.shadow.appendChild(container);
    }

    static get observedAttributes() {
        return [
            'on-input',
            'label'
        ];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'on-input') {
            this.onInput = newValue;
        } else if (name === 'label') {
            this.textInputLabel.innerHTML = newValue;
        }
    }

    get value() {
        return this.input.value;
    }
}

customElements.define('plugin-input', TextInputModule);
export { TextInputModule };