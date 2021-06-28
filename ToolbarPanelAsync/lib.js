import { FormIt, WSM } from 'https://formit3d.github.io/SharedPluginUtilities/FormIt.mod.js';

class MyFormItLib {
    constructor() {
        this._version = '1.0.0';
    }

    async alertVersions() {
        const version = await FormIt.GetVersion();
        alert(`<p>FormIt version = ${JSON.stringify(version)}</p><p>Plugin version = ${this._version}</p>`);
    }

    async createBlock(data) {
        const pt1 = WSM.Geom.Point3d(-6, -6, 0);
        const pt2 = WSM.Geom.Point3d(6, 6, 12);
        const history = FormIt.GroupEdit.GetEditingHistoryID();
        WSM.APICreateBlock(await history, await pt1, await pt2);
    };
}

export { MyFormItLib };