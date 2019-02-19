
function currentUnits(length)
{
    var kMetricFactor = 100.0 / (2.54 * 12.0);
    if (FormIt.Model.GetUnitType() === FormIt.UnitType.kMetric)
        return length * kMetricFactor;

    return length;
}

// CreateBlock runs from Pyramid.
function CreateBlock(args)
{
    var histID = FormIt.GroupEdit.GetEditingHistoryID();
    var pt1 = WSM.Geom.Point3d(0.0, 0.0, 0.0);
    var pt2 = WSM.Geom.Point3d(currentUnits(args.w), currentUnits(args.l), currentUnits(args.h));
    var blockID = WSM.APICreateBlock(histID, pt1, pt2);
}

// Submit runs from the HTML page.
function Submit()
{
    var args = {
    "w": parseFloat(document.a.width.value),
    "l": parseFloat(document.a.length.value),
    "h": parseFloat(document.a.height.value)
    }
    //console.log("CreateBlock");
    //console.log("args");
    FormItInterface.CallMethod("CreateBlock", args);
}
