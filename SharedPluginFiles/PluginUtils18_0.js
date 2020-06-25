if (typeof FormIt === 'undefined')
{
    FormIt = {};
}

FormIt.PluginUtils = {};

// convert the given length into the current FormIt units
// this function only works on the FormIt side
FormIt.PluginUtils.currentUnits = function(length)
{
    var currentUnitType = FormIt.Model.GetUnitTypeCurrent();

    // the default FormIt unit is 1 foot,
    // so calculate all other units relative to that
    var kImperialInchFactor = 1/12;
    var kMetricMeterFactor = 100.0 / (2.54 * 12.0);
    var kMetricCentimeterFactor = kMetricMeterFactor / 100;
    var kMetricMillimeterFactor = kMetricMeterFactor / 1000;

    switch (currentUnitType)
    {
        case FormIt.UnitType.kImperialInches:
            return  length * kImperialInchFactor;
        case FormIt.UnitType.kMetricMeter:
            return  length * kMetricMeterFactor;
        case FormIt.UnitType.kMetricCentimeter:
            return  length * kMetricCentimeterFactor;
        case FormIt.UnitType.kMetricMillimeter:
            return  length * kMetricMillimeterFactor;
        // if it's none of these, we're in feet, which is the default
        // so return the length unchanged
        default:
            return length;
    }
}

// Function to prevent HTML page from reloading when hitting ENTER.
FormIt.PluginUtils.HandleEnter = function(formId, buttonId)
{
    var formElement = document.getElementById(formId);
    formElement.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            document.getElementById(buttonId).click();
            event.preventDefault();
        }
    });
    formElement.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    });
}
