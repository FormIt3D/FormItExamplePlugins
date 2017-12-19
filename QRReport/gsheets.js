// TODO (hauswij): Put the vars below into QRReport.
var QRReport = {};

// Client ID and API key from the Developer Console
var CLIENT_ID = '30882721599-75fir2nokl8p4porgfdcmsv4und5limt.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAbvgMpV3DGv-eN3VJM0GKu_PxS2anArfI';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    console.log('In handleClientLoad- apis.google.com loaded.');
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    console.log("Called initClient");
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        console.log("Init finished");
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        // TODO uncomment
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        //updateSigninStatus(false);
        authorizeButton.onclick = handleAuthClick;
        //authorizeButton.onclick = function() {console.log("Clicked");gapi.auth2.getAuthInstance().signIn();};
        signoutButton.onclick = handleSignoutClick;
    });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';

        // Load existing sheet.
        QRReport.spreadsheetId = window.localStorage.getItem('gSheetsID');
        if (!QRReport.spreadsheetId)
        {
            var request = gapi.client.sheets.spreadsheets.create({}, {});
                request.then(function(response) {
                    QRReport.spreadsheetId = response.result.spreadsheetId;
                    window.localStorage.setItem('gSheetsID', QRReport.spreadsheetId);
                    console.log(response.result);
                    sheetURL = "https://docs.google.com/spreadsheets/d/" + QRReport.spreadsheetId;
                    //document.getElementById('gSheetsID').src = sheetID;
                    //window.open(sheetURL);
                    getSheets();
                }, function(reason) {
                    console.error('error: ' + reason.result.error.message);
                });
        }
        else
        {
            //document.getElementById('gSheetsID').src = sheetID;
            //window.open(sheetURL);
        }
        // populate sheet names.
        getSheets();
    }
    else
    {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}


function createSheet()
{
    var params = {
        // The spreadsheet to apply the updates to.
        spreadsheetId: QRReport.spreadsheetId
    };

    var batchUpdateSpreadsheetRequestBody = {
        "requests": [
            {
            "addSheet": {
                "properties": {
                "title": "Deposits",
                "gridProperties": {
                    "rowCount": 20,
                    "columnCount": 12
                },
                "tabColor": {
                    "red": 1.0,
                    "green": 0.3,
                    "blue": 0.4
                }
                }
            }
            }
        ]
        };

    var request = gapi.client.sheets.spreadsheets.batchUpdate(params, batchUpdateSpreadsheetRequestBody);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
        console.log("Added sheet, setting data...");
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function openSpreadsheet()
{
    sheetURL = "https://docs.google.com/spreadsheets/d/" + QRReport.spreadsheetId;
    window.open(sheetURL);
}

// Find all the sheets in the spreadsheet.
function getSheets()
{
    var params = {
        // The spreadsheet to request.
        spreadsheetId: QRReport.spreadsheetId,  // TODO: Update placeholder value.

        // The ranges to retrieve from the spreadsheet.
        ranges: [],  // TODO: Update placeholder value.

        // True if grid data should be returned.
        // This parameter is ignored if a field mask was set in the request.
        includeGridData: false,  // TODO: Update placeholder value.
        };
    // Get sheet IDs
    var request = gapi.client.sheets.spreadsheets.get(params);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        // TODO (hauswij): Put sheet info into
        console.log(response.result);
        QRReport.sheets = response.result.sheets;
        // Create map of Sheet Name -> ID
        for (var sheetIndex in QRReport.sheets)
        {
            var sheet = QRReport.sheets[sheetIndex];
            console.log("Sheet prop:" + JSON.stringify(sheet));
            QRReport.sheets[sheet.properties.title] = sheet.properties.sheetId;
        }
        }, function(reason) {
            console.error('error: ' + reason.result.error.message);
        });
}

function UpdateData() {
    var params = {
        // The spreadsheet to apply the updates to.
        spreadsheetId: QRReport.spreadsheetId
    };
    // TODO (hauswij): Figure out how to do a batch update of clear and populate in one shot.
    var batchUpdateSpreadsheetRequestBody = {
        "requests": [
            {
                "updateCells": {
                  "range": {
                    "sheetId": QRReport.sheets["Sheet1"]
                  },
                  "fields": "userEnteredValue"
                }
            }
        ]
        };

    var request = gapi.client.sheets.spreadsheets.batchUpdate(params, batchUpdateSpreadsheetRequestBody);
    request.then(function(response) {


    // TODO (hauswij):  Get data from formit model and then reformat to load into the spreadsheet.
    var range = {
        sheetID: QRReport.sheets["Sheet1"],
        startRowIndex: 1,
        startColumnIndex: 0
        };
    // TODO (hauswij): Figure out range format.  The format above doesn't work, I thought I had
    // it working using the above format!!!!
    range = "Sheet1!A1";
    FormItInterface.CallMethod("FormItExamplePlugins.QRReport.GetWSMAttribluteReportData", "", function(buildings)
    {
        buildings = JSON.parse(buildings);
        var values = [];
        values.push(["Usage", "Name", "Area (sf)"]);

        var params = {
            spreadsheetId: QRReport.spreadsheetId,
            "range": range,
            "majorDimension": "ROWS",
            "valueInputOption": 'USER_ENTERED',
            "values": values,
            };

        for (var buildingIndex in buildings)
        {
            var building = buildings[buildingIndex];
            var levelAreas = building.levelAreas;
            for (var levelIndex in levelAreas)
            {
                if (building.levelAreas[levelIndex] > 0)
                {
                    var row = [];
                    console.log(buildingIndex);
                    row.push(building.buildingType);
                    row.push(building.name);
                    row.push(building.levelAreas[levelIndex]);
                    values.push(row);
                }
            }
        }

        var params = {
            spreadsheetId: QRReport.spreadsheetId,
            "range": range,
            "majorDimension": "ROWS",
            "valueInputOption": 'USER_ENTERED',
            "values": values,
            };

        var request = gapi.client.sheets.spreadsheets.values.update(params);
        request.then(function(response) {
            // TODO: Change code below to process the `response` object:
            console.log(response.result);
        }, function(reason) {
            console.error('error: ' + reason.result.error.message);
        });
    });

    var request = gapi.client.sheets.spreadsheets.values.update(params);
    request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });

    // This is the clear sheet error handling.
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}
