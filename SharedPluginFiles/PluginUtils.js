if (typeof FormIt === 'undefined')
{
    FormIt = {};
}

FormIt.PluginUtils = {};

// Function to conver the given length into the current FormIt units.
FormIt.PluginUtils.currentUnits = function(length)
{
    var kMetricFactor = 100.0 / (2.54 * 12.0);
    if (FormIt.Model.GetUnitType() === FormIt.UnitType.kMetric)
        return length * kMetricFactor;

    return length;
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
