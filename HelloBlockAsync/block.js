import { FormIt, WSM } from '/SharedPluginFiles/formit_js_async_polyfill.mod.js';

export class CreateBlockButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <div>
            <input id="width" type=number value="12.0">Width</input><br/>
            <input id="height" type=number value="12.0">Length</input><br/>
            <input id="length" type=number value="12.0">Height</input><br/>
            <button>Create Block</button>
        </div>
        `;

        this.shadow.querySelector('button').addEventListener('click', this.createBlock.bind(this));
    }

    async createBlock() {
        const w = parseFloat(this.shadow.querySelector('#width').value);
        const h = parseFloat(this.shadow.querySelector('#height').value);
        const l = parseFloat(this.shadow.querySelector('#length').value);
        const histID = FormIt.GroupEdit.GetEditingHistoryID();
        const pt1 = WSM.Geom.Point3d(0,0,0);
        const pt2 = WSM.Geom.Point3d(w, h, l);
        WSM.APICreateBlock(await histID, await pt1, await pt2);
    }
}

customElements.define('create-block-button', CreateBlockButton);