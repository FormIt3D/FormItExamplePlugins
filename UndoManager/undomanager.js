var mainHistID = FormIt.Model.GetHistoryID();
var groupID = WSM.APICreateGroup(mainHistID);
WSM.APICreateRectangle(groupID, WSM.Geom.Point3d(0, 0, 0), WSM.Geom.Point3d(10, 0, 0), WSM.Geom.Point3d(10, 10, 0), false);
var groupHistoryID = WSM.APIGetGroupReferencedHistoryReadOnly(mainHistID, groupID);
var attribID = WSM.APICreateStringAttribute(groupHistoryID, "ClippingPlanes", "");

