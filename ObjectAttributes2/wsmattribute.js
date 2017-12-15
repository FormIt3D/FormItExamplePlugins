if (typeof FormItExamplePlugins == 'undefined')
{
    FormItExamplePlugins = {};
}

if (typeof FormItExamplePlugins.ObjectAttributes2 == 'undefined')
{
    FormItExamplePlugins.ObjectAttributes2 = {};
}

FormItExamplePlugins.ObjectAttributes2.BuildingTypeKey = "Building Type";

// from HTML side. Change building type callabck
FormItExamplePlugins.ObjectAttributes2.ChangeType = function()
{
    FormItInterface.CallMethod("FormItExamplePlugins.ObjectAttributes2.ApplyBuildingTypeAttriblute",
        document.a.buildingType.value);
}

// from FormIt App side. CHanges the building type string attribute of the
// selected objects based on the type chosen from the menu.
FormItExamplePlugins.ObjectAttributes2.ApplyBuildingTypeAttriblute = function(type)
{
    if (FormIt.Selection.HasSelections())
    {
        FormIt.UndoManagement.BeginState();
        var selectedObjs = FormIt.Selection.GetSelections();
        selectedObjs.forEach(function(obj)
        {
            console.log("obj: " + JSON.stringify(obj));
            var WSMObj = obj.ids[obj.ids.length - 1];
            console.log("WSMObj: " + JSON.stringify(WSMObj));
            WSM.Utils.SetOrCreateStringAttributeForObject(WSMObj.History,
                WSMObj.Object,
                this.BuildingTypeKey,
                type,
                WSM.nCopyAlways,
                false);
        }, this);
        FormIt.UndoManagement.EndState("Assign Building Type");
    }
}


// HTML side. Configures the building type menu and building name field
// based on the JSON obejct that the formit side function creates after
// the selection changed
FormItExamplePlugins.ObjectAttributes2.SelectionChangedHTML = function()
{
    FormItInterface.CallMethod("FormItExamplePlugins.ObjectAttributes2.SelectionChanged", "", function(buildingInfo)
    {
        var typeMenu = document.getElementById("buildingTypeMenu");
        var nameField = document.getElementById("buildingNameField");
        var noSelection = JSON.parse(buildingInfo).NoSelection;

        // No selection. Disable entire menu
        if (noSelection) {
            typeMenu.selectedIndex = 0;
            typeMenu.disabled = true;
            nameField.disabled = true;
            nameField.value = "";
        }
        // Something is selected
        else {
            var multipleTypes = JSON.parse(buildingInfo).MultipleTypes;
            var multipleNames = JSON.parse(buildingInfo).MultipleNames;

            // Multiple objects with different type
            typeMenu.disabled = false;
            var lastIndex = typeMenu.options.length -1;
            if (multipleTypes) {
                typeMenu.options[lastIndex].hidden = false;
                typeMenu.selectedIndex = lastIndex;
            }
            // One or more objects with the same type
            else {
                var selectedType = JSON.parse(buildingInfo).Value;
                typeMenu.options[lastIndex].hidden = true;
                var selectedIndex = 0;
                for(var i = 0; i < typeMenu.options.length; i++) {
                    if (typeMenu.options[i].value == selectedType) {
                        selectedIndex = i;
                        break;
                    }
                }
                typeMenu.selectedIndex = selectedIndex;
            }

            if (multipleNames) {
                nameField.disabled = true;
                nameField.value = "";
            }
            else {
                nameField.disabled = false;
                nameField.value = JSON.parse(buildingInfo).Name;
            }
        }
    });
}

// Formit side. Parses the selection and builds a JSON object
// that contains info for the HTML side to configure the building
// type menu and buildign name field properly
FormItExamplePlugins.ObjectAttributes2.SelectionChanged = function()
{
    var buildingInfo = {};
    buildingInfo["Value"] = "None";
    buildingInfo["MultipleTypes"] = false;
    buildingInfo["MultipleNames"] = false;
    buildingInfo["NoSelection"] = true;
    buildingInfo["Name"] = "";

    var selectedObjs = FormIt.Selection.GetSelections();
    var count = 0;
    selectedObjs.forEach(function(obj)
    {
        var WSMObj = obj.ids[obj.ids.length - 1];

        var objectType = WSM.APIGetObjectTypeReadOnly(WSMObj.History, WSMObj.Object);

        // Only handle bodies and meshes for now
        if (objectType == WSM.nBodyType || objectType == WSM.nMeshType || objectType == WSM.nGroupType) {
            buildingInfo["NoSelection"] = false;
            var attr = WSM.Utils.GetStringAttributeForObject(WSMObj.History, WSMObj.Object, this.BuildingTypeKey);
            count++;

            // Has a building type attribute
            if (attr.success) {
                console.log("Object " + JSON.stringify(WSMObj) + " Building Type : " + attr.value);
                if (buildingInfo["Value"] != "None" && buildingInfo["Value"] != attr.value)
                buildingInfo["MultipleTypes"] = true;
                buildingInfo["Value"] = attr.value;
            }
            // Doesn't have it
            else {
                console.log("Object " + JSON.stringify(WSMObj) + " has no Building Type attribute");
                if (buildingInfo["Value"] != "None")
                buildingInfo["MultipleTypes"] = true;
            }

            // Get object name
            var props = WSM.APIGetObjectPropertiesReadOnly(WSMObj.History, WSMObj.Object);
            buildingInfo["Name"] = props.sObjectName;
        }
    }, this);

    buildingInfo["MultipleNames"] = count > 1 ? true : false;

    return buildingInfo;
}


// HTML side. Change name callback
FormItExamplePlugins.ObjectAttributes2.ChangeName = function()
{
    FormItInterface.CallMethod("FormItExamplePlugins.ObjectAttributes2.ApplyBuildingNameAttribute",
        document.a.buildingName.value);
}

// FormIt side. Updates the name of the selected body/mesh from the
// value entered by the user
FormItExamplePlugins.ObjectAttributes2.ApplyBuildingNameAttribute = function(name)
{
    if (FormIt.Selection.HasSelections())
    {
        FormIt.UndoManagement.BeginState();
        var selectedObjs = FormIt.Selection.GetSelections();
        var WSMObj = selectedObjs[0].ids[selectedObjs[0].ids.length - 1];

        var props = WSM.APIGetObjectPropertiesReadOnly(WSMObj.History, WSMObj.Object);
        WSM.APISetObjectProperties(WSMObj.History, WSMObj.Object, name, props.bReportAreaByLevel);

        FormIt.UndoManagement.EndState("Assign Building Name");
    }
}
