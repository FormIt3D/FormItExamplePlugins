import { FormIt, WSM } from '/SharedPluginFiles/formit_js_async_polyfill.mod.js';
import { FormItPluginUtils } from '/SharedPluginFiles/FormItPluginUtils.mod.js';

export class CreateBlockButton extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <button>Create Block</button>
        `;

        this.shadow.querySelector('button').addEventListener('click', this.createBlock.bind(this));
        this.histID = WSM.INVALID_ID;

    }

    async createBlock() {
        const w = this.width(), h = this.height(), l = this.length();
        const pt1 = WSM.Geom.Point3d(0,0,0);
        const pt2 = WSM.Geom.Point3d(await w, await h, await l);
        this.histID = await FormIt.GroupEdit.GetEditingHistoryID();
        this.blockID = await WSM.APICreateBlock(this.histID, await pt1, await pt2);
    }

    async width() { return FormItPluginUtils.currentUnits(this.numFromElem("width")); }
    async height() { return FormItPluginUtils.currentUnits(this.numFromElem("height")); }
    async length() { return FormItPluginUtils.currentUnits(this.numFromElem("length")); }

    numFromElem(id) {
        const elem = document.querySelector(this.getAttribute(id));
        return (elem) ? parseFloat(elem.value) : 0;
    }
}

customElements.define('create-block-button', CreateBlockButton);