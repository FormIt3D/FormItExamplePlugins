const FormItPluginUtils = {};

// Function to conver the given length into the current FormIt units.
FormItPluginUtils.currentUnits = async length =>
{
    var kMetricFactor = 100.0 / (2.54 * 12.0);
    if ((await FormIt.Model.GetUnitType()) === FormIt.UnitType.kMetric)
    {
        return length * kMetricFactor;
    }

    return length;
};

export class CreateBlockButton extends HTMLElement
{
    constructor()
    {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `
        <link rel="stylesheet" type="text/css" href="stylesheet.css"/>
        <button>Create Block</button>
        `;

        this.shadow.querySelector('button').addEventListener('click', this.createBlock.bind(this));
    }

    async createBlock()
    {
        const FormItSide = document.querySelector(this.getAttribute("formitside"));
        if (FormItSide.checked)
        {
            let l = parseFloat(await this.length());
            let w = parseFloat(await this.width() );
            let h = parseFloat(await this.height());

            var result = await HelloBlockAsync.CreateBlock(l, w, h);
            console.log(JSON.stringify(result));
        }
        else
        {
            const w = this.width(), h = this.height(), l = this.length();
            const pt1 = WSM.Geom.Point3d(0,0,0);
            const pt2 = WSM.Geom.Point3d(await w, await h, await l);
            const histID = await FormIt.GroupEdit.GetEditingHistoryID();
            this.blockID = await WSM.APICreateBlock(histID, await pt1, await pt2);
        }
    }

    async width() { return FormItPluginUtils.currentUnits(this.numFromElem("width")); }
    async height() { return FormItPluginUtils.currentUnits(this.numFromElem("height")); }
    async length() { return FormItPluginUtils.currentUnits(this.numFromElem("length")); }

    numFromElem(id)
    {
        const elem = document.querySelector(this.getAttribute(id));
        return (elem) ? parseFloat(elem.value) : 0;
    }
}

customElements.define('create-block-button', CreateBlockButton);