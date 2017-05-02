//Get the list of all WSM history objects
var wsmHistories = WSM.APIGetAllHistoriesReadOnly();

for each(var currentHistoryID in wsmHistories)
{
    var currentAttributes = WSM.APIGetStringAttributeKeyValueReadOnly(currentHistoryID);
    for (var intEnum = WSM.nObjectType.nUnSpecifiedType; intEnum != WSM.nObjectType
}