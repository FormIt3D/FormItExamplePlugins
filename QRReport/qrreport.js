if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.QRReport == 'undefined')
{
    FormItExamplePlugins.QRReport = {};
}

FormItExamplePlugins.QRReport.UpdateHTMLWithWSMAttribluteReportData = function()
{
    FormItInterface.CallMethod("FormItExamplePlugins.QRReport.GetWSMAttribluteReportData", "", function(buildings)
    {
        var li = document.createElement("li");
        var t = document.createTextNode(JSON.stringify(buildings));
        li.appendChild(t);
        document.getElementById("BuildingTypes").appendChild(li);
    });
}

// FormItExamplePluginsApplyWSMAttriblute runs from the FormIt App side.
FormItExamplePlugins.QRReport.GetWSMAttribluteReportData = function()
{
    var histID = FormIt.GroupEdit.GetEditingHistoryID();
    var buildingTypesAttribs = WSM.APIGetStringAttributesByKeyReadOnly(
        histID,
        WSM.INVALID_ID,
        "BuildingType");

    console.log("Building Types attribs:" + buildingTypesAttribs);

    var buildings = {};
    buildingTypesAttribs.forEach(function(buildingTypesAttrib)
        {
            var attribInfo = WSM.APIGetStringAttributeKeyValueReadOnly(histID, buildingTypesAttrib);
            if (typeof buildings[attribInfo.sValue] === 'undefined')
            {
                buildings[attribInfo.sValue] = 0;
            }
            console.log("buildingTypesAttrib: " + buildingTypesAttrib + " attribInfo: " + JSON.stringify(attribInfo));
            //var owners = WSM.APIGetTopLevelOwnersReadOnly(histID, const size_t nObjectID, std::vector<size_t>& aOwnerIDs);
            var isGroup = WSM.Utils.IsObjectType(attribInfo.aOwnerIDs, WSM.nGroupType);
            if (isGroup)
            {
                console.log("Is nGroupType");
                //TODO: Could there be more that one ID in attribInfo.aOwnerIDs?
                var instances = WSM.APIGetObjectsByTypeReadOnly(histID, attribInfo.aOwnerIDs[0], WSM.nInstanceType);
                console.log("Instances: " + JSON.stringify(instances));
                buildings[attribInfo.sValue] = buildings[attribInfo.sValue] + instances.length;
            }
            var isBody = WSM.Utils.IsObjectType(attribInfo.aOwnerIDs, WSM.nBodyType);
            if (isBody)
            {
                console.log("Is nBodyType");
                buildings[attribInfo.sValue]++;
            }
        }
    );
    console.log("buildings: " + JSON.stringify(buildings));
    return buildings;
}
