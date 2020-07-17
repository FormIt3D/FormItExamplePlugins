// Submit runs from the HTML page.
async function Submit()
{
    const w = parseFloat(document.a.width.value);
    const l = parseFloat(document.a.length.value);
    const h = parseFloat(document.a.height.value);
    const histID = FormIt.GroupEdit.GetEditingHistoryID();
    const pt1 = WSM.Geom.Point3d(0,0,0);
    const pt2 = WSM.Geom.Point3d(w, l, h);
    WSM.APICreateBlock(await histID, await pt1, await pt2);
}