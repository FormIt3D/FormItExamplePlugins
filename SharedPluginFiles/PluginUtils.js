FormIt.PluginUtils = {};

FormIt.PluginUtils.currentUnits = function(length)
{
    var kMetricFactor = 100.0 / (2.54 * 12.0);
    if (FormIt.Model.GetUnitType() === FormIt.UnitType.kMetric)
        return length * kMetricFactor;

    return length;
}
