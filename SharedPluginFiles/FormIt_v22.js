// This file is auto-generated
if (!window.FormIt) {
    // Wrapper for calling "native" code as async functions
    window.callAsyncAPI = args => {
        return new Promise(res => {
            FormItInterface.CallMethodDirect(args, json => res(JSON.parse(json)));
        });
    }
window.WSM = window.WSM || {};

        window.WSM.APIGetActiveHistory = function() {
            args = {
                TestAPI: "WSM.APIGetActiveHistory"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateHistory = function(nHistoryID,bNonTemporary) {
            args = {
                TestAPI: "WSM.APICreateHistory",
nHistoryID: nHistoryID,
    bNonTemporary: bNonTemporary
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIChangeHistoryID = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIChangeHistoryID",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDeleteHistory = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIDeleteHistory",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDeleteAllHistories = function() {
            args = {
                TestAPI: "WSM.APIDeleteAllHistories"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllHistoriesReadOnly = function(bWithTemporary) {
            args = {
                TestAPI: "WSM.APIGetAllHistoriesReadOnly",
bWithTemporary: bWithTemporary
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllReachableHistoriesReadOnly = function(nHistoryID,bGoUp) {
            args = {
                TestAPI: "WSM.APIGetAllReachableHistoriesReadOnly",
nHistoryID: nHistoryID,
    bGoUp: bGoUp
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIUndoHistory = function(nHistoryID,bAndDeleteRedo,nApplyOnDeltaID) {
            args = {
                TestAPI: "WSM.APIUndoHistory",
nHistoryID: nHistoryID,
    bAndDeleteRedo: bAndDeleteRedo,
    nApplyOnDeltaID: nApplyOnDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRedoHistory = function(nHistoryID,nApplyOnDeltaID) {
            args = {
                TestAPI: "WSM.APIRedoHistory",
nHistoryID: nHistoryID,
    nApplyOnDeltaID: nApplyOnDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIUndoHistoryToDelta = function(nHistoryID,nDeltaID) {
            args = {
                TestAPI: "WSM.APIUndoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRedoHistoryToDelta = function(nHistoryID,nDeltaID) {
            args = {
                TestAPI: "WSM.APIRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDeleteAllRedoHistory = function(nHistoryID,bReuseDiscardedObjectIDs) {
            args = {
                TestAPI: "WSM.APIDeleteAllRedoHistory",
nHistoryID: nHistoryID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICanUndoHistoryReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APICanUndoHistoryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICanRedoHistoryReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APICanRedoHistoryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICanUndoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
            args = {
                TestAPI: "WSM.APICanUndoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICanRedoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
            args = {
                TestAPI: "WSM.APICanRedoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIUndoOrRedoHistoryToDelta = function(nHistoryID,nDeltaID,bAndDeleteRedo) {
            args = {
                TestAPI: "WSM.APIUndoOrRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID,
    bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllHistoryDeltasReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetAllHistoryDeltasReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetHistoryDeltasReadOnly = function(nHistoryID,nStartDeltaID,nEndDeltaID) {
            args = {
                TestAPI: "WSM.APIGetHistoryDeltasReadOnly",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMergeDeltas = function(nHistoryID,nStartDeltaID,nEndDeltaID,bReuseDiscardedObjectIDs) {
            args = {
                TestAPI: "WSM.APIMergeDeltas",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIReverseFaces = function(nHistoryID,aFaceIDs) {
            args = {
                TestAPI: "WSM.APIReverseFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICheckValidityReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APICheckValidityReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICheckHistoryValidityReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APICheckHistoryValidityReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIComputeAreaReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIComputeAreaReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIComputeVolumeReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIComputeVolumeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICopyObject = function(nHistoryID,nToHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APICopyObject",
nHistoryID: nHistoryID,
    nToHistoryID: nToHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDragFace = function(nHistoryID,nObjectID,nDistance,bMerge) {
            args = {
                TestAPI: "WSM.APIDragFace",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nDistance: nDistance,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDragFaces = function(nHistoryID,aaFaceIDs,aDists,aDirs,bMerge) {
            args = {
                TestAPI: "WSM.APIDragFaces",
nHistoryID: nHistoryID,
    aaFaceIDs: aaFaceIDs,
    aDists: aDists,
    aDirs: aDirs,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIScaleFace = function(nHistoryID,nFaceID,aScaleFactor) {
            args = {
                TestAPI: "WSM.APIScaleFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aScaleFactor: aScaleFactor
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetObjectProperties = function(nHistoryID,nObjectID,sObjectName,bReportAreaByLevel,aDefaultLevelIDs) {
            args = {
                TestAPI: "WSM.APISetObjectProperties",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sObjectName: sObjectName,
    bReportAreaByLevel: bReportAreaByLevel,
    aDefaultLevelIDs: aDefaultLevelIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIOffsetFace = function(nHistoryID,nFaceID,dOffsetDistance,bOffsetHolesToo,trans,bReadOnly) {
            args = {
                TestAPI: "WSM.APIOffsetFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    dOffsetDistance: dOffsetDistance,
    bOffsetHolesToo: bOffsetHolesToo,
    trans: trans,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APITaperFace = function(nHistoryID,nFaceID,dRadians,axis) {
            args = {
                TestAPI: "WSM.APITaperFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    dRadians: dRadians,
    axis: axis
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRotateFace = function(nHistoryID,nFaceID,aRadian) {
            args = {
                TestAPI: "WSM.APIRotateFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aRadian: aRadian
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRotateFaceBetweenPoints = function(nHistoryID,nFaceID,startPt,endPt) {
            args = {
                TestAPI: "WSM.APIRotateFaceBetweenPoints",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    startPt: startPt,
    endPt: endPt
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMergeBody = function(nHistoryID,nBodyID,dSmoothCosAngle) {
            args = {
                TestAPI: "WSM.APIMergeBody",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dSmoothCosAngle: dSmoothCosAngle
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateBlock = function(nHistoryID,point3d1,point3d2) {
            args = {
                TestAPI: "WSM.APICreateBlock",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateCircleOrArc = function(nHistoryID,radius,posCenter,xAxis,yAxis,dStartParam,dEndParam,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets) {
            args = {
                TestAPI: "WSM.APICreateCircleOrArc",
nHistoryID: nHistoryID,
    radius: radius,
    posCenter: posCenter,
    xAxis: xAxis,
    yAxis: yAxis,
    dStartParam: dStartParam,
    dEndParam: dEndParam,
    accuracyORcount: accuracyORcount,
    bReadOnly: bReadOnly,
    trans: trans,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateCircleOrArcFromPoints = function(nHistoryID,arcStartPos,arcEndPos,thirdPoint,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets,bCircle) {
            args = {
                TestAPI: "WSM.APICreateCircleOrArcFromPoints",
nHistoryID: nHistoryID,
    arcStartPos: arcStartPos,
    arcEndPos: arcEndPos,
    thirdPoint: thirdPoint,
    accuracyORcount: accuracyORcount,
    bReadOnly: bReadOnly,
    trans: trans,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets,
    bCircle: bCircle
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateHermiteSpline = function(nHistoryID,aControlPoints,bClosed,startTangent,endTangent,bReadOnly) {
            args = {
                TestAPI: "WSM.APICreateHermiteSpline",
nHistoryID: nHistoryID,
    aControlPoints: aControlPoints,
    bClosed: bClosed,
    startTangent: startTangent,
    endTangent: endTangent,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateClampedHermiteSplineDataReadOnly = function(nHistoryID,aControlPointsOld,startTangentOld,endTangentOld,bClosedOld,aVertexIDsOnSpline,nNumberOfNewContolPoints) {
            args = {
                TestAPI: "WSM.APICreateClampedHermiteSplineDataReadOnly",
nHistoryID: nHistoryID,
    aControlPointsOld: aControlPointsOld,
    startTangentOld: startTangentOld,
    endTangentOld: endTangentOld,
    bClosedOld: bClosedOld,
    aVertexIDsOnSpline: aVertexIDsOnSpline,
    nNumberOfNewContolPoints: nNumberOfNewContolPoints
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateRectangle = function(nHistoryID,firstEdgePt1,firstEdgePt2,projectionPt,bReadOnly) {
            args = {
                TestAPI: "WSM.APICreateRectangle",
nHistoryID: nHistoryID,
    firstEdgePt1: firstEdgePt1,
    firstEdgePt2: firstEdgePt2,
    projectionPt: projectionPt,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateHemisphere = function(nHistoryID,nRadius,centerPt,nAccuracyORcount) {
            args = {
                TestAPI: "WSM.APICreateHemisphere",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateCone = function(nHistoryID,nRadius,nHeight,centerPt,nAccuracyORcount) {
            args = {
                TestAPI: "WSM.APICreateCone",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    nHeight: nHeight,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISweep = function(nHistoryID,aProfile,aPath,bRemoveUnusedProfileAndPath) {
            args = {
                TestAPI: "WSM.APISweep",
nHistoryID: nHistoryID,
    aProfile: aProfile,
    aPath: aPath,
    bRemoveUnusedProfileAndPath: bRemoveUnusedProfileAndPath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIOffset3d = function(nHistoryID,nObjectID,dDistance) {
            args = {
                TestAPI: "WSM.APIOffset3d",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    dDistance: dDistance
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIShell = function(nHistoryID,nBodyID,dDistance) {
            args = {
                TestAPI: "WSM.APIShell",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dDistance: dDistance
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIBlend = function(nHistoryID,dRadius,aPathIDs,accuracyORcount,nMinimumNumberOfFacets) {
            args = {
                TestAPI: "WSM.APIBlend",
nHistoryID: nHistoryID,
    dRadius: dRadius,
    aPathIDs: aPathIDs,
    accuracyORcount: accuracyORcount,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIOffsetEdges = function(nHistoryID,nEdgeIDs,dOffsetDistance,trans,bReadOnly) {
            args = {
                TestAPI: "WSM.APIOffsetEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    dOffsetDistance: dOffsetDistance,
    trans: trans,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICover = function(nHistoryID,aEdgeIDs,bMerge) {
            args = {
                TestAPI: "WSM.APICover",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoft = function(nHistoryID,aaProfileIDs,bDeleteInteriorProfileFaces) {
            args = {
                TestAPI: "WSM.APILoft",
nHistoryID: nHistoryID,
    aaProfileIDs: aaProfileIDs,
    bDeleteInteriorProfileFaces: bDeleteInteriorProfileFaces
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIExtrudeEdges = function(nHistoryID,aProfileIDs,t) {
            args = {
                TestAPI: "WSM.APIExtrudeEdges",
nHistoryID: nHistoryID,
    aProfileIDs: aProfileIDs,
    t: t
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadAXMFile = function(nHistoryID,sFilePath,isImport,logOutputPath) {
            args = {
                TestAPI: "WSM.APILoadAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    isImport: isImport,
    logOutputPath: logOutputPath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadMaterialsFromAXMFile = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.APILoadMaterialsFromAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveToAXMFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,aPreviewImage,bWithChildren) {
            args = {
                TestAPI: "WSM.APISaveToAXMFileReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    sFilePath: sFilePath,
    aPreviewImage: aPreviewImage,
    bWithChildren: bWithChildren
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadFromFile = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
            args = {
                TestAPI: "WSM.APILoadFromFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadFromFacets = function(nHistoryID,facetsData,dMaxDistanceFromOrigin,dRemoveDuplicateTol) {
            args = {
                TestAPI: "WSM.APILoadFromFacets",
nHistoryID: nHistoryID,
    facetsData: facetsData,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dRemoveDuplicateTol: dRemoveDuplicateTol
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveLastDeltaToBinaryFile = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.APISaveLastDeltaToBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveDeltaToBinaryStringReadOnly = function(nHistoryID,nDeltaID) {
            args = {
                TestAPI: "WSM.APISaveDeltaToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetLastDeltaIDReadOnly = function(nHistoryID,nBeforeLast) {
            args = {
                TestAPI: "WSM.APIGetLastDeltaIDReadOnly",
nHistoryID: nHistoryID,
    nBeforeLast: nBeforeLast
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveDeltaToSolidDefReadOnly = function(nHistoryID,bForUndo) {
            args = {
                TestAPI: "WSM.APISaveDeltaToSolidDefReadOnly",
nHistoryID: nHistoryID,
    bForUndo: bForUndo
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIAddSolidDefGuids = function(nHistoryID,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIAddSolidDefGuids",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadDeltaFromBinaryString = function(nHistoryID,base64Str,nDeltaID,base64encoded) {
            args = {
                TestAPI: "WSM.APILoadDeltaFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    nDeltaID: nDeltaID,
    base64encoded: base64encoded
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveToFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,eFileType,bWithChildren,dExportScale,aExcludedObjects,aLayerDisplayedNegateVec) {
            args = {
                TestAPI: "WSM.APISaveToFileReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    sFilePath: sFilePath,
    eFileType: eFileType,
    bWithChildren: bWithChildren,
    dExportScale: dExportScale,
    aExcludedObjects: aExcludedObjects,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveAllActiveObjectsToBinaryFileReadOnly = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.APISaveAllActiveObjectsToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveHistoryToBinaryFileReadOnly = function(nHistoryID,sFilePath,aLayerDisplayedNegateVec) {
            args = {
                TestAPI: "WSM.APISaveHistoryToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveHistoryToBinaryStringReadOnly = function(nHistoryID,bBase64Encode,aLayerDisplayedNegateVec) {
            args = {
                TestAPI: "WSM.APISaveHistoryToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    bBase64Encode: bBase64Encode,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISaveToStringReadOnly = function(nHistoryID,aObjectIDs,bWithChildren,aExcludedObjects,aLayerDisplayedNegateVec,eFileType) {
            args = {
                TestAPI: "WSM.APISaveToStringReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    bWithChildren: bWithChildren,
    aExcludedObjects: aExcludedObjects,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec,
    eFileType: eFileType
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadFromString = function(nHistoryID,saveString,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
            args = {
                TestAPI: "WSM.APILoadFromString",
nHistoryID: nHistoryID,
    saveString: saveString,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadHistoryFromBinaryString = function(nHistoryID,base64Str,base64encoded) {
            args = {
                TestAPI: "WSM.APILoadHistoryFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    base64encoded: base64encoded
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILoadDeltaFromBinaryFile = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.APILoadDeltaFromBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreatePolyline = function(nHistoryID,aPoint3ds,bForceClosed) {
            args = {
                TestAPI: "WSM.APICreatePolyline",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    bForceClosed: bForceClosed
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateExtrusion = function(nHistoryID,aPoint3ds,dist) {
            args = {
                TestAPI: "WSM.APICreateExtrusion",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    dist: dist
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateCylinder = function(nHistoryID,aPosCenter,aRadius,aHeight,aAccuracyORcount,aAxis) {
            args = {
                TestAPI: "WSM.APICreateCylinder",
nHistoryID: nHistoryID,
    aPosCenter: aPosCenter,
    aRadius: aRadius,
    aHeight: aHeight,
    aAccuracyORcount: aAccuracyORcount,
    aAxis: aAxis
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetBodyFacesReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetBodyFacesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRegisterProgressCallbacksReadOnly = function(startCbkStr,progressCbkStr,finishCbkStr,progressIncrement,progressStart,progressEnd) {
            args = {
                TestAPI: "WSM.APIRegisterProgressCallbacksReadOnly",
startCbkStr: startCbkStr,
    progressCbkStr: progressCbkStr,
    finishCbkStr: finishCbkStr,
    progressIncrement: progressIncrement,
    progressStart: progressStart,
    progressEnd: progressEnd
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetTopLevelOwnersReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetTopLevelOwnersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectsByTypeReadOnly = function(nHistoryID,nObjectID,nType,bUpstream) {
            args = {
                TestAPI: "WSM.APIGetObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nType: nType,
    bUpstream: bUpstream
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllObjectsByTypeReadOnly = function(nHistoryID,nType) {
            args = {
                TestAPI: "WSM.APIGetAllObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nType: nType
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectTypeReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectNameReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectNameReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectPropertiesReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectPropertiesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly = function(nHistoryID,nObjectType,bForUndo) {
            args = {
                TestAPI: "WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nObjectType: nObjectType,
    bForUndo: bForUndo
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly = function(nHistoryID,nStartDelta,nEndDelta,aObjectTypes) {
            args = {
                TestAPI: "WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly",
nHistoryID: nHistoryID,
    nStartDelta: nStartDelta,
    nEndDelta: nEndDelta,
    aObjectTypes: aObjectTypes
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetEdgesOrVerticesMarkedSmooth = function(nHistoryID,aObjectIDs,bSmooth) {
            args = {
                TestAPI: "WSM.APISetEdgesOrVerticesMarkedSmooth",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    bSmooth: bSmooth
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsEdgeSilhouetteReadOnly = function(nHistoryID,nEdgeID,cameraPos,cameraDir,bPerspectiveView) {
            args = {
                TestAPI: "WSM.APIIsEdgeSilhouetteReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDetectSilhouettesReadOnly = function(nHistoryID,nEdgeIDs,cameraPos,cameraDir,bPerspectiveView,bSmoothOnly) {
            args = {
                TestAPI: "WSM.APIDetectSilhouettesReadOnly",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView,
    bSmoothOnly: bSmoothOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDetectFreeEdgesReadOnly = function(nHistoryID,nEdgeIDs) {
            args = {
                TestAPI: "WSM.APIDetectFreeEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsEdgeManifoldReadOnly = function(nHistoryID,nEdgeID) {
            args = {
                TestAPI: "WSM.APIIsEdgeManifoldReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFacePlaneReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFacePlaneReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceCentroidPoint3dReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFaceCentroidPoint3dReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceConnectedComponentReadOnly = function(nHistoryID,nFaceID,bUseVertices,bSmooth) {
            args = {
                TestAPI: "WSM.APIGetFaceConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bUseVertices: bUseVertices,
    bSmooth: bSmooth
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceVariantReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFaceVariantReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceVertexNormalsReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFaceVertexNormalsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetVertexPoint3dReadOnly = function(nHistoryID,nVertexID) {
            args = {
                TestAPI: "WSM.APIGetVertexPoint3dReadOnly",
nHistoryID: nHistoryID,
    nVertexID: nVertexID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetIdOfActiveDeltaReadOnly = function(nHistoryID,nDeltaOffset) {
            args = {
                TestAPI: "WSM.APIGetIdOfActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaOffset: nDeltaOffset
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetBodyEdgesReadOnly = function(nHistoryID,nBodyID) {
            args = {
                TestAPI: "WSM.APIGetBodyEdgesReadOnly",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllNonOwnedReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetAllNonOwnedReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllConnectedNonOwnedReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetAllConnectedNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRayFireReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces) {
            args = {
                TestAPI: "WSM.APIRayFireReadOnly",
nHistoryID: nHistoryID,
    line3dPickRay: line3dPickRay,
    dRayRadius: dRayRadius,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRayFireSortedReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces,dMaxParam,bSearchInGroups) {
            args = {
                TestAPI: "WSM.APIRayFireSortedReadOnly",
nHistoryID: nHistoryID,
    line3dPickRay: line3dPickRay,
    dRayRadius: dRayRadius,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces,
    dMaxParam: dMaxParam,
    bSearchInGroups: bSearchInGroups
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIntersectsNegativeSideOfPlanesReadOnly = function(nHistoryID,aPlanes,dTol,bVertices,bEdges,bFaces,bStrict,line3dPickRay,bSearchInGroups,bPickInstances) {
            args = {
                TestAPI: "WSM.APIIntersectsNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    aPlanes: aPlanes,
    dTol: dTol,
    bVertices: bVertices,
    bEdges: bEdges,
    bFaces: bFaces,
    bStrict: bStrict,
    line3dPickRay: line3dPickRay,
    bSearchInGroups: bSearchInGroups,
    bPickInstances: bPickInstances
            };
            return callAsyncAPI(args);
        };

        window.WSM.APITransformObject = function(nHistoryID,nObjectID,transf3d) {
            args = {
                TestAPI: "WSM.APITransformObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APITransformObjects = function(nHistoryID,aObjectIDs,transf3d) {
            args = {
                TestAPI: "WSM.APITransformObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDeleteObject = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIDeleteObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDeleteObjects = function(nHistoryID,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIDeleteObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateEmptyBody = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APICreateEmptyBody",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIAddFaceComponentToBody = function(nHistoryID,nFaceID,nBodyID) {
            args = {
                TestAPI: "WSM.APIAddFaceComponentToBody",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMoveVertices = function(nHistoryID,aVertexIDs,aNewVertexPositions) {
            args = {
                TestAPI: "WSM.APIMoveVertices",
nHistoryID: nHistoryID,
    aVertexIDs: aVertexIDs,
    aNewVertexPositions: aNewVertexPositions
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMoveObject = function(nHistoryID,objectID,displacement) {
            args = {
                TestAPI: "WSM.APIMoveObject",
nHistoryID: nHistoryID,
    objectID: objectID,
    displacement: displacement
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMoveObjects = function(nHistoryID,objectIDs,transf3d) {
            args = {
                TestAPI: "WSM.APIMoveObjects",
nHistoryID: nHistoryID,
    objectIDs: objectIDs,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDumpResults = function() {
            args = {
                TestAPI: "WSM.APIDumpResults"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetResultsCount = function() {
            args = {
                TestAPI: "WSM.APIGetResultsCount"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIClearResults = function() {
            args = {
                TestAPI: "WSM.APIClearResults"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIConnectPoint3ds = function(nHistoryID,point3d1,point3d2) {
            args = {
                TestAPI: "WSM.APIConnectPoint3ds",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIConnectVertexAndPoint3d = function(nHistoryID,nVertexID,point3d) {
            args = {
                TestAPI: "WSM.APIConnectVertexAndPoint3d",
nHistoryID: nHistoryID,
    nVertexID: nVertexID,
    point3d: point3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIConnectVertices = function(nHistoryID,nVertexID1,nVertexID2) {
            args = {
                TestAPI: "WSM.APIConnectVertices",
nHistoryID: nHistoryID,
    nVertexID1: nVertexID1,
    nVertexID2: nVertexID2
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIImprint = function(nHistoryID,nObjectID1,nObjectID2,bChangeBoth) {
            args = {
                TestAPI: "WSM.APIImprint",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    bChangeBoth: bChangeBoth
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIImprintWithPlane = function(nHistoryID,nObjectID,plane) {
            args = {
                TestAPI: "WSM.APIImprintWithPlane",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    plane: plane
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsEdgeOnCircleReadOnly = function(nHistoryID,nEdgeID) {
            args = {
                TestAPI: "WSM.APIIsEdgeOnCircleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEditCircleEdges = function(nHistoryID,nEdgeIDs,radius,center,normal,xaxis,angle) {
            args = {
                TestAPI: "WSM.APIEditCircleEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis,
    angle: angle
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsEdgeOnSplineReadOnly = function(nHistoryID,nEdgeID) {
            args = {
                TestAPI: "WSM.APIIsEdgeOnSplineReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEditSplineEdges = function(nHistoryID,nEdgeIDs,aControlPoints,bClosed,startTangent,endTangent) {
            args = {
                TestAPI: "WSM.APIEditSplineEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    aControlPoints: aControlPoints,
    bClosed: bClosed,
    startTangent: startTangent,
    endTangent: endTangent
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsFaceOnCylinderReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIIsFaceOnCylinderReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEditCylinderFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
            args = {
                TestAPI: "WSM.APIEditCylinderFaces",
nHistoryID: nHistoryID,
    nFaceIDs: nFaceIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsFaceOnSphereReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIIsFaceOnSphereReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEditSphereFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
            args = {
                TestAPI: "WSM.APIEditSphereFaces",
nHistoryID: nHistoryID,
    nFaceIDs: nFaceIDs,
    radius: radius,
    center: center,
    normal: normal,
    xaxis: xaxis
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsFaceOnExtrudeReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIIsFaceOnExtrudeReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsFaceOnBlendReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIIsFaceOnBlendReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIUnite = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
            args = {
                TestAPI: "WSM.APIUnite",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISubtract = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
            args = {
                TestAPI: "WSM.APISubtract",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIUniteNonDestructive = function(blank,tools) {
            args = {
                TestAPI: "WSM.APIUniteNonDestructive",
blank: blank,
    tools: tools
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISubtractNonDestructive = function(blank,tools) {
            args = {
                TestAPI: "WSM.APISubtractNonDestructive",
blank: blank,
    tools: tools
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISeparate = function(nHistoryID,nBodyID) {
            args = {
                TestAPI: "WSM.APISeparate",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISlice = function(nHistoryID,nDestinationHistoryID,nObjectID,plane) {
            args = {
                TestAPI: "WSM.APISlice",
nHistoryID: nHistoryID,
    nDestinationHistoryID: nDestinationHistoryID,
    nObjectID: nObjectID,
    plane: plane
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetMemorySizeReadOnly = function(nHistoryID,bCollapsedHistoryWithLiveObjsOnly) {
            args = {
                TestAPI: "WSM.APIGetMemorySizeReadOnly",
nHistoryID: nHistoryID,
    bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetVersionReadOnly = function() {
            args = {
                TestAPI: "WSM.APIGetVersionReadOnly"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetBoxReadOnly = function(nHistoryID,nObjectID,transf) {
            args = {
                TestAPI: "WSM.APIGetBoxReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf: transf
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEnableJournaling = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.APIEnableJournaling",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEnableJournalingToString = function(nHistoryID,bIncludeReadOnly) {
            args = {
                TestAPI: "WSM.APIEnableJournalingToString",
nHistoryID: nHistoryID,
    bIncludeReadOnly: bIncludeReadOnly
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIEnableJournalingTypes = function(aTypes) {
            args = {
                TestAPI: "WSM.APIEnableJournalingTypes",
aTypes: aTypes
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDisableJournaling = function() {
            args = {
                TestAPI: "WSM.APIDisableJournaling"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIFaceContainsPointReadOnly = function(nHistoryID,nFaceID,point) {
            args = {
                TestAPI: "WSM.APIFaceContainsPointReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    point: point
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetInvalidID = function() {
            args = {
                TestAPI: "WSM.APIGetInvalidID"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIValidID = function(nID) {
            args = {
                TestAPI: "WSM.APIValidID",
nID: nID
            };
            return callAsyncAPI(args);
        };

        window.WSM.FacetsBodyData = function(m_points,m_polygonIndices,m_polygonSmoothingIds,m_colors,m_polygonColorIndices,m_pointColors) {
            args = {
                TestAPI: "WSM.FacetsBodyData",
m_points: m_points,
    m_polygonIndices: m_polygonIndices,
    m_polygonSmoothingIds: m_polygonSmoothingIds,
    m_colors: m_colors,
    m_polygonColorIndices: m_polygonColorIndices,
    m_pointColors: m_pointColors
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath = function(objectIDs) {
            args = {
                TestAPI: "WSM.GroupInstancePath",
objectIDs: objectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePathAreEqual = function(path1,path2) {
            args = {
                TestAPI: "WSM.GroupInstancePathAreEqual",
path1: path1,
    path2: path2
            };
            return callAsyncAPI(args);
        };

        window.WSM.ObjectHistoryID = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.ObjectHistoryID",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.ObjectHistoryIDAreEqual = function(id1,id2) {
            args = {
                TestAPI: "WSM.ObjectHistoryIDAreEqual",
id1: id1,
    id2: id2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Color = function(r,g,b,a) {
            args = {
                TestAPI: "WSM.Color",
r: r,
    g: g,
    b: b,
    a: a
            };
            return callAsyncAPI(args);
        };

        window.WSM.ColorAreEqual = function(c1,c2) {
            args = {
                TestAPI: "WSM.ColorAreEqual",
c1: c1,
    c2: c2
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetCoedgeDirectionReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetCoedgeDirectionReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetConvexityReadOnly = function(nHistoryID,nEdgeOrLoopID) {
            args = {
                TestAPI: "WSM.APIGetConvexityReadOnly",
nHistoryID: nHistoryID,
    nEdgeOrLoopID: nEdgeOrLoopID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetConvexityConnectedComponentReadOnly = function(nHistoryID,nLoopOrFaceID,nConvexity) {
            args = {
                TestAPI: "WSM.APIGetConvexityConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nLoopOrFaceID: nLoopOrFaceID,
    nConvexity: nConvexity
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICopyOrSketchAndTransformObjects = function(nFromHistoryID,nToHistoryID,aFromObjectIDs,transform,nNumCopies,bGroupBodies,groupTransf3d) {
            args = {
                TestAPI: "WSM.APICopyOrSketchAndTransformObjects",
nFromHistoryID: nFromHistoryID,
    nToHistoryID: nToHistoryID,
    aFromObjectIDs: aFromObjectIDs,
    transform: transform,
    nNumCopies: nNumCopies,
    bGroupBodies: bGroupBodies,
    groupTransf3d: groupTransf3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetObjectsMaterial = function(nHistoryID,aObjectIDs,nMaterialID) {
            args = {
                TestAPI: "WSM.APISetObjectsMaterial",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetFaceBacksideMaterial = function(nHistoryID,aFaceIDs,nMaterialID) {
            args = {
                TestAPI: "WSM.APISetFaceBacksideMaterial",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceBacksideMaterialReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFaceBacksideMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectAttributesReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectAttributesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectMaterialReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetObjectMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateMaterial = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,nTextureID,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures) {
            args = {
                TestAPI: "WSM.APICreateMaterial",
nHistoryID: nHistoryID,
    nColor: nColor,
    dHorizonalScale: dHorizonalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID,
    sMaterialName: sMaterialName,
    sMaterialIdentifier: sMaterialIdentifier,
    aAdditionalRenderData: aAdditionalRenderData,
    aAdditionalTextures: aAdditionalTextures
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateMaterialWithTexture = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,aBitmapData,bUseBitmapAlpha,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures,sTextureName) {
            args = {
                TestAPI: "WSM.APICreateMaterialWithTexture",
nHistoryID: nHistoryID,
    nColor: nColor,
    dHorizonalScale: dHorizonalScale,
    dVerticalScale: dVerticalScale,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha,
    sMaterialName: sMaterialName,
    sMaterialIdentifier: sMaterialIdentifier,
    aAdditionalRenderData: aAdditionalRenderData,
    aAdditionalTextures: aAdditionalTextures,
    sTextureName: sTextureName
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetMaterialColor = function(nHistoryID,nMaterialID,nColor) {
            args = {
                TestAPI: "WSM.APISetMaterialColor",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    nColor: nColor
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetMaterialData = function(nHistoryID,nMaterialID,nColor,dHorizontalScale,dVerticalScale,nTextureID) {
            args = {
                TestAPI: "WSM.APISetMaterialData",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    nColor: nColor,
    dHorizontalScale: dHorizontalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetMaterialTexture = function(nHistoryID,nMaterialID,dHorizontalScale,dVerticalScale,nTextureID) {
            args = {
                TestAPI: "WSM.APISetMaterialTexture",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    dHorizontalScale: dHorizontalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetMaterialDataReadOnly = function(nHistoryID,nMaterialID) {
            args = {
                TestAPI: "WSM.APIGetMaterialDataReadOnly",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateTexture = function(nHistoryID,aBitmapData,bUseBitmapAlpha,sTextureName) {
            args = {
                TestAPI: "WSM.APICreateTexture",
nHistoryID: nHistoryID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha,
    sTextureName: sTextureName
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetTextureDataReadOnly = function(nHistoryID,nTextureID) {
            args = {
                TestAPI: "WSM.APIGetTextureDataReadOnly",
nHistoryID: nHistoryID,
    nTextureID: nTextureID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetTextureData = function(nHistoryID,nTextureID,aBitmapData,bUseBitmapAlpha) {
            args = {
                TestAPI: "WSM.APISetTextureData",
nHistoryID: nHistoryID,
    nTextureID: nTextureID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectTextureCoordinatesReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectTextureCoordinatesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateLevelObjects = function(nHistoryID,aLevelsData) {
            args = {
                TestAPI: "WSM.APICreateLevelObjects",
nHistoryID: nHistoryID,
    aLevelsData: aLevelsData
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetLevelsData = function(nHistoryID,aLevelIDs,aLevelsData) {
            args = {
                TestAPI: "WSM.APISetLevelsData",
nHistoryID: nHistoryID,
    aLevelIDs: aLevelIDs,
    aLevelsData: aLevelsData
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetLevelDataReadOnly = function(nHistoryID,nLevelID) {
            args = {
                TestAPI: "WSM.APIGetLevelDataReadOnly",
nHistoryID: nHistoryID,
    nLevelID: nLevelID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetObjectsLevels = function(nHistoryID,aObjectIDs,aLevelsIDs) {
            args = {
                TestAPI: "WSM.APISetObjectsLevels",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aLevelsIDs: aLevelsIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectLayersReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectLayersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetObjectLevelsReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIGetObjectLevelsReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsObjectLiveReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIIsObjectLiveReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsHistoryLiveReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIIsHistoryLiveReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsNonOwnedReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIIsNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetLocalCoordinateSystemReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetLocalCoordinateSystemReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetLocalCoordinateSystem = function(nHistoryID,transf3d) {
            args = {
                TestAPI: "WSM.APISetLocalCoordinateSystem",
nHistoryID: nHistoryID,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
            args = {
                TestAPI: "WSM.APICreateImageObject",
nHistoryID: nHistoryID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateImageObjectWithTexture = function(nHistoryID,sName,fAlphaValue,bFeaturesVisible,aCornersVector,aBitmapData,sTextureName) {
            args = {
                TestAPI: "WSM.APICreateImageObjectWithTexture",
nHistoryID: nHistoryID,
    sName: sName,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector,
    aBitmapData: aBitmapData,
    sTextureName: sTextureName
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateSatelliteImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector,coordinates,coordinatesSpan,aPixelDimensionsVector) {
            args = {
                TestAPI: "WSM.APICreateSatelliteImageObject",
nHistoryID: nHistoryID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector,
    coordinates: coordinates,
    coordinatesSpan: coordinatesSpan,
    aPixelDimensionsVector: aPixelDimensionsVector
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMoveImage = function(nHistoryID,nImageID,nShift) {
            args = {
                TestAPI: "WSM.APIMoveImage",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    nShift: nShift
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetImageData = function(nHistoryID,nImageID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
            args = {
                TestAPI: "WSM.APISetImageData",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    sName: sName,
    nTextureID: nTextureID,
    fAlphaValue: fAlphaValue,
    bFeaturesVisible: bFeaturesVisible,
    aCornersVector: aCornersVector
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceFacetsReadOnly = function(nHistoryID,nFaceID) {
            args = {
                TestAPI: "WSM.APIGetFaceFacetsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetSatelliteData = function(nHistoryID,nImageID,coordinates,coordinatesSpan,aPixelDimensions) {
            args = {
                TestAPI: "WSM.APISetSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    coordinates: coordinates,
    coordinatesSpan: coordinatesSpan,
    aPixelDimensions: aPixelDimensions
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRemoveSatelliteData = function(nHistoryID,nImageID) {
            args = {
                TestAPI: "WSM.APIRemoveSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetImageDataReadOnly = function(nHistoryID,nImageID) {
            args = {
                TestAPI: "WSM.APIGetImageDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetSatelliteDataReadOnly = function(nHistoryID,nImageID) {
            args = {
                TestAPI: "WSM.APIGetSatelliteDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateGroup = function(nHistoryID,aObjectIDs,aInstanceTransforms,nReferencedHistoryID,transGeometry) {
            args = {
                TestAPI: "WSM.APICreateGroup",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aInstanceTransforms: aInstanceTransforms,
    nReferencedHistoryID: nReferencedHistoryID,
    transGeometry: transGeometry
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetRevitFamilyInformationReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetRevitFamilyInformationReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetRevitFamilyInformation = function(nHistoryID,bIsGeneratedFromRFA,bIsGeneratedFromBuiltinRFA,familyCategory,familyReference,familyType,familyExtraData) {
            args = {
                TestAPI: "WSM.APISetRevitFamilyInformation",
nHistoryID: nHistoryID,
    bIsGeneratedFromRFA: bIsGeneratedFromRFA,
    bIsGeneratedFromBuiltinRFA: bIsGeneratedFromBuiltinRFA,
    familyCategory: familyCategory,
    familyReference: familyReference,
    familyType: familyType,
    familyExtraData: familyExtraData
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetGroupReferencedHistoryReadOnly = function(nHistoryID,nGroupOrInstanceID,bDeletedInstanceOK) {
            args = {
                TestAPI: "WSM.APIGetGroupReferencedHistoryReadOnly",
nHistoryID: nHistoryID,
    nGroupOrInstanceID: nGroupOrInstanceID,
    bDeletedInstanceOK: bDeletedInstanceOK
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetAllAggregateTransf3dsReadOnly = function(nReferencedHistoryID,nTopMostHistoryID) {
            args = {
                TestAPI: "WSM.APIGetAllAggregateTransf3dsReadOnly",
nReferencedHistoryID: nReferencedHistoryID,
    nTopMostHistoryID: nTopMostHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIFlattenGroupsOrInstances = function(nHistoryID,aGroupOrInstanceIDs,bRecursive,bImprint) {
            args = {
                TestAPI: "WSM.APIFlattenGroupsOrInstances",
nHistoryID: nHistoryID,
    aGroupOrInstanceIDs: aGroupOrInstanceIDs,
    bRecursive: bRecursive,
    bImprint: bImprint
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIAddInstancesToGroup = function(nHistoryID,nGroupID,aTransforms) {
            args = {
                TestAPI: "WSM.APIAddInstancesToGroup",
nHistoryID: nHistoryID,
    nGroupID: nGroupID,
    aTransforms: aTransforms
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateSeparateHistoriesForInstances = function(nHistoryID,aInstanceIDs,bNewGroupPerInstance) {
            args = {
                TestAPI: "WSM.APICreateSeparateHistoriesForInstances",
nHistoryID: nHistoryID,
    aInstanceIDs: aInstanceIDs,
    bNewGroupPerInstance: bNewGroupPerInstance
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateStringAttribute = function(nHistoryID,sKey,sValue,aObjIDs,nCopyBehavior,bIsSharedOnSplit) {
            args = {
                TestAPI: "WSM.APICreateStringAttribute",
nHistoryID: nHistoryID,
    sKey: sKey,
    sValue: sValue,
    aObjIDs: aObjIDs,
    nCopyBehavior: nCopyBehavior,
    bIsSharedOnSplit: bIsSharedOnSplit
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetStringAttributeKeyValueReadOnly = function(nHistoryID,nStringAttributeID) {
            args = {
                TestAPI: "WSM.APIGetStringAttributeKeyValueReadOnly",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetStringAttributeValue = function(nHistoryID,nStringAttributeID,sValue) {
            args = {
                TestAPI: "WSM.APISetStringAttributeValue",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID,
    sValue: sValue
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetStringAttributesByKeyReadOnly = function(nHistoryID,nObjectID,sKey) {
            args = {
                TestAPI: "WSM.APIGetStringAttributesByKeyReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sKey: sKey
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetRenderableFaceReadOnly = function(nHistoryID,nFaceID,bCalculateTexCoords,bBackSide) {
            args = {
                TestAPI: "WSM.APIGetRenderableFaceReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bCalculateTexCoords: bCalculateTexCoords,
    bBackSide: bBackSide
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetFaceUVDataAttributes = function(nHistoryID,aFaceIDs,rTransf3d,bReplaceTransform,tformCenter,tformUVCenter) {
            args = {
                TestAPI: "WSM.APISetFaceUVDataAttributes",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    rTransf3d: rTransf3d,
    bReplaceTransform: bReplaceTransform,
    tformCenter: tformCenter,
    tformUVCenter: tformUVCenter
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceUVDataTransformReadOnly = function(nHistoryID,nFaceID,bBackSide) {
            args = {
                TestAPI: "WSM.APIGetFaceUVDataTransformReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bBackSide: bBackSide
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetFaceUVDataAttributeUVsReadOnly = function(nHistoryID,nFaceUVDataAttributeID) {
            args = {
                TestAPI: "WSM.APIGetFaceUVDataAttributeUVsReadOnly",
nHistoryID: nHistoryID,
    nFaceUVDataAttributeID: nFaceUVDataAttributeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetEdgePointsReadOnly = function(nHistoryID,nEdgeID) {
            args = {
                TestAPI: "WSM.APIGetEdgePointsReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsHistoryNonTemporaryReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIIsHistoryNonTemporaryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateLayer = function(nHistoryID,name,bDisplayed) {
            args = {
                TestAPI: "WSM.APICreateLayer",
nHistoryID: nHistoryID,
    name: name,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetLayerDataReadOnly = function(nHistoryID,nLayerID) {
            args = {
                TestAPI: "WSM.APIGetLayerDataReadOnly",
nHistoryID: nHistoryID,
    nLayerID: nLayerID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetLayerData = function(nHistoryID,nLayerID,name,bDisplayed) {
            args = {
                TestAPI: "WSM.APISetLayerData",
nHistoryID: nHistoryID,
    nLayerID: nLayerID,
    name: name,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetLayersDisplayed = function(nHistoryID,aLayerIDs,bDisplayed) {
            args = {
                TestAPI: "WSM.APISetLayersDisplayed",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIAddObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIAddObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIRemoveObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIAddRemoveObjectsLayers = function(nHistoryID,aAddLayerIDs,aRemoveLayerIDs,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIAddRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aAddLayerIDs: aAddLayerIDs,
    aRemoveLayerIDs: aRemoveLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateGeometryFromData = function(nHistoryID,aTextures,aMaterials,aLayers,aInstances,aFaceCollections,aEdges,aCurves,aImages,aGroupName,bCreateMesh) {
            args = {
                TestAPI: "WSM.APICreateGeometryFromData",
nHistoryID: nHistoryID,
    aTextures: aTextures,
    aMaterials: aMaterials,
    aLayers: aLayers,
    aInstances: aInstances,
    aFaceCollections: aFaceCollections,
    aEdges: aEdges,
    aCurves: aCurves,
    aImages: aImages,
    aGroupName: aGroupName,
    bCreateMesh: bCreateMesh
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateEdgesFromData = function(nHistoryID,aLayers,aEdges,aCurves,bCreateMesh,accuracyORcount) {
            args = {
                TestAPI: "WSM.APICreateEdgesFromData",
nHistoryID: nHistoryID,
    aLayers: aLayers,
    aEdges: aEdges,
    aCurves: aCurves,
    bCreateMesh: bCreateMesh,
    accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsEdgeMergeableReadOnly = function(nHistoryID,nEdgeID,bUseMaterial) {
            args = {
                TestAPI: "WSM.APIIsEdgeMergeableReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bUseMaterial: bUseMaterial
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetEdgeStyleReadOnly = function(nHistoryID,nEdgeID) {
            args = {
                TestAPI: "WSM.APIGetEdgeStyleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetEdgesStyle = function(nHistoryID,aEdgeIDs,nColor) {
            args = {
                TestAPI: "WSM.APISetEdgesStyle",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    nColor: nColor
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsExactMatchReadOnly = function(nHistoryID1,nHistoryID2,nObjectID1,nObjectID2) {
            args = {
                TestAPI: "WSM.APIIsExactMatchReadOnly",
nHistoryID1: nHistoryID1,
    nHistoryID2: nHistoryID2,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIDebugObjectReadOnly = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.APIDebugObjectReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetDynamoModelInformationReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetDynamoModelInformationReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISetDynamoModelInformation = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APISetDynamoModelInformation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Is32Bit = function() {
            args = {
                TestAPI: "WSM.Is32Bit"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetConnectedEdgesReadOnly = function(nHistoryID,nEdgeID,bBreakOnNonSmooth) {
            args = {
                TestAPI: "WSM.APIGetConnectedEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bBreakOnNonSmooth: bBreakOnNonSmooth
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetEnabledJournalingTypesReadOnly = function() {
            args = {
                TestAPI: "WSM.APIGetEnabledJournalingTypesReadOnly"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetHistoryReferencingGroupsReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIGetHistoryReferencingGroupsReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetInstanceTransf3dReadOnly = function(nHistoryID,nInstanceID) {
            args = {
                TestAPI: "WSM.APIGetInstanceTransf3dReadOnly",
nHistoryID: nHistoryID,
    nInstanceID: nInstanceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetPointsFromObjectIDsReadOnly = function(nHistoryID,aIDs) {
            args = {
                TestAPI: "WSM.APIGetPointsFromObjectIDsReadOnly",
nHistoryID: nHistoryID,
    aIDs: aIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsJournalingReadOnly = function() {
            args = {
                TestAPI: "WSM.APIIsJournalingReadOnly"
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICleanModel = function(nHistoryID,dEdgeTol) {
            args = {
                TestAPI: "WSM.APICleanModel",
nHistoryID: nHistoryID,
    dEdgeTol: dEdgeTol
            };
            return callAsyncAPI(args);
        };

        window.WSM.APISplitAtNonManifoldEdgesAndVertices = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APISplitAtNonManifoldEdgesAndVertices",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateMesh = function(nHistoryID,aPoints,aTriangles,aNormals,aUVs,aColors) {
            args = {
                TestAPI: "WSM.APICreateMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints,
    aTriangles: aTriangles,
    aNormals: aNormals,
    aUVs: aUVs,
    aColors: aColors
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetMeshDataReadOnly = function(nHistoryID,nMeshID) {
            args = {
                TestAPI: "WSM.APIGetMeshDataReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMeshContainsPointReadOnly = function(nHistoryID,nMeshID,point) {
            args = {
                TestAPI: "WSM.APIMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMeshPointOnOrInsideIfManifoldReadOnly = function(nHistoryID,nMeshID,point) {
            args = {
                TestAPI: "WSM.APIMeshPointOnOrInsideIfManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMeshComputeSilhouetteEdgesReadOnly = function(nHistoryID,nMeshID,cameraPos,cameraDir,bPerspectiveView) {
            args = {
                TestAPI: "WSM.APIMeshComputeSilhouetteEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIMeshComputeNonSmoothEdgesReadOnly = function(nHistoryID,nMeshID,dCosSmoothAngle) {
            args = {
                TestAPI: "WSM.APIMeshComputeNonSmoothEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    dCosSmoothAngle: dCosSmoothAngle
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIConvertMeshesToObjects = function(nHistoryID,aMeshIDs,dCosSmoothAngle,bFlatten) {
            args = {
                TestAPI: "WSM.APIConvertMeshesToObjects",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs,
    dCosSmoothAngle: dCosSmoothAngle,
    bFlatten: bFlatten
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILinkMeshesForConversion = function(nHistoryID,aMeshIDs) {
            args = {
                TestAPI: "WSM.APILinkMeshesForConversion",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIConvertObjectsToMeshes = function(nHistoryID,aObjectIDs) {
            args = {
                TestAPI: "WSM.APIConvertObjectsToMeshes",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateVertex = function(nHistoryID,position) {
            args = {
                TestAPI: "WSM.APICreateVertex",
nHistoryID: nHistoryID,
    position: position
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIFlattenFaces = function(nHistoryID,aFaceIDs,dTol) {
            args = {
                TestAPI: "WSM.APIFlattenFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreateLineMesh = function(nHistoryID,aPoints,aIndices,aCounts) {
            args = {
                TestAPI: "WSM.APICreateLineMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints,
    aIndices: aIndices,
    aCounts: aCounts
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetLineMeshDataReadOnly = function(nHistoryID,nLineMeshID) {
            args = {
                TestAPI: "WSM.APIGetLineMeshDataReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILineMeshContainsPointReadOnly = function(nHistoryID,nLineMeshID,point) {
            args = {
                TestAPI: "WSM.APILineMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        window.WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nLineMeshID,aPlanes,line3dPickRay,dTol) {
            args = {
                TestAPI: "WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    aPlanes: aPlanes,
    line3dPickRay: line3dPickRay,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICreatePointMesh = function(nHistoryID,aPoints) {
            args = {
                TestAPI: "WSM.APICreatePointMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIGetPointMeshDataReadOnly = function(nHistoryID,nPointMeshID) {
            args = {
                TestAPI: "WSM.APIGetPointMeshDataReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIPointMeshContainsPointReadOnly = function(nHistoryID,nPointMeshID,point) {
            args = {
                TestAPI: "WSM.APIPointMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIIsMeshManifoldReadOnly = function(nHistoryID,nMeshID) {
            args = {
                TestAPI: "WSM.APIIsMeshManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nPointMeshID,aPlanes,dTol) {
            args = {
                TestAPI: "WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    aPlanes: aPlanes,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        window.WSM.APIPushMirrorTransformationsOntoGeometry = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APIPushMirrorTransformationsOntoGeometry",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.APICheckMassesCollideReadOnly = function(nHistoryID) {
            args = {
                TestAPI: "WSM.APICheckMassesCollideReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };
window.WSM.InferenceEngine = window.WSM.InferenceEngine || {};

        window.WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
            args = {
                TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.Reset = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.Reset"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.Reset = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.Reset"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
            args = {
                TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.InputPointsAreEqual = function(inputPoint1,inputPoint2) {
            args = {
                TestAPI: "WSM.InferenceEngine.InputPointsAreEqual",
inputPoint1: inputPoint1,
        inputPoint2: inputPoint2
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.DisableHoveredInferences = function(disable) {
            args = {
                TestAPI: "WSM.InferenceEngine.DisableHoveredInferences",
disable: disable
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.PushHoveredLineInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.PushHoveredLineInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.PushHoveredPointInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.PushHoveredPointInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.AddPointInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.AddPointInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.AddLineInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.AddLineInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.AddPlaneInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.AddPlaneInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.LockInference = function(inference) {
            args = {
                TestAPI: "WSM.InferenceEngine.LockInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.ReleaseLockedInference = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.ReleaseLockedInference"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.HaveLockedInference = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.HaveLockedInference"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.SetVertexSnappingOnSplines = function(snap) {
            args = {
                TestAPI: "WSM.InferenceEngine.SetVertexSnappingOnSplines",
snap: snap
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.SetUseExternalInputPointFinder = function(use) {
            args = {
                TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinder",
use: use
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting = function(use) {
            args = {
                TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting",
use: use
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.IgnoreObject = function(nObjectID,andChildren) {
            args = {
                TestAPI: "WSM.InferenceEngine.IgnoreObject",
nObjectID: nObjectID,
        andChildren: andChildren
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.ClearIgnoreObjects = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.ClearIgnoreObjects"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.UseAsObscuringObject = function(nObjectID,andChildren) {
            args = {
                TestAPI: "WSM.InferenceEngine.UseAsObscuringObject",
nObjectID: nObjectID,
        andChildren: andChildren
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.LineInference = function(line3d,lineInferenceType) {
            args = {
                TestAPI: "WSM.InferenceEngine.LineInference",
line3d: line3d,
        lineInferenceType: lineInferenceType
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.PointInference = function(point3d) {
            args = {
                TestAPI: "WSM.InferenceEngine.PointInference",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.InputPoint = function(point3d) {
            args = {
                TestAPI: "WSM.InferenceEngine.InputPoint",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.AddLineInferencesForObject = function(groupInstancePath) {
            args = {
                TestAPI: "WSM.InferenceEngine.AddLineInferencesForObject",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.SetHoveredInferencesEnabled = function(enabled) {
            args = {
                TestAPI: "WSM.InferenceEngine.SetHoveredInferencesEnabled",
enabled: enabled
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.ClearCustomPointInferences = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomPointInferences"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.ClearCustomLineInferences = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomLineInferences"
            };
            return callAsyncAPI(args);
        };

        window.WSM.InferenceEngine.ClearCustomPlaneInference = function() {
            args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomPlaneInference"
            };
            return callAsyncAPI(args);
        };
window.WSM.Geom = window.WSM.Geom || {};

        window.WSM.Geom.Interval3d = function(minPoint3d,maxPoint3d) {
            args = {
                TestAPI: "WSM.Geom.Interval3d",
minPoint3d: minPoint3d,
        maxPoint3d: maxPoint3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Interval3dAreEqual = function(interval3d1,interval3d2) {
            args = {
                TestAPI: "WSM.Geom.Interval3dAreEqual",
interval3d1: interval3d1,
        interval3d2: interval3d2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.MakeRotationTransform = function(axis,angle) {
            args = {
                TestAPI: "WSM.Geom.MakeRotationTransform",
axis: axis,
        angle: angle
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.MakeScalingTransform = function(scaleCenter,factorVec) {
            args = {
                TestAPI: "WSM.Geom.MakeScalingTransform",
scaleCenter: scaleCenter,
        factorVec: factorVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.MakeRigidTransform = function(origin,xDir,yDir,zDir) {
            args = {
                TestAPI: "WSM.Geom.MakeRigidTransform",
origin: origin,
        xDir: xDir,
        yDir: yDir,
        zDir: zDir
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.TranslateTransform = function(trans,moveVec) {
            args = {
                TestAPI: "WSM.Geom.TranslateTransform",
trans: trans,
        moveVec: moveVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Transf3d = function() {
            args = {
                TestAPI: "WSM.Geom.Transf3d"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.InvertTransform = function(trans) {
            args = {
                TestAPI: "WSM.Geom.InvertTransform",
trans: trans
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsIdentityTransform = function(trans) {
            args = {
                TestAPI: "WSM.Geom.IsIdentityTransform",
trans: trans
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Transf3dAreEqual = function(trans1,trans2) {
            args = {
                TestAPI: "WSM.Geom.Transf3dAreEqual",
trans1: trans1,
        trans2: trans2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Point2d = function(x,y) {
            args = {
                TestAPI: "WSM.Geom.Point2d",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Point2dAreEqual = function(pt1,pt2) {
            args = {
                TestAPI: "WSM.Geom.Point2dAreEqual",
pt1: pt1,
        pt2: pt2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Point3d = function(x,y,z) {
            args = {
                TestAPI: "WSM.Geom.Point3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Point3dAreEqual = function(pt1,pt2) {
            args = {
                TestAPI: "WSM.Geom.Point3dAreEqual",
pt1: pt1,
        pt2: pt2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Line3d = function(point3d) {
            args = {
                TestAPI: "WSM.Geom.Line3d",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Line3dAreEqual = function(line1,line2) {
            args = {
                TestAPI: "WSM.Geom.Line3dAreEqual",
line1: line1,
        line2: line2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Vector3d = function(x,y,z) {
            args = {
                TestAPI: "WSM.Geom.Vector3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Vector3dAreEqual = function(v1,v2) {
            args = {
                TestAPI: "WSM.Geom.Vector3dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.UnitVector3d = function(x,y,z) {
            args = {
                TestAPI: "WSM.Geom.UnitVector3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.UnitVector3dAreEqual = function(v1,v2) {
            args = {
                TestAPI: "WSM.Geom.UnitVector3dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Plane = function(pt,normal) {
            args = {
                TestAPI: "WSM.Geom.Plane",
pt: pt,
        normal: normal
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.PlaneAreEqual = function(plane1,plane2) {
            args = {
                TestAPI: "WSM.Geom.PlaneAreEqual",
plane1: plane1,
        plane2: plane2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Vector2d = function(x,y) {
            args = {
                TestAPI: "WSM.Geom.Vector2d",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.Vector2dAreEqual = function(v1,v2) {
            args = {
                TestAPI: "WSM.Geom.Vector2dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsPoint3d = function() {
            args = {
                TestAPI: "WSM.Geom.IsPoint3d"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsVector3d = function() {
            args = {
                TestAPI: "WSM.Geom.IsVector3d"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsTransf3d = function() {
            args = {
                TestAPI: "WSM.Geom.IsTransf3d"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsLine3d = function() {
            args = {
                TestAPI: "WSM.Geom.IsLine3d"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Geom.IsPlane = function() {
            args = {
                TestAPI: "WSM.Geom.IsPlane"
            };
            return callAsyncAPI(args);
        };
window.WSM.Utils = window.WSM.Utils || {};

        window.WSM.Utils.AngleFullCircleInRadians = function(normal,vecA,vecB,returnPositive) {
            args = {
                TestAPI: "WSM.Utils.AngleFullCircleInRadians",
normal: normal,
        vecA: vecA,
        vecB: vecB,
        returnPositive: returnPositive
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.AppendSelectionToGroupInstancePathArray = function(aInput,aOutput) {
            args = {
                TestAPI: "WSM.Utils.AppendSelectionToGroupInstancePathArray",
aInput: aInput,
        aOutput: aOutput
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.AppendToGroupInstancePathArray = function(nHistoryID,aInput,aOutput) {
            args = {
                TestAPI: "WSM.Utils.AppendToGroupInstancePathArray",
nHistoryID: nHistoryID,
        aInput: aInput,
        aOutput: aOutput
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ComputeFaceCentroid = function(historyID,faceID) {
            args = {
                TestAPI: "WSM.Utils.ComputeFaceCentroid",
historyID: historyID,
        faceID: faceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ComputeFaceNormal = function(historyID,faceID) {
            args = {
                TestAPI: "WSM.Utils.ComputeFaceNormal",
historyID: historyID,
        faceID: faceID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ConvertToFaces = function(aPaths) {
            args = {
                TestAPI: "WSM.Utils.ConvertToFaces",
aPaths: aPaths
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ConvertToTopLevel = function(nHistoryID,aObjectIDs,bAllowInstances,bAllowOwnedFaces) {
            args = {
                TestAPI: "WSM.Utils.ConvertToTopLevel",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ConvertToTopLevelPaths = function(aPaths,bAllowInstances,bAllowOwnedFaces) {
            args = {
                TestAPI: "WSM.Utils.ConvertToTopLevelPaths",
aPaths: aPaths,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.DeleteObjectsIncludeSmoothAttachments = function(nHistoryID,toDelete) {
            args = {
                TestAPI: "WSM.Utils.DeleteObjectsIncludeSmoothAttachments",
nHistoryID: nHistoryID,
        toDelete: toDelete
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ExpandSelection = function(path,selectionlevel,filter,bCanExpandInstances) {
            args = {
                TestAPI: "WSM.Utils.ExpandSelection",
path: path,
        selectionlevel: selectionlevel,
        filter: filter,
        bCanExpandInstances: bCanExpandInstances
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetAllNonOwnedGeometricObjects = function(nHistoryID) {
            args = {
                TestAPI: "WSM.Utils.GetAllNonOwnedGeometricObjects",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetAxisAlignedBoundingBox = function(aObjectIDs,CS) {
            args = {
                TestAPI: "WSM.Utils.GetAxisAlignedBoundingBox",
aObjectIDs: aObjectIDs,
        CS: CS
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetCoedgePoints = function(nHistoryID,coedgeID) {
            args = {
                TestAPI: "WSM.Utils.GetCoedgePoints",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetEdgeCurveType = function(nHistoryID,edgeId) {
            args = {
                TestAPI: "WSM.Utils.GetEdgeCurveType",
nHistoryID: nHistoryID,
        edgeId: edgeId
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetEdgeIDFromCoedge = function(nHistoryID,coedgeID) {
            args = {
                TestAPI: "WSM.Utils.GetEdgeIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetEdgeLine = function(nHistoryID,edge) {
            args = {
                TestAPI: "WSM.Utils.GetEdgeLine",
nHistoryID: nHistoryID,
        edge: edge
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetFaceIDFromCoedge = function(nHistoryID,coedgeID) {
            args = {
                TestAPI: "WSM.Utils.GetFaceIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetFacePoints = function(facePath) {
            args = {
                TestAPI: "WSM.Utils.GetFacePoints",
facePath: facePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects = function(instance) {
            args = {
                TestAPI: "WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects",
instance: instance
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetMemoryInfo = function(nHistoryID) {
            args = {
                TestAPI: "WSM.Utils.GetMemoryInfo",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetVertexCurveAttributes = function(historyID,vertexID) {
            args = {
                TestAPI: "WSM.Utils.GetVertexCurveAttributes",
historyID: historyID,
        vertexID: vertexID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.HasSmoothEdge = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.HasSmoothEdge",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsBackFace = function(path,cameraPos,cameraDir,perspectiveView) {
            args = {
                TestAPI: "WSM.Utils.IsBackFace",
path: path,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsLayerHidden = function(nHistoryID,id) {
            args = {
                TestAPI: "WSM.Utils.IsLayerHidden",
nHistoryID: nHistoryID,
        id: id
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsObjectHidden = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.IsObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsObjectHiddenByPath = function(path) {
            args = {
                TestAPI: "WSM.Utils.IsObjectHiddenByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsLayerNotPickable = function(nHistoryID,id) {
            args = {
                TestAPI: "WSM.Utils.IsLayerNotPickable",
nHistoryID: nHistoryID,
        id: id
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsObjectNotPickable = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.IsObjectNotPickable",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsObjectNotPickableByPath = function(path) {
            args = {
                TestAPI: "WSM.Utils.IsObjectNotPickableByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsObjectType = function(path,nObjectTypes) {
            args = {
                TestAPI: "WSM.Utils.IsObjectType",
path: path,
        nObjectTypes: nObjectTypes
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsOnCurveJunction = function(nHistoryID,nVertexID,bInferencing) {
            args = {
                TestAPI: "WSM.Utils.IsOnCurveJunction",
nHistoryID: nHistoryID,
        nVertexID: nVertexID,
        bInferencing: bInferencing
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsSelectAllConnected = function(nHistoryID,selectedObjectIDs) {
            args = {
                TestAPI: "WSM.Utils.IsSelectAllConnected",
nHistoryID: nHistoryID,
        selectedObjectIDs: selectedObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsSilhouetteEdge = function(nHistoryID,edgeId,cameraPos,cameraDir,perspectiveView) {
            args = {
                TestAPI: "WSM.Utils.IsSilhouetteEdge",
nHistoryID: nHistoryID,
        edgeId: edgeId,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsSmooth = function(path) {
            args = {
                TestAPI: "WSM.Utils.IsSmooth",
path: path
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsTopLevelObjectHidden = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.IsTopLevelObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsTopLevelObjectHiddenByPath = function(path) {
            args = {
                TestAPI: "WSM.Utils.IsTopLevelObjectHiddenByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsVertexEditable = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.IsVertexEditable",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.IsVertexOnCurve = function(historyID,vertexID) {
            args = {
                TestAPI: "WSM.Utils.IsVertexOnCurve",
historyID: historyID,
        vertexID: vertexID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.MakePickRayFromWindow = function(firstWindowSelectPoint,secondWindowSelectPoint) {
            args = {
                TestAPI: "WSM.Utils.MakePickRayFromWindow",
firstWindowSelectPoint: firstWindowSelectPoint,
        secondWindowSelectPoint: secondWindowSelectPoint
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.MatchesSelectionType = function(selectedObjectIDs,aNewSelectedObjects,bSelectAll) {
            args = {
                TestAPI: "WSM.Utils.MatchesSelectionType",
selectedObjectIDs: selectedObjectIDs,
        aNewSelectedObjects: aNewSelectedObjects,
        bSelectAll: bSelectAll
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectCanBeHidden = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.ObjectCanBeHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickBody = function(pickray) {
            args = {
                TestAPI: "WSM.Utils.PickBody",
pickray: pickray
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickGeometry = function(pickray,pickFilter,bAllowAdjustRayRadius) {
            args = {
                TestAPI: "WSM.Utils.PickGeometry",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickObjectsWithFilter = function(pickray,filter,currentSelectionLevel) {
            args = {
                TestAPI: "WSM.Utils.PickObjectsWithFilter",
pickray: pickray,
        filter: filter,
        currentSelectionLevel: currentSelectionLevel
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickObjectsWithRay = function(pickray,pickFilter,bAllowAdjustRayRadius,bIgnoreInContext) {
            args = {
                TestAPI: "WSM.Utils.PickObjectsWithRay",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius,
        bIgnoreInContext: bIgnoreInContext
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.RayFireWithObjects = function(objectIds,ray) {
            args = {
                TestAPI: "WSM.Utils.RayFireWithObjects",
objectIds: objectIds,
        ray: ray
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.RemoveHiddenObjects = function(nHistoryID,aObjectIDs,aObjectsInGroupsVec) {
            args = {
                TestAPI: "WSM.Utils.RemoveHiddenObjects",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        aObjectsInGroupsVec: aObjectsInGroupsVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.SelectionFromGroupInstancePathArray = function(aInput) {
            args = {
                TestAPI: "WSM.Utils.SelectionFromGroupInstancePathArray",
aInput: aInput
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.SelectionToGroupInstancePath = function(nObjectID) {
            args = {
                TestAPI: "WSM.Utils.SelectionToGroupInstancePath",
nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.SelectionToGroupInstancePathArray = function(aInput) {
            args = {
                TestAPI: "WSM.Utils.SelectionToGroupInstancePathArray",
aInput: aInput
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.SetToOwnerBody = function(path) {
            args = {
                TestAPI: "WSM.Utils.SetToOwnerBody",
path: path
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.TestPickImages = function(nHistoryID,imageIds,pickRay) {
            args = {
                TestAPI: "WSM.Utils.TestPickImages",
nHistoryID: nHistoryID,
        imageIds: imageIds,
        pickRay: pickRay
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectIDsAreEqual = function(id1,id2) {
            args = {
                TestAPI: "WSM.Utils.ObjectIDsAreEqual",
id1: id1,
        id2: id2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GroupInstancePathsAreEqual = function(path1,path2) {
            args = {
                TestAPI: "WSM.Utils.GroupInstancePathsAreEqual",
path1: path1,
        path2: path2
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickRay = function(pickrayLine,planes,screenPickRayRadius,perspectiveScaleFactor,baseRadius,normalizedScreenPoint) {
            args = {
                TestAPI: "WSM.Utils.PickRay",
pickrayLine: pickrayLine,
        planes: planes,
        screenPickRayRadius: screenPickRayRadius,
        perspectiveScaleFactor: perspectiveScaleFactor,
        baseRadius: baseRadius,
        normalizedScreenPoint: normalizedScreenPoint
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickRayFromLine = function(pickrayLine) {
            args = {
                TestAPI: "WSM.Utils.PickRayFromLine",
pickrayLine: pickrayLine
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.PickRayFromNormalizedScreenPoint = function(ptX,ptY,yUp) {
            args = {
                TestAPI: "WSM.Utils.PickRayFromNormalizedScreenPoint",
ptX: ptX,
        ptY: ptY,
        yUp: yUp
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GroupInstancePathArray = function(objectIDs,History,groupInstancePath) {
            args = {
                TestAPI: "WSM.Utils.GroupInstancePathArray",
objectIDs: objectIDs,
        History: History,
        groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetGroupInstancePathFinalObjectHistoryID = function(ObjectIDs) {
            args = {
                TestAPI: "WSM.Utils.GetGroupInstancePathFinalObjectHistoryID",
ObjectIDs: ObjectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectHistoryIDArray = function(objectIDs,History) {
            args = {
                TestAPI: "WSM.Utils.ObjectHistoryIDArray",
objectIDs: objectIDs,
        History: History
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectIDArray = function(objectIDs) {
            args = {
                TestAPI: "WSM.Utils.ObjectIDArray",
objectIDs: objectIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.SetOrCreateStringAttributeForObject = function(nHistoryID,nObjectID,key,value,nCB,bIsSharedOnSplit) {
            args = {
                TestAPI: "WSM.Utils.SetOrCreateStringAttributeForObject",
nHistoryID: nHistoryID,
        nObjectID: nObjectID,
        key: key,
        value: value,
        nCB: nCB,
        bIsSharedOnSplit: bIsSharedOnSplit
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetStringAttributeForObject = function(nHistoryID,nObjectID,key) {
            args = {
                TestAPI: "WSM.Utils.GetStringAttributeForObject",
nHistoryID: nHistoryID,
        nObjectID: nObjectID,
        key: key
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectTypeFilter = function() {
            args = {
                TestAPI: "WSM.Utils.ObjectTypeFilter"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.ObjectHistoryID = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "WSM.Utils.ObjectHistoryID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };
window.WSM.AppHelper = window.WSM.AppHelper || {};

        window.WSM.AppHelper.Initialize = function() {
            args = {
                TestAPI: "WSM.AppHelper.Initialize"
            };
            return callAsyncAPI(args);
        };

        window.WSM.AppHelper.GetHistoryID = function() {
            args = {
                TestAPI: "WSM.AppHelper.GetHistoryID"
            };
            return callAsyncAPI(args);
        };

        window.WSM.AppHelper.GetDisplayHistoryID = function() {
            args = {
                TestAPI: "WSM.AppHelper.GetDisplayHistoryID"
            };
            return callAsyncAPI(args);
        };

        window.WSM.AppHelper.NewModel = function() {
            args = {
                TestAPI: "WSM.AppHelper.NewModel"
            };
            return callAsyncAPI(args);
        };
window.WSM.Atf = window.WSM.Atf || {};

        window.WSM.Atf.APITestAtfLoopBack = function(nFromHistoryID,nToHistoryID,defaultColorVec,aNonOwnedObjectIDs,aExcludedObjects,bWantPolygonMeshFromBrep,aLayerDisplayedNegateVec) {
            args = {
                TestAPI: "WSM.Atf.APITestAtfLoopBack",
nFromHistoryID: nFromHistoryID,
        nToHistoryID: nToHistoryID,
        defaultColorVec: defaultColorVec,
        aNonOwnedObjectIDs: aNonOwnedObjectIDs,
        aExcludedObjects: aExcludedObjects,
        bWantPolygonMeshFromBrep: bWantPolygonMeshFromBrep,
        aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        window.WSM.Atf.APILoadWithATF = function(nHistoryID,sFilePath,eFileType,nOptions,nUnits) {
            args = {
                TestAPI: "WSM.Atf.APILoadWithATF",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        nOptions: nOptions,
        nUnits: nUnits
            };
            return callAsyncAPI(args);
        };

        window.WSM.Atf.APIWriteWithATF = function(nHistoryID,sFilePath,eFileType,aNonOwnedObjectIDs,aExcludedObjects,defaultColorVec,cameraVec,aLayerDisplayedNegateVec) {
            args = {
                TestAPI: "WSM.Atf.APIWriteWithATF",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        aNonOwnedObjectIDs: aNonOwnedObjectIDs,
        aExcludedObjects: aExcludedObjects,
        defaultColorVec: defaultColorVec,
        cameraVec: cameraVec,
        aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };
window.WSM.RenderHelper = window.WSM.RenderHelper || {};

        window.WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly = function(historyID,objectID) {
            args = {
                TestAPI: "WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly",
historyID: historyID,
        objectID: objectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.RenderHelper.APIGetFacesRenderDataReadOnly = function(historyID,faceIDs) {
            args = {
                TestAPI: "WSM.RenderHelper.APIGetFacesRenderDataReadOnly",
historyID: historyID,
        faceIDs: faceIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.RenderHelper.APIGetEdgesRenderDataReadOnly = function(historyID,edgeIDs,includeSmooth) {
            args = {
                TestAPI: "WSM.RenderHelper.APIGetEdgesRenderDataReadOnly",
historyID: historyID,
        edgeIDs: edgeIDs,
        includeSmooth: includeSmooth
            };
            return callAsyncAPI(args);
        };
window.WSM.Sat = window.WSM.Sat || {};

        window.WSM.Sat.APILoadSatFile = function(nHistoryID,sFilePath) {
            args = {
                TestAPI: "WSM.Sat.APILoadSatFile",
nHistoryID: nHistoryID,
        sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };
window.WSM.GroupInstancePath = window.WSM.GroupInstancePath || {};

        window.WSM.GroupInstancePath.IsValid = function(groupInstancePath) {
            args = {
                TestAPI: "WSM.GroupInstancePath.IsValid",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath.GetFinalObjectHistoryID = function(groupInstancePath) {
            args = {
                TestAPI: "WSM.GroupInstancePath.GetFinalObjectHistoryID",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath.GetTopObjectHistoryID = function(groupInstancePath) {
            args = {
                TestAPI: "WSM.GroupInstancePath.GetTopObjectHistoryID",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath.AppendObjectHistoryID = function(groupInstancePath,nObjectID) {
            args = {
                TestAPI: "WSM.GroupInstancePath.AppendObjectHistoryID",
groupInstancePath: groupInstancePath,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath.GetObjectTransform = function(groupInstancePath) {
            args = {
                TestAPI: "WSM.GroupInstancePath.GetObjectTransform",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        window.WSM.GroupInstancePath.IsPrefixOf = function(path1,path2) {
            args = {
                TestAPI: "WSM.GroupInstancePath.IsPrefixOf",
path1: path1,
        path2: path2
            };
            return callAsyncAPI(args);
        };
window.WSM.Test = window.WSM.Test || {};

        window.WSM.Test.AnyDictionaryRoundTrip = function(dict) {
            args = {
                TestAPI: "WSM.Test.AnyDictionaryRoundTrip",
dict: dict
            };
            return callAsyncAPI(args);
        };
window.WSM.Skup = window.WSM.Skup || {};

        window.WSM.Skup.APIReadSketchupFile = function(nHistoryID,filename) {
            args = {
                TestAPI: "WSM.Skup.APIReadSketchupFile",
nHistoryID: nHistoryID,
        filename: filename
            };
            return callAsyncAPI(args);
        };
window.WSM.Tools = window.WSM.Tools || {};

        window.WSM.Tools.CompareOutputFiles = function(sGoodFile,sResultFile) {
            args = {
                TestAPI: "WSM.Tools.CompareOutputFiles",
sGoodFile: sGoodFile,
        sResultFile: sResultFile
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIReset = function() {
            args = {
                TestAPI: "WSM.Tools.APIReset"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APICreateTool = function(nType,toolArgs) {
            args = {
                TestAPI: "WSM.Tools.APICreateTool",
nType: nType,
        toolArgs: toolArgs
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIDestroyTool = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIDestroyTool",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetAllLiveToolsReadOnly = function() {
            args = {
                TestAPI: "WSM.Tools.APIGetAllLiveToolsReadOnly"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetToolTypeReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIGetToolTypeReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetResultDescriptionReadOnly = function(nResult) {
            args = {
                TestAPI: "WSM.Tools.APIGetResultDescriptionReadOnly",
nResult: nResult
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetToolStateReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIGetToolStateReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIResetTool = function(nToolID,nReason) {
            args = {
                TestAPI: "WSM.Tools.APIResetTool",
nToolID: nToolID,
        nReason: nReason
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIResetToolModelChange = function(nToolID,data) {
            args = {
                TestAPI: "WSM.Tools.APIResetToolModelChange",
nToolID: nToolID,
        data: data
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIUpdateCurrentPoint = function(nToolID,pickray) {
            args = {
                TestAPI: "WSM.Tools.APIUpdateCurrentPoint",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIUpdatePointPick = function(nToolID,nPointIndex,pickray,bFinal) {
            args = {
                TestAPI: "WSM.Tools.APIUpdatePointPick",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pickray: pickray,
        bFinal: bFinal
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIUpdatePoint = function(nToolID,nPointIndex,pInputPoint,bFinal) {
            args = {
                TestAPI: "WSM.Tools.APIUpdatePoint",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pInputPoint: pInputPoint,
        bFinal: bFinal
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APILockInference = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APILockInference",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIUnlockInference = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIUnlockInference",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIPickAndPlacePoint = function(nToolID,pickray) {
            args = {
                TestAPI: "WSM.Tools.APIPickAndPlacePoint",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIPlacePoint = function(nToolID,pInputPoint) {
            args = {
                TestAPI: "WSM.Tools.APIPlacePoint",
nToolID: nToolID,
        pInputPoint: pInputPoint
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIFinalize = function(nToolID,pickray) {
            args = {
                TestAPI: "WSM.Tools.APIFinalize",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetCurrentPointReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIGetCurrentPointReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIGetPointReadOnly = function(nToolID,nPointIndex) {
            args = {
                TestAPI: "WSM.Tools.APIGetPointReadOnly",
nToolID: nToolID,
        nPointIndex: nPointIndex
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APISetOperationMode = function(nToolID,nMode) {
            args = {
                TestAPI: "WSM.Tools.APISetOperationMode",
nToolID: nToolID,
        nMode: nMode
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIResetCurrentPoint = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIResetCurrentPoint",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APISetDefaultPoints = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APISetDefaultPoints",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APISetEditingMode = function(nToolID,bEditingMode) {
            args = {
                TestAPI: "WSM.Tools.APISetEditingMode",
nToolID: nToolID,
        bEditingMode: bEditingMode
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APICreateGeometry = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APICreateGeometry",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModResetModel = function(nToolID,bDeleteRedo) {
            args = {
                TestAPI: "WSM.Tools.APIModResetModel",
nToolID: nToolID,
        bDeleteRedo: bDeleteRedo
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModSetObjectsToModify = function(nToolID,aObjectsToModify) {
            args = {
                TestAPI: "WSM.Tools.APIModSetObjectsToModify",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModSetObjectsToModifyGroupInstancePath = function(nToolID,aObjectsToModify) {
            args = {
                TestAPI: "WSM.Tools.APIModSetObjectsToModifyGroupInstancePath",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModIsInteractiveReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIModIsInteractiveReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModFiltersInitialSelectionReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIModFiltersInitialSelectionReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModDoModification = function(nToolID,bEndOfContinuous) {
            args = {
                TestAPI: "WSM.Tools.APIModDoModification",
nToolID: nToolID,
        bEndOfContinuous: bEndOfContinuous
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APIModGetFinishMessageReadOnly = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APIModGetFinishMessageReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        window.WSM.Tools.APICameraChanged = function(nToolID) {
            args = {
                TestAPI: "WSM.Tools.APICameraChanged",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };
window.FormIt = window.FormIt || {};

        window.FormIt.GetSnap = function() {
            args = {
                TestAPI: "FormIt.GetSnap"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetSnap = function(bSnap) {
            args = {
                TestAPI: "FormIt.SetSnap",
bSnap: bSnap
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetTouchEnabled = function() {
            args = {
                TestAPI: "FormIt.GetTouchEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetTouchEnabled = function(bTouchEnabled) {
            args = {
                TestAPI: "FormIt.SetTouchEnabled",
bTouchEnabled: bTouchEnabled
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImportFile = function(sFileName,bGroupImport,nHistoryID) {
            args = {
                TestAPI: "FormIt.ImportFile",
sFileName: sFileName,
    bGroupImport: bGroupImport,
    nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.OpenFile = function(sFileName) {
            args = {
                TestAPI: "FormIt.OpenFile",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.LoadPreviewImage = function(sFileName) {
            args = {
                TestAPI: "FormIt.LoadPreviewImage",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.OpenFile = function(sFileName) {
            args = {
                TestAPI: "FormIt.OpenFile",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SaveFile = function(sFileName,saveOptions,previewImage,forSave) {
            args = {
                TestAPI: "FormIt.SaveFile",
sFileName: sFileName,
    saveOptions: saveOptions,
    previewImage: previewImage,
    forSave: forSave
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SaveFileForEnergyAnalysis = function(sFileName) {
            args = {
                TestAPI: "FormIt.SaveFileForEnergyAnalysis",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetGeoLocationData = function(geodata) {
            args = {
                TestAPI: "FormIt.SetGeoLocationData",
geodata: geodata
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetRenderData = function(renderdata) {
            args = {
                TestAPI: "FormIt.SetRenderData",
renderdata: renderdata
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetTimeNow = function() {
            args = {
                TestAPI: "FormIt.GetTimeNow"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.FitToModel = function(aIncludeImage,withTransition) {
            args = {
                TestAPI: "FormIt.FitToModel",
aIncludeImage: aIncludeImage,
    withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.FitToSelection = function(withTransition) {
            args = {
                TestAPI: "FormIt.FitToSelection",
withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.HomeView3d = function(withTransition) {
            args = {
                TestAPI: "FormIt.HomeView3d",
withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.TopView = function() {
            args = {
                TestAPI: "FormIt.TopView"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetViewDirection = function(type) {
            args = {
                TestAPI: "FormIt.SetViewDirection",
type: type
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetViewDirection = function() {
            args = {
                TestAPI: "FormIt.GetViewDirection"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.NewFile = function(forced) {
            args = {
                TestAPI: "FormIt.NewFile",
forced: forced
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Version = function() {
            args = {
                TestAPI: "FormIt.Version"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetCurveAccuracyOrCountDefault = function(accuracyORcount) {
            args = {
                TestAPI: "FormIt.SetCurveAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetCurveAccuracyOrCountDefault = function() {
            args = {
                TestAPI: "FormIt.GetCurveAccuracyOrCountDefault"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetSurfaceAccuracyOrCountDefault = function(accuracyORcount) {
            args = {
                TestAPI: "FormIt.SetSurfaceAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetSurfaceAccuracyOrCountDefault = function() {
            args = {
                TestAPI: "FormIt.GetSurfaceAccuracyOrCountDefault"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetUnitTypeDefault = function() {
            args = {
                TestAPI: "FormIt.GetUnitTypeDefault"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetUnitTypeDefault = function(unitType) {
            args = {
                TestAPI: "FormIt.SetUnitTypeDefault",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.IsWSRAvailable = function() {
            args = {
                TestAPI: "FormIt.IsWSRAvailable"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SuspendMessaging = function(bSuppress,nTopLevelHistory) {
            args = {
                TestAPI: "FormIt.SuspendMessaging",
bSuppress: bSuppress,
    nTopLevelHistory: nTopLevelHistory
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ResumeMessaging = function() {
            args = {
                TestAPI: "FormIt.ResumeMessaging"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ChangeTargetBuildableArea = function(value) {
            args = {
                TestAPI: "FormIt.ChangeTargetBuildableArea",
value: value
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetBuildingType = function() {
            args = {
                TestAPI: "FormIt.GetBuildingType"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetBuildingType = function(value) {
            args = {
                TestAPI: "FormIt.SetBuildingType",
value: value
            };
            return callAsyncAPI(args);
        };

        window.FormIt.WriteAppDefaultContentToFile = function(id,path) {
            args = {
                TestAPI: "FormIt.WriteAppDefaultContentToFile",
id: id,
    path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.DeleteImage = function(nHistoryID,imageID) {
            args = {
                TestAPI: "FormIt.DeleteImage",
nHistoryID: nHistoryID,
    imageID: imageID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.HandleHUDTextInput = function(dimensionID,inputText) {
            args = {
                TestAPI: "FormIt.HandleHUDTextInput",
dimensionID: dimensionID,
    inputText: inputText
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetAppDefaultContentsWithoutAXM = function() {
            args = {
                TestAPI: "FormIt.GetAppDefaultContentsWithoutAXM"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetKeyboardShortcutsEnabled = function(enabled) {
            args = {
                TestAPI: "FormIt.SetKeyboardShortcutsEnabled",
enabled: enabled
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetShowEditableDimensions = function() {
            args = {
                TestAPI: "FormIt.GetShowEditableDimensions"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SetShowEditableDimensions = function(show) {
            args = {
                TestAPI: "FormIt.SetShowEditableDimensions",
show: show
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetVersion = function() {
            args = {
                TestAPI: "FormIt.GetVersion"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImportToGroup = function(sFileType,sFilePath) {
            args = {
                TestAPI: "FormIt.ImportToGroup",
sFileType: sFileType,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        window.FormIt.CallJS = function(funcName,paramsJSON) {
            args = {
                TestAPI: "FormIt.CallJS",
funcName: funcName,
    paramsJSON: paramsJSON
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GetContextMenuOptions = function() {
            args = {
                TestAPI: "FormIt.GetContextMenuOptions"
            };
            return callAsyncAPI(args);
        };
window.FormIt.Analysis = window.FormIt.Analysis || {};
window.FormIt.Analysis.Solar = window.FormIt.Analysis.Solar || {};

        window.FormIt.Analysis.Solar.EnterAnalysisMode = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.EnterAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.ToggleAnalysisMode = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.ToggleAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.ExitAnalysisMode = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.ExitAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.ToggleFaceSelections = function(aFacePaths) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.ToggleFaceSelections",
aFacePaths: aFacePaths
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.ResetAnalysis = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.ResetAnalysis"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.SetMethod = function(bMonthlyPeak) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.SetMethod",
bMonthlyPeak: bMonthlyPeak
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.SetPeakMonth = function(month) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.SetPeakMonth",
month: month
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetPeakMonth = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetPeakMonth"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetMethod = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetMethod"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetLimits = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetLimits"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetUnitString = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetUnitString"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.IsInSolarAnalysisMode = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.IsInSolarAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.IsNewAnalysisEnabled = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.IsNewAnalysisEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.IsAnalysisInProgress = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.IsAnalysisInProgress"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.CanAnalyze = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.CanAnalyze"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetWeatherDataStatus = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetWeatherDataStatus"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.SetWeatherDataStatus = function(status) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.SetWeatherDataStatus",
status: status
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetNumTooltipsToShow = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetNumTooltipsToShow"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.SetNumTooltipsToShow = function(numToolTips) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.SetNumTooltipsToShow",
numToolTips: numToolTips
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.Analyze = function(bNeedInterrupt,dInterruptTime,nPreviousStep) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.Analyze",
bNeedInterrupt: bNeedInterrupt,
            dInterruptTime: dInterruptTime,
            nPreviousStep: nPreviousStep
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.CancelAnalysis = function() {
            args = {
                TestAPI: "FormIt.Analysis.Solar.CancelAnalysis"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Analysis.Solar.GetValueFromFaceAtPoint = function(face,pt) {
            args = {
                TestAPI: "FormIt.Analysis.Solar.GetValueFromFaceAtPoint",
face: face,
            pt: pt
            };
            return callAsyncAPI(args);
        };
window.FormIt.AutoSave = window.FormIt.AutoSave || {};

        window.FormIt.AutoSave.Enable = function() {
            args = {
                TestAPI: "FormIt.AutoSave.Enable"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.Disable = function() {
            args = {
                TestAPI: "FormIt.AutoSave.Disable"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.IsEnabled = function() {
            args = {
                TestAPI: "FormIt.AutoSave.IsEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.SetConfig = function(config) {
            args = {
                TestAPI: "FormIt.AutoSave.SetConfig",
config: config
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.SetConfigFromPath = function(path) {
            args = {
                TestAPI: "FormIt.AutoSave.SetConfigFromPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.GetConfig = function() {
            args = {
                TestAPI: "FormIt.AutoSave.GetConfig"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.GetDefaultConfig = function() {
            args = {
                TestAPI: "FormIt.AutoSave.GetDefaultConfig"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.StartSignalThread = function() {
            args = {
                TestAPI: "FormIt.AutoSave.StartSignalThread"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.StopSignalThread = function() {
            args = {
                TestAPI: "FormIt.AutoSave.StopSignalThread"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.Save = function(force) {
            args = {
                TestAPI: "FormIt.AutoSave.Save",
force: force
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.GetExistingBackupFile = function(path) {
            args = {
                TestAPI: "FormIt.AutoSave.GetExistingBackupFile",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.Cleanup = function(force) {
            args = {
                TestAPI: "FormIt.AutoSave.Cleanup",
force: force
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.AddProtectedFile = function(path) {
            args = {
                TestAPI: "FormIt.AutoSave.AddProtectedFile",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.ClearProtectedFiles = function() {
            args = {
                TestAPI: "FormIt.AutoSave.ClearProtectedFiles"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.AutoSave.IsFileProtected = function(path) {
            args = {
                TestAPI: "FormIt.AutoSave.IsFileProtected",
path: path
            };
            return callAsyncAPI(args);
        };
window.FormIt.Cameras = window.FormIt.Cameras || {};

        window.FormIt.Cameras.GetCameraData = function() {
            args = {
                TestAPI: "FormIt.Cameras.GetCameraData"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.GetCameraWorldForward = function() {
            args = {
                TestAPI: "FormIt.Cameras.GetCameraWorldForward"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.GetCameraWorldUp = function() {
            args = {
                TestAPI: "FormIt.Cameras.GetCameraWorldUp"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.SetCameraData = function(cameraData) {
            args = {
                TestAPI: "FormIt.Cameras.SetCameraData",
cameraData: cameraData
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.AlignWithFace = function(facePath,withTransition) {
            args = {
                TestAPI: "FormIt.Cameras.AlignWithFace",
facePath: facePath,
        withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.GetViewportSize = function() {
            args = {
                TestAPI: "FormIt.Cameras.GetViewportSize"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.SetViewportSize = function(x,y) {
            args = {
                TestAPI: "FormIt.Cameras.SetViewportSize",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.SetProjectionType = function(projectionType) {
            args = {
                TestAPI: "FormIt.Cameras.SetProjectionType",
projectionType: projectionType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Cameras.GetProjectionType = function() {
            args = {
                TestAPI: "FormIt.Cameras.GetProjectionType"
            };
            return callAsyncAPI(args);
        };
window.FormIt.Clipboard = window.FormIt.Clipboard || {};

        window.FormIt.Clipboard.GetJSONStringForClipboard = function() {
            args = {
                TestAPI: "FormIt.Clipboard.GetJSONStringForClipboard"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Clipboard.SetJSONStringFromClipboard = function(str) {
            args = {
                TestAPI: "FormIt.Clipboard.SetJSONStringFromClipboard",
str: str
            };
            return callAsyncAPI(args);
        };
window.FormIt.Collaboration = window.FormIt.Collaboration || {};

        window.FormIt.Collaboration.Connect = function(sSessionLink) {
            args = {
                TestAPI: "FormIt.Collaboration.Connect",
sSessionLink: sSessionLink
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.IsConnected = function() {
            args = {
                TestAPI: "FormIt.Collaboration.IsConnected"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.Disconnect = function() {
            args = {
                TestAPI: "FormIt.Collaboration.Disconnect"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.GetSessionId = function() {
            args = {
                TestAPI: "FormIt.Collaboration.GetSessionId"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.IsSessionOwner = function() {
            args = {
                TestAPI: "FormIt.Collaboration.IsSessionOwner"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.IsFollowingCamera = function() {
            args = {
                TestAPI: "FormIt.Collaboration.IsFollowingCamera"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.FollowCamera = function(sUserId) {
            args = {
                TestAPI: "FormIt.Collaboration.FollowCamera",
sUserId: sUserId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.GetFollowingCameraUserID = function() {
            args = {
                TestAPI: "FormIt.Collaboration.GetFollowingCameraUserID"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.UnFollowCamera = function() {
            args = {
                TestAPI: "FormIt.Collaboration.UnFollowCamera"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.ReceiveCreateRefHistory = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Collaboration.ReceiveCreateRefHistory",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.ReceiveHistory = function(nHistoryID,sBase64History,bIsOwner) {
            args = {
                TestAPI: "FormIt.Collaboration.ReceiveHistory",
nHistoryID: nHistoryID,
        sBase64History: sBase64History,
        bIsOwner: bIsOwner
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.ReceiveDelta = function(nHistoryID,nDeltaID,sBase64Delta) {
            args = {
                TestAPI: "FormIt.Collaboration.ReceiveDelta",
nHistoryID: nHistoryID,
        nDeltaID: nDeltaID,
        sBase64Delta: sBase64Delta
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.ReceiveUndoRedo = function(nHistoryID,nUndoValue,nBaseDeltaID,sBase64Delta) {
            args = {
                TestAPI: "FormIt.Collaboration.ReceiveUndoRedo",
nHistoryID: nHistoryID,
        nUndoValue: nUndoValue,
        nBaseDeltaID: nBaseDeltaID,
        sBase64Delta: sBase64Delta
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Collaboration.ReceiveDataAcceptance = function(nHistoryID,nDataType,nDeltaID,bAccepted) {
            args = {
                TestAPI: "FormIt.Collaboration.ReceiveDataAcceptance",
nHistoryID: nHistoryID,
        nDataType: nDataType,
        nDeltaID: nDeltaID,
        bAccepted: bAccepted
            };
            return callAsyncAPI(args);
        };
window.FormIt.Configuration = window.FormIt.Configuration || {};

        window.FormIt.Configuration.GetToolGroupUUIDs = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetToolGroupUUIDs"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetContextMenuToolUUIDs = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDs"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetContextMenuToolUUIDFromActionId = function(actionId) {
            args = {
                TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDFromActionId",
actionId: actionId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetContextMenuActionIdFromToolUUID = function(toolUUID) {
            args = {
                TestAPI: "FormIt.Configuration.GetContextMenuActionIdFromToolUUID",
toolUUID: toolUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetToolGroupInfo = function(toolGroupUUID) {
            args = {
                TestAPI: "FormIt.Configuration.GetToolGroupInfo",
toolGroupUUID: toolGroupUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetToolInfo = function(toolUUID) {
            args = {
                TestAPI: "FormIt.Configuration.GetToolInfo",
toolUUID: toolUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.IsPaletteConfigured = function(paletteUUID) {
            args = {
                TestAPI: "FormIt.Configuration.IsPaletteConfigured",
paletteUUID: paletteUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.IsProjectBarConfigured = function(projectBarUUID) {
            args = {
                TestAPI: "FormIt.Configuration.IsProjectBarConfigured",
projectBarUUID: projectBarUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.ConfigureFromJSON = function(configurationJSON) {
            args = {
                TestAPI: "FormIt.Configuration.ConfigureFromJSON",
configurationJSON: configurationJSON
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllPalettes = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetAllPalettes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllProjectBarItems = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetAllProjectBarItems"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllToolGroups = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetAllToolGroups"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllToolGroupTools = function(toolGroupUUID) {
            args = {
                TestAPI: "FormIt.Configuration.GetAllToolGroupTools",
toolGroupUUID: toolGroupUUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllContextMenuTools = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetAllContextMenuTools"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.GetAllImplicitTools = function() {
            args = {
                TestAPI: "FormIt.Configuration.GetAllImplicitTools"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Configuration.IsShortcutCommandConfigured = function(commandName) {
            args = {
                TestAPI: "FormIt.Configuration.IsShortcutCommandConfigured",
commandName: commandName
            };
            return callAsyncAPI(args);
        };
window.FormIt.Dynamo = window.FormIt.Dynamo || {};

        window.FormIt.Dynamo.HasFormItBakeToFormItNode = function(dynFileName) {
            args = {
                TestAPI: "FormIt.Dynamo.HasFormItBakeToFormItNode",
dynFileName: dynFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.HasFormItSelectionNodes = function(dynFileName) {
            args = {
                TestAPI: "FormIt.Dynamo.HasFormItSelectionNodes",
dynFileName: dynFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.IsDynamoHistory = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetDynamoHistoryInPath = function(path) {
            args = {
                TestAPI: "FormIt.Dynamo.GetDynamoHistoryInPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetDynamoHistoryInCurrentContext = function() {
            args = {
                TestAPI: "FormIt.Dynamo.GetDynamoHistoryInCurrentContext"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetUuid = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.GetUuid",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetSelectedDynamoHistory = function() {
            args = {
                TestAPI: "FormIt.Dynamo.GetSelectedDynamoHistory"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.IsDynamoHistory = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetDynamoFile = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.GetDynamoFile",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.SetDynamoFile = function(historyId,script,GUID) {
            args = {
                TestAPI: "FormIt.Dynamo.SetDynamoFile",
historyId: historyId,
        script: script,
        GUID: GUID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetDynamoGroupName = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.GetDynamoGroupName",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.WriteDYNFile = function(historyId,path) {
            args = {
                TestAPI: "FormIt.Dynamo.WriteDYNFile",
historyId: historyId,
        path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetInputNodes = function(historyId,bIsSetAsInput) {
            args = {
                TestAPI: "FormIt.Dynamo.GetInputNodes",
historyId: historyId,
        bIsSetAsInput: bIsSetAsInput
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetInputNode = function(historyId,guid) {
            args = {
                TestAPI: "FormIt.Dynamo.GetInputNode",
historyId: historyId,
        guid: guid
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.GetDynamoFileBakeNodes = function(DYNFileName) {
            args = {
                TestAPI: "FormIt.Dynamo.GetDynamoFileBakeNodes",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.DYNRemoveBakeNodesSATFiles = function(DYNFileName) {
            args = {
                TestAPI: "FormIt.Dynamo.DYNRemoveBakeNodesSATFiles",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.DYNAnyBakeNodeSATFilesExist = function(DYNFileName) {
            args = {
                TestAPI: "FormIt.Dynamo.DYNAnyBakeNodeSATFilesExist",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.DYNGetSelectionNodes = function(DYNFileName,bIsInput) {
            args = {
                TestAPI: "FormIt.Dynamo.DYNGetSelectionNodes",
DYNFileName: DYNFileName,
        bIsInput: bIsInput
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.UpdateRenderer = function(historyId) {
            args = {
                TestAPI: "FormIt.Dynamo.UpdateRenderer",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Dynamo.StringToLength = function(lengthStr) {
            args = {
                TestAPI: "FormIt.Dynamo.StringToLength",
lengthStr: lengthStr
            };
            return callAsyncAPI(args);
        };
window.FormIt.Files = window.FormIt.Files || {};

        window.FormIt.Files.GetSupportedFilesList = function(action,type,dialogType) {
            args = {
                TestAPI: "FormIt.Files.GetSupportedFilesList",
action: action,
        type: type,
        dialogType: dialogType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Files.IsFileSupported = function(extension,action,type,dialogType) {
            args = {
                TestAPI: "FormIt.Files.IsFileSupported",
extension: extension,
        action: action,
        type: type,
        dialogType: dialogType
            };
            return callAsyncAPI(args);
        };
window.FormIt.FileSystem = window.FormIt.FileSystem || {};

        window.FormIt.FileSystem.FileExists = function(path) {
            args = {
                TestAPI: "FormIt.FileSystem.FileExists",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.FileSystem.Remove = function(path) {
            args = {
                TestAPI: "FormIt.FileSystem.Remove",
path: path
            };
            return callAsyncAPI(args);
        };
window.FormIt.Forge = window.FormIt.Forge || {};
window.FormIt.Forge.UI = window.FormIt.Forge.UI || {};

        window.FormIt.Forge.UI.ErrorCodeToUIMessage = function(code) {
            args = {
                TestAPI: "FormIt.Forge.UI.ErrorCodeToUIMessage",
code: code
            };
            return callAsyncAPI(args);
        };
window.FormIt.GroupEdit = window.FormIt.GroupEdit || {};

        window.FormIt.GroupEdit.GetEditingHistoryID = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.GetEditingHistoryID"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.GetInContextEditingPath = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.GetInContextEditingPath"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.SetInContextEditingPath = function(path) {
            args = {
                TestAPI: "FormIt.GroupEdit.SetInContextEditingPath",
path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.IsEditingInContext = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.IsEditingInContext"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.EndEditInContext = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.EndEditInContext"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.ExitToParentContext = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.ExitToParentContext"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.GetShowEditedGroupOnly = function() {
            args = {
                TestAPI: "FormIt.GroupEdit.GetShowEditedGroupOnly"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.GroupEdit.SetShowEditedGroupOnly = function(show) {
            args = {
                TestAPI: "FormIt.GroupEdit.SetShowEditedGroupOnly",
show: show
            };
            return callAsyncAPI(args);
        };
window.FormIt.HUDManager = window.FormIt.HUDManager || {};

        window.FormIt.HUDManager.GetNumWidgets = function() {
            args = {
                TestAPI: "FormIt.HUDManager.GetNumWidgets"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.HUDManager.WidgetTextInput = function(widgetID,text) {
            args = {
                TestAPI: "FormIt.HUDManager.WidgetTextInput",
widgetID: widgetID,
        text: text
            };
            return callAsyncAPI(args);
        };

        window.FormIt.HUDManager.ResetHUD = function() {
            args = {
                TestAPI: "FormIt.HUDManager.ResetHUD"
            };
            return callAsyncAPI(args);
        };
window.FormIt.ImageManager = window.FormIt.ImageManager || {};

        window.FormIt.ImageManager.ReloadImageLayerWithImage = function(nHistoryID,nLayerID,imageFile) {
            args = {
                TestAPI: "FormIt.ImageManager.ReloadImageLayerWithImage",
nHistoryID: nHistoryID,
        nLayerID: nLayerID,
        imageFile: imageFile
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.ReloadImageLayerWithPlaceholder = function(nHistoryID,nLayerID) {
            args = {
                TestAPI: "FormIt.ImageManager.ReloadImageLayerWithPlaceholder",
nHistoryID: nHistoryID,
        nLayerID: nLayerID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.GetData = function(nHistoryID,nImageID,aIncludeSatelliteData) {
            args = {
                TestAPI: "FormIt.ImageManager.GetData",
nHistoryID: nHistoryID,
        nImageID: nImageID,
        aIncludeSatelliteData: aIncludeSatelliteData
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.GetAllImages = function(nHistoryID,nSort) {
            args = {
                TestAPI: "FormIt.ImageManager.GetAllImages",
nHistoryID: nHistoryID,
        nSort: nSort
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.ImportImage = function(nHistoryID,fileName,pixelWidth,pixelHeight,worldWidth,worldHeight,isSatelliteImage,addToSelections) {
            args = {
                TestAPI: "FormIt.ImageManager.ImportImage",
nHistoryID: nHistoryID,
        fileName: fileName,
        pixelWidth: pixelWidth,
        pixelHeight: pixelHeight,
        worldWidth: worldWidth,
        worldHeight: worldHeight,
        isSatelliteImage: isSatelliteImage,
        addToSelections: addToSelections
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.SetImageName = function(nHistoryID,imageID,name) {
            args = {
                TestAPI: "FormIt.ImageManager.SetImageName",
nHistoryID: nHistoryID,
        imageID: imageID,
        name: name
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.SetImageAlpha = function(nHistoryID,imageID,fAlpha,bFinalChange) {
            args = {
                TestAPI: "FormIt.ImageManager.SetImageAlpha",
nHistoryID: nHistoryID,
        imageID: imageID,
        fAlpha: fAlpha,
        bFinalChange: bFinalChange
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.SetImagePosition = function(nHistoryID,imageID,nPosition) {
            args = {
                TestAPI: "FormIt.ImageManager.SetImagePosition",
nHistoryID: nHistoryID,
        imageID: imageID,
        nPosition: nPosition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.ImageManager.ReloadTerrain = function(nHistoryID,nImageID,imageFile,nRows,nCols,elevations) {
            args = {
                TestAPI: "FormIt.ImageManager.ReloadTerrain",
nHistoryID: nHistoryID,
        nImageID: nImageID,
        imageFile: imageFile,
        nRows: nRows,
        nCols: nCols,
        elevations: elevations
            };
            return callAsyncAPI(args);
        };
window.FormIt.Layers = window.FormIt.Layers || {};

        window.FormIt.Layers.GetAllLayers = function() {
            args = {
                TestAPI: "FormIt.Layers.GetAllLayers"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetLayerData = function(layerID) {
            args = {
                TestAPI: "FormIt.Layers.GetLayerData",
layerID: layerID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetAllLayerData = function() {
            args = {
                TestAPI: "FormIt.Layers.GetAllLayerData"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.AddLayer = function(historyID,layerName,visible) {
            args = {
                TestAPI: "FormIt.Layers.AddLayer",
historyID: historyID,
        layerName: layerName,
        visible: visible
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.IsValid = function(layerID) {
            args = {
                TestAPI: "FormIt.Layers.IsValid",
layerID: layerID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.SetLayersVisibility = function(aLayersVisibility) {
            args = {
                TestAPI: "FormIt.Layers.SetLayersVisibility",
aLayersVisibility: aLayersVisibility
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.SetLayerVisibility = function(layerName,visibility) {
            args = {
                TestAPI: "FormIt.Layers.SetLayerVisibility",
layerName: layerName,
        visibility: visibility
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.LayerExists = function(layerName) {
            args = {
                TestAPI: "FormIt.Layers.LayerExists",
layerName: layerName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.DeleteLayers = function(aLayerIDs) {
            args = {
                TestAPI: "FormIt.Layers.DeleteLayers",
aLayerIDs: aLayerIDs
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.IsValidLayerName = function(layerID,newLayerName) {
            args = {
                TestAPI: "FormIt.Layers.IsValidLayerName",
layerID: layerID,
        newLayerName: newLayerName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.SetLayerName = function(layerID,newLayerName) {
            args = {
                TestAPI: "FormIt.Layers.SetLayerName",
layerID: layerID,
        newLayerName: newLayerName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.AssignLayerToObjects = function(layerID,aObjects) {
            args = {
                TestAPI: "FormIt.Layers.AssignLayerToObjects",
layerID: layerID,
        aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.RemoveLayersFromObjects = function(layerIDs,aObjects) {
            args = {
                TestAPI: "FormIt.Layers.RemoveLayersFromObjects",
layerIDs: layerIDs,
        aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetAllObjectsOnLayers = function(layerIDs,allHistories) {
            args = {
                TestAPI: "FormIt.Layers.GetAllObjectsOnLayers",
layerIDs: layerIDs,
        allHistories: allHistories
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.ChangeLayerOrder = function(layerID,newPosition) {
            args = {
                TestAPI: "FormIt.Layers.ChangeLayerOrder",
layerID: layerID,
        newPosition: newPosition
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetObjectLayerID = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "FormIt.Layers.GetObjectLayerID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.IsValidObjectForLayerAssignment = function(nHistoryID,nObjectID) {
            args = {
                TestAPI: "FormIt.Layers.IsValidObjectForLayerAssignment",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetLayerList = function() {
            args = {
                TestAPI: "FormIt.Layers.GetLayerList"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetObjectsLayerList = function(groupInstacePathArray,bIncludeNoLayer) {
            args = {
                TestAPI: "FormIt.Layers.GetObjectsLayerList",
groupInstacePathArray: groupInstacePathArray,
        bIncludeNoLayer: bIncludeNoLayer
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.GetLayerID = function(layerName) {
            args = {
                TestAPI: "FormIt.Layers.GetLayerID",
layerName: layerName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Layers.SetLayerPickable = function(layerID,pickable) {
            args = {
                TestAPI: "FormIt.Layers.SetLayerPickable",
layerID: layerID,
        pickable: pickable
            };
            return callAsyncAPI(args);
        };
window.FormIt.Levels = window.FormIt.Levels || {};

        window.FormIt.Levels.AddLevels = function(nHistoryID,numLevels,startElevation,deltaElevation) {
            args = {
                TestAPI: "FormIt.Levels.AddLevels",
nHistoryID: nHistoryID,
        numLevels: numLevels,
        startElevation: startElevation,
        deltaElevation: deltaElevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.AutoRenameLevels = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.AutoRenameLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.ChangeLevelElevation = function(nHistoryID,levelID,newElevation) {
            args = {
                TestAPI: "FormIt.Levels.ChangeLevelElevation",
nHistoryID: nHistoryID,
        levelID: levelID,
        newElevation: newElevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.ChangeLevelName = function(levelID,levelName) {
            args = {
                TestAPI: "FormIt.Levels.ChangeLevelName",
levelID: levelID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.CreateDefaultLevels = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.CreateDefaultLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.DeleteLevels = function(nHistoryID,aLevelIDs) {
            args = {
                TestAPI: "FormIt.Levels.DeleteLevels",
nHistoryID: nHistoryID,
        aLevelIDs: aLevelIDs
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetDefaultLevelHeight = function() {
            args = {
                TestAPI: "FormIt.Levels.GetDefaultLevelHeight"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetLevels = function(nHistoryID,sortByElevation) {
            args = {
                TestAPI: "FormIt.Levels.GetLevels",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetLevelsVisible = function() {
            args = {
                TestAPI: "FormIt.Levels.GetLevelsVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetNumLevels = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.GetNumLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetMinLevelElevation = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.GetMinLevelElevation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetMaxLevelElevation = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.GetMaxLevelElevation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetLevelData = function(nHistoryID,levelID) {
            args = {
                TestAPI: "FormIt.Levels.GetLevelData",
nHistoryID: nHistoryID,
        levelID: levelID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetLevelsData = function(nHistoryID,sortByElevation) {
            args = {
                TestAPI: "FormIt.Levels.GetLevelsData",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetLevelIDsFromSelectedObjects = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Levels.GetLevelIDsFromSelectedObjects",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.HasLevelsInProject = function(checkVisibleOnly) {
            args = {
                TestAPI: "FormIt.Levels.HasLevelsInProject",
checkVisibleOnly: checkVisibleOnly
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsExistingLevel = function(nHistoryID,levelName) {
            args = {
                TestAPI: "FormIt.Levels.IsExistingLevel",
nHistoryID: nHistoryID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsExistingLevelByElevation = function(nHistoryID,elevation) {
            args = {
                TestAPI: "FormIt.Levels.IsExistingLevelByElevation",
nHistoryID: nHistoryID,
        elevation: elevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsValidLevelDeltaElevation = function(nHistoryID,deltaElevationString,numLevels) {
            args = {
                TestAPI: "FormIt.Levels.IsValidLevelDeltaElevation",
nHistoryID: nHistoryID,
        deltaElevationString: deltaElevationString,
        numLevels: numLevels
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsValidLevelElevation = function(nHistoryID,levelId,elevationString) {
            args = {
                TestAPI: "FormIt.Levels.IsValidLevelElevation",
nHistoryID: nHistoryID,
        levelId: levelId,
        elevationString: elevationString
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsValidLevelName = function(levelID,levelName) {
            args = {
                TestAPI: "FormIt.Levels.IsValidLevelName",
levelID: levelID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.IsValidNumberOfLevelsToAdd = function(nHistoryID,numLevelsString,deltaElevation) {
            args = {
                TestAPI: "FormIt.Levels.IsValidNumberOfLevelsToAdd",
nHistoryID: nHistoryID,
        numLevelsString: numLevelsString,
        deltaElevation: deltaElevation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.SetLevelsToSelectedObjects = function(nHistoryID,aLevelList) {
            args = {
                TestAPI: "FormIt.Levels.SetLevelsToSelectedObjects",
nHistoryID: nHistoryID,
        aLevelList: aLevelList
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.SetLevelsVisible = function(aVisible) {
            args = {
                TestAPI: "FormIt.Levels.SetLevelsVisible",
aVisible: aVisible
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.SetReportAreaByLevelsOnSelection = function(bON) {
            args = {
                TestAPI: "FormIt.Levels.SetReportAreaByLevelsOnSelection",
bON: bON
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Levels.GetAreaForObjects = function(nHistoryID,aLevelId,aObjectIds) {
            args = {
                TestAPI: "FormIt.Levels.GetAreaForObjects",
nHistoryID: nHistoryID,
        aLevelId: aLevelId,
        aObjectIds: aObjectIds
            };
            return callAsyncAPI(args);
        };
window.FormIt.MaterialProvider = window.FormIt.MaterialProvider || {};

        window.FormIt.MaterialProvider.MaterialData = function(color,textureData,scale,useAlpha,materialName,materialIdentifier,textureName,aAdditionalRenderData,aAdditionalTextures) {
            args = {
                TestAPI: "FormIt.MaterialProvider.MaterialData",
color: color,
        textureData: textureData,
        scale: scale,
        useAlpha: useAlpha,
        materialName: materialName,
        materialIdentifier: materialIdentifier,
        textureName: textureName,
        aAdditionalRenderData: aAdditionalRenderData,
        aAdditionalTextures: aAdditionalTextures
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.CreateMaterial = function(libraryType,materialData) {
            args = {
                TestAPI: "FormIt.MaterialProvider.CreateMaterial",
libraryType: libraryType,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.GetMaterialData = function(libraryType,materialId) {
            args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialData",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.SetMaterialData = function(libraryType,materialId,materialData) {
            args = {
                TestAPI: "FormIt.MaterialProvider.SetMaterialData",
libraryType: libraryType,
        materialId: materialId,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.GetMaterialName = function(libraryType,materialId) {
            args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialName",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.GetMaterials = function(libraryType) {
            args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterials",
libraryType: libraryType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.DeleteMaterials = function(libraryType,materialIds) {
            args = {
                TestAPI: "FormIt.MaterialProvider.DeleteMaterials",
libraryType: libraryType,
        materialIds: materialIds
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.GetMaterialPreviewImage = function(libraryType,materialId) {
            args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialPreviewImage",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.IsValidMaterialName = function(libraryType,materialId,newName) {
            args = {
                TestAPI: "FormIt.MaterialProvider.IsValidMaterialName",
libraryType: libraryType,
        materialId: materialId,
        newName: newName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.GetNewMaterialName = function(libraryType,baseName) {
            args = {
                TestAPI: "FormIt.MaterialProvider.GetNewMaterialName",
libraryType: libraryType,
        baseName: baseName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.IsValidMaterial = function(libraryType,materialId) {
            args = {
                TestAPI: "FormIt.MaterialProvider.IsValidMaterial",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.MaterialProvider.CanModify = function(libraryType,materialId) {
            args = {
                TestAPI: "FormIt.MaterialProvider.CanModify",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };
window.FormIt.Messaging = window.FormIt.Messaging || {};

        window.FormIt.Messaging.GetMessages = function() {
            args = {
                TestAPI: "FormIt.Messaging.GetMessages"
            };
            return callAsyncAPI(args);
        };
window.FormIt.Model = window.FormIt.Model || {};

        window.FormIt.Model.GetHistoryID = function() {
            args = {
                TestAPI: "FormIt.Model.GetHistoryID"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetMemorySize = function(bCollapsedHistoryWithLiveObjsOnly) {
            args = {
                TestAPI: "FormIt.Model.GetMemorySize",
bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetUnitTypeCurrent = function() {
            args = {
                TestAPI: "FormIt.Model.GetUnitTypeCurrent"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetUnitType = function() {
            args = {
                TestAPI: "FormIt.Model.GetUnitType"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetUnitTypeCurrent = function(unitType) {
            args = {
                TestAPI: "FormIt.Model.SetUnitTypeCurrent",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.ImperialLengthToCurrentUnitLength = function(length) {
            args = {
                TestAPI: "FormIt.Model.ImperialLengthToCurrentUnitLength",
length: length
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetUnitType = function(unitType) {
            args = {
                TestAPI: "FormIt.Model.SetUnitType",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.IsImperialUnitType = function(unitType) {
            args = {
                TestAPI: "FormIt.Model.IsImperialUnitType",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetGroupHistoryName = function(nHistoryID) {
            args = {
                TestAPI: "FormIt.Model.GetGroupHistoryName",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetGroupHistoryName = function(nHistoryID,sHistoryName) {
            args = {
                TestAPI: "FormIt.Model.SetGroupHistoryName",
nHistoryID: nHistoryID,
        sHistoryName: sHistoryName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.IsModified = function() {
            args = {
                TestAPI: "FormIt.Model.IsModified"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.ResetModified = function() {
            args = {
                TestAPI: "FormIt.Model.ResetModified"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetCurveAccuracyOrCountCurrent = function(accuracyORcount) {
            args = {
                TestAPI: "FormIt.Model.SetCurveAccuracyOrCountCurrent",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetCurveAccuracyOrCountCurrent = function() {
            args = {
                TestAPI: "FormIt.Model.GetCurveAccuracyOrCountCurrent"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetPropertiesForHistory = function(nHistoryID,editingPath) {
            args = {
                TestAPI: "FormIt.Model.GetPropertiesForHistory",
nHistoryID: nHistoryID,
        editingPath: editingPath
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetPropertiesForSelected = function() {
            args = {
                TestAPI: "FormIt.Model.GetPropertiesForSelected"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetObjectName = function(objectID) {
            args = {
                TestAPI: "FormIt.Model.GetObjectName",
objectID: objectID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetObjectName = function(objectID,name) {
            args = {
                TestAPI: "FormIt.Model.SetObjectName",
objectID: objectID,
        name: name
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.ObjectReportsAreaByLevel = function(objectID) {
            args = {
                TestAPI: "FormIt.Model.ObjectReportsAreaByLevel",
objectID: objectID
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetSurfaceAccuracyOrCountCurrent = function(accuracy) {
            args = {
                TestAPI: "FormIt.Model.SetSurfaceAccuracyOrCountCurrent",
accuracy: accuracy
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetSurfaceAccuracyOrCountCurrent = function() {
            args = {
                TestAPI: "FormIt.Model.GetSurfaceAccuracyOrCountCurrent"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetProjectSiteArea = function() {
            args = {
                TestAPI: "FormIt.Model.GetProjectSiteArea"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.SetTotalAreaOfSite = function(area) {
            args = {
                TestAPI: "FormIt.Model.SetTotalAreaOfSite",
area: area
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetProjectTargetArea = function() {
            args = {
                TestAPI: "FormIt.Model.GetProjectTargetArea"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Model.GetTotalGrossArea = function() {
            args = {
                TestAPI: "FormIt.Model.GetTotalGrossArea"
            };
            return callAsyncAPI(args);
        };
window.FormIt.Scenes = window.FormIt.Scenes || {};

        window.FormIt.Scenes.SceneNameExists = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.SceneNameExists",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.IsValidSceneName = function(oldSceneName,newSceneName) {
            args = {
                TestAPI: "FormIt.Scenes.IsValidSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetSceneName = function(oldSceneName,newSceneName) {
            args = {
                TestAPI: "FormIt.Scenes.SetSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.AddNewScene = function(afterSceneName) {
            args = {
                TestAPI: "FormIt.Scenes.AddNewScene",
afterSceneName: afterSceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetScene = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetScenes = function() {
            args = {
                TestAPI: "FormIt.Scenes.GetScenes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetScenes = function(scenes) {
            args = {
                TestAPI: "FormIt.Scenes.SetScenes",
scenes: scenes
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.AddScene = function(scene,afterSceneName) {
            args = {
                TestAPI: "FormIt.Scenes.AddScene",
scene: scene,
        afterSceneName: afterSceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.RemoveScene = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.RemoveScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.DuplicateScene = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.DuplicateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetSceneNames = function() {
            args = {
                TestAPI: "FormIt.Scenes.GetSceneNames"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.ScenesAreEqual = function(sceneName,scene) {
            args = {
                TestAPI: "FormIt.Scenes.ScenesAreEqual",
sceneName: sceneName,
        scene: scene
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetPresentationMode = function(start,sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.SetPresentationMode",
start: start,
        sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.IsPresenting = function() {
            args = {
                TestAPI: "FormIt.Scenes.IsPresenting"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.UpdateScene = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.UpdateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetPropertiesToCapture = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetPropertiesToCapture",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetPropertiesToCapture = function(sceneName,properties) {
            args = {
                TestAPI: "FormIt.Scenes.SetPropertiesToCapture",
sceneName: sceneName,
        properties: properties
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.ActivateScene = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.ActivateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.MoveSceneUp = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.MoveSceneUp",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.MoveSceneDown = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.MoveSceneDown",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.RearrangeScenes = function(oldPos,newPos) {
            args = {
                TestAPI: "FormIt.Scenes.RearrangeScenes",
oldPos: oldPos,
        newPos: newPos
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetNumberOfScenes = function() {
            args = {
                TestAPI: "FormIt.Scenes.GetNumberOfScenes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetNumberOfScenesWithAnimation = function() {
            args = {
                TestAPI: "FormIt.Scenes.GetNumberOfScenesWithAnimation"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetPauseTime = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetPauseTime",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetPauseTime = function(sceneName,pauseTime) {
            args = {
                TestAPI: "FormIt.Scenes.SetPauseTime",
sceneName: sceneName,
        pauseTime: pauseTime
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.IsValidScenePauseTime = function(pauseTimeString) {
            args = {
                TestAPI: "FormIt.Scenes.IsValidScenePauseTime",
pauseTimeString: pauseTimeString
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.IsValidSceneTransitionTime = function(transitionTimeString) {
            args = {
                TestAPI: "FormIt.Scenes.IsValidSceneTransitionTime",
transitionTimeString: transitionTimeString
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.IsValidSceneCameraSpeed = function(speedString) {
            args = {
                TestAPI: "FormIt.Scenes.IsValidSceneCameraSpeed",
speedString: speedString
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetTransitionTime = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetTransitionTime",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetTransitionTime = function(sceneName,transitionTime) {
            args = {
                TestAPI: "FormIt.Scenes.SetTransitionTime",
sceneName: sceneName,
        transitionTime: transitionTime
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetCameraSpeed = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetCameraSpeed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetCameraSpeed = function(sceneName,cameraSpeed) {
            args = {
                TestAPI: "FormIt.Scenes.SetCameraSpeed",
sceneName: sceneName,
        cameraSpeed: cameraSpeed
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetIncludeInAnimation = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetIncludeInAnimation",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetIncludeInAnimation = function(sceneName,bIncludeInAnimation) {
            args = {
                TestAPI: "FormIt.Scenes.SetIncludeInAnimation",
sceneName: sceneName,
        bIncludeInAnimation: bIncludeInAnimation
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetUseCameraSpeed = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetUseCameraSpeed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetUseCameraSpeed = function(sceneName,bUseCameraSpeed) {
            args = {
                TestAPI: "FormIt.Scenes.SetUseCameraSpeed",
sceneName: sceneName,
        bUseCameraSpeed: bUseCameraSpeed
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetTransitionTimeUsed = function(sceneName) {
            args = {
                TestAPI: "FormIt.Scenes.GetTransitionTimeUsed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.SetEditCameras = function(bEditCameras) {
            args = {
                TestAPI: "FormIt.Scenes.SetEditCameras",
bEditCameras: bEditCameras
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Scenes.GetEditCameras = function() {
            args = {
                TestAPI: "FormIt.Scenes.GetEditCameras"
            };
            return callAsyncAPI(args);
        };
window.FormIt.LumionLiveSync = window.FormIt.LumionLiveSync || {};

        window.FormIt.LumionLiveSync.Start = function() {
            args = {
                TestAPI: "FormIt.LumionLiveSync.Start"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.LumionLiveSync.End = function() {
            args = {
                TestAPI: "FormIt.LumionLiveSync.End"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.LumionLiveSync.SyncLumionCamera = function() {
            args = {
                TestAPI: "FormIt.LumionLiveSync.SyncLumionCamera"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.LumionLiveSync.FollowLumionCamera = function(bFollowCamera) {
            args = {
                TestAPI: "FormIt.LumionLiveSync.FollowLumionCamera",
bFollowCamera: bFollowCamera
            };
            return callAsyncAPI(args);
        };
window.FormIt.SectionPlanes = window.FormIt.SectionPlanes || {};

        window.FormIt.SectionPlanes.Clear = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.Clear"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetPlanes = function(planes) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetPlanes",
planes: planes
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetPlanes = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetPlanes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetInstances = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetInstances"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetOutlineColor = function(color) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetOutlineColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetOutlineColor = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetOutlineColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetOutlineSize = function(s) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetOutlineSize",
s: s
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetOutlineSize = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetOutlineSize"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetSectionIndicatorsVisibility = function(visible) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetSectionIndicatorsVisibility",
visible: visible
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetPocheColor = function(color) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetPocheColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetPocheColor = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetPocheColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.EnablePocheColor = function(enable) {
            args = {
                TestAPI: "FormIt.SectionPlanes.EnablePocheColor",
enable: enable
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.IsPocheColorEnabled = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.IsPocheColorEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SectionPlaneHistoryChanged = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.SectionPlaneHistoryChanged"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.SetLastSectionRefHistory = function(historyId) {
            args = {
                TestAPI: "FormIt.SectionPlanes.SetLastSectionRefHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SectionPlanes.GetLastSectionRefHistory = function() {
            args = {
                TestAPI: "FormIt.SectionPlanes.GetLastSectionRefHistory"
            };
            return callAsyncAPI(args);
        };
window.FormIt.Selection = window.FormIt.Selection || {};

        window.FormIt.Selection.GetObjectTypeFilter = function() {
            args = {
                TestAPI: "FormIt.Selection.GetObjectTypeFilter"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.SetObjectTypeFilter = function(objectTypeFilter) {
            args = {
                TestAPI: "FormIt.Selection.SetObjectTypeFilter",
objectTypeFilter: objectTypeFilter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.ClearSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.ClearSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.AddSelections = function(aSelection) {
            args = {
                TestAPI: "FormIt.Selection.AddSelections",
aSelection: aSelection
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.GetSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.GetSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.SetSelections = function(selections) {
            args = {
                TestAPI: "FormIt.Selection.SetSelections",
selections: selections
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.SetPreSelections = function(firstPreselection,selections) {
            args = {
                TestAPI: "FormIt.Selection.SetPreSelections",
firstPreselection: firstPreselection,
        selections: selections
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.HasPreSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.HasPreSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.GetFirstPreSelectedObject = function() {
            args = {
                TestAPI: "FormIt.Selection.GetFirstPreSelectedObject"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.GetFirstSelectedObject = function() {
            args = {
                TestAPI: "FormIt.Selection.GetFirstSelectedObject"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.GetContextMenuObject = function() {
            args = {
                TestAPI: "FormIt.Selection.GetContextMenuObject"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.ClearPreSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.ClearPreSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.IsSelected = function(objPath) {
            args = {
                TestAPI: "FormIt.Selection.IsSelected",
objPath: objPath
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.SelectAll = function() {
            args = {
                TestAPI: "FormIt.Selection.SelectAll"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.HasSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.HasSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.GetPreSelections = function() {
            args = {
                TestAPI: "FormIt.Selection.GetPreSelections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.CommitPreselections = function() {
            args = {
                TestAPI: "FormIt.Selection.CommitPreselections"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.CompareSelections = function(selection1,selection2) {
            args = {
                TestAPI: "FormIt.Selection.CompareSelections",
selection1: selection1,
        selection2: selection2
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.ToggleObjects = function(selections) {
            args = {
                TestAPI: "FormIt.Selection.ToggleObjects",
selections: selections
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Selection.ApplyMaterialToSelection = function(id,backside) {
            args = {
                TestAPI: "FormIt.Selection.ApplyMaterialToSelection",
id: id,
        backside: backside
            };
            return callAsyncAPI(args);
        };
window.FormIt.Shortcuts = window.FormIt.Shortcuts || {};

        window.FormIt.Shortcuts.GetShortcutKeys = function() {
            args = {
                TestAPI: "FormIt.Shortcuts.GetShortcutKeys"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Shortcuts.RestoreFromJSON = function(jsonStr) {
            args = {
                TestAPI: "FormIt.Shortcuts.RestoreFromJSON",
jsonStr: jsonStr
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Shortcuts.GetJSON = function() {
            args = {
                TestAPI: "FormIt.Shortcuts.GetJSON"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Shortcuts.GetKeycodeString = function(key,modifier) {
            args = {
                TestAPI: "FormIt.Shortcuts.GetKeycodeString",
key: key,
        modifier: modifier
            };
            return callAsyncAPI(args);
        };
window.FormIt.Commands = window.FormIt.Commands || {};

        window.FormIt.Commands.GetCommands = function() {
            args = {
                TestAPI: "FormIt.Commands.GetCommands"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Commands.DoCommand = function(command) {
            args = {
                TestAPI: "FormIt.Commands.DoCommand",
command: command
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Commands.RegisterJSCommand = function(command) {
            args = {
                TestAPI: "FormIt.Commands.RegisterJSCommand",
command: command
            };
            return callAsyncAPI(args);
        };
window.FormIt.SketchMaterials = window.FormIt.SketchMaterials || {};

        window.FormIt.SketchMaterials.GetWSMMaterialForHistory = function(historyId,materialId) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetWSMMaterialForHistory",
historyId: historyId,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial = function(historyId,wsmMaterialId) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial",
historyId: historyId,
        wsmMaterialId: wsmMaterialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetMaterialIDsFromObjects = function(aObjects) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialIDsFromObjects",
aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.AssignMaterialToObjects = function(materialId,aObjects,uvTransf3d) {
            args = {
                TestAPI: "FormIt.SketchMaterials.AssignMaterialToObjects",
materialId: materialId,
        aObjects: aObjects,
        uvTransf3d: uvTransf3d
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.ChangeMaterialOrder = function(materialId,newPos) {
            args = {
                TestAPI: "FormIt.SketchMaterials.ChangeMaterialOrder",
materialId: materialId,
        newPos: newPos
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.IsMaterialUsed = function(materialId) {
            args = {
                TestAPI: "FormIt.SketchMaterials.IsMaterialUsed",
materialId: materialId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetDefaultMaterialData = function(bBack) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetDefaultMaterialData",
bBack: bBack
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.SetDefaultMaterialData = function(bBack,materialData) {
            args = {
                TestAPI: "FormIt.SketchMaterials.SetDefaultMaterialData",
bBack: bBack,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetMaterialDataAttribute = function(materialData,attributeType) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.SetMaterialDataAttribute = function(materialData,attributeType,value) {
            args = {
                TestAPI: "FormIt.SketchMaterials.SetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType,
        value: value
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetMaterialDataMap = function(materialData,mapType) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialDataMap",
materialData: materialData,
        mapType: mapType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.SetMaterialDataMap = function(materialData,mapType,map) {
            args = {
                TestAPI: "FormIt.SketchMaterials.SetMaterialDataMap",
materialData: materialData,
        mapType: mapType,
        map: map
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.GetAllObjectsUsingMaterials = function(materialIds) {
            args = {
                TestAPI: "FormIt.SketchMaterials.GetAllObjectsUsingMaterials",
materialIds: materialIds
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SketchMaterials.UpdateMaterialFromParameters = function(materialID,parameters) {
            args = {
                TestAPI: "FormIt.SketchMaterials.UpdateMaterialFromParameters",
materialID: materialID,
        parameters: parameters
            };
            return callAsyncAPI(args);
        };
window.FormIt.Statistics = window.FormIt.Statistics || {};

        window.FormIt.Statistics.OptOutTracking = function(isOptingOut) {
            args = {
                TestAPI: "FormIt.Statistics.OptOutTracking",
isOptingOut: isOptingOut
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Statistics.Log = function(UITrackingType) {
            args = {
                TestAPI: "FormIt.Statistics.Log",
UITrackingType: UITrackingType
            };
            return callAsyncAPI(args);
        };
window.FormIt.StringConversion = window.FormIt.StringConversion || {};

        window.FormIt.StringConversion.LinearValueToString = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.LinearValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.StringConversion.StringToLinearValue = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.StringToLinearValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.StringConversion.AreaValueToString = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.AreaValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.StringConversion.StringToAreaValue = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.StringToAreaValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.StringConversion.VolumeValueToString = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.VolumeValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        window.FormIt.StringConversion.StringToVolumeValue = function(val,forceFeetOrMeter) {
            args = {
                TestAPI: "FormIt.StringConversion.StringToVolumeValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };
window.FormIt.SunAndLocation = window.FormIt.SunAndLocation || {};

        window.FormIt.SunAndLocation.AddSatelliteImage = function(centerLat,centerLon,latSpan,lonSpan,pixelWidth,pixelHeight,physicalWidth,physicalHeight,address,xOffset,yOffset) {
            args = {
                TestAPI: "FormIt.SunAndLocation.AddSatelliteImage",
centerLat: centerLat,
        centerLon: centerLon,
        latSpan: latSpan,
        lonSpan: lonSpan,
        pixelWidth: pixelWidth,
        pixelHeight: pixelHeight,
        physicalWidth: physicalWidth,
        physicalHeight: physicalHeight,
        address: address,
        xOffset: xOffset,
        yOffset: yOffset
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.SetProjectAddress = function(address) {
            args = {
                TestAPI: "FormIt.SunAndLocation.SetProjectAddress",
address: address
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.GetProjectAddress = function() {
            args = {
                TestAPI: "FormIt.SunAndLocation.GetProjectAddress"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.SetLocation = function(longitude,latitude) {
            args = {
                TestAPI: "FormIt.SunAndLocation.SetLocation",
longitude: longitude,
        latitude: latitude
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.SetTimeOfDay = function(dTimeOfDay,bUpdateRender,bForceUpdateShadows) {
            args = {
                TestAPI: "FormIt.SunAndLocation.SetTimeOfDay",
dTimeOfDay: dTimeOfDay,
        bUpdateRender: bUpdateRender,
        bForceUpdateShadows: bForceUpdateShadows
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.UpdateShadows = function() {
            args = {
                TestAPI: "FormIt.SunAndLocation.UpdateShadows"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.SetDate = function(nDay,nMonth,nYear,bUpdateRender,bForceUpdateShadows) {
            args = {
                TestAPI: "FormIt.SunAndLocation.SetDate",
nDay: nDay,
        nMonth: nMonth,
        nYear: nYear,
        bUpdateRender: bUpdateRender,
        bForceUpdateShadows: bForceUpdateShadows
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.GetDaylightSavingTime = function() {
            args = {
                TestAPI: "FormIt.SunAndLocation.GetDaylightSavingTime"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.SetDaylightSavingTime = function(bEnable,bUpdateRender) {
            args = {
                TestAPI: "FormIt.SunAndLocation.SetDaylightSavingTime",
bEnable: bEnable,
        bUpdateRender: bUpdateRender
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.GetLocationDateTime = function() {
            args = {
                TestAPI: "FormIt.SunAndLocation.GetLocationDateTime"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.GetSunRiseAndSet = function() {
            args = {
                TestAPI: "FormIt.SunAndLocation.GetSunRiseAndSet"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.SunAndLocation.GetLightDirectionFromLocationData = function(sunLocationData) {
            args = {
                TestAPI: "FormIt.SunAndLocation.GetLightDirectionFromLocationData",
sunLocationData: sunLocationData
            };
            return callAsyncAPI(args);
        };
window.FormIt.Tools = window.FormIt.Tools || {};

        window.FormIt.Tools.ClearTools = function() {
            args = {
                TestAPI: "FormIt.Tools.ClearTools"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.GetActiveToolType = function() {
            args = {
                TestAPI: "FormIt.Tools.GetActiveToolType"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.GetActiveToolSubType = function() {
            args = {
                TestAPI: "FormIt.Tools.GetActiveToolSubType"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.IsInContinuousAction = function() {
            args = {
                TestAPI: "FormIt.Tools.IsInContinuousAction"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.StartTool = function(toolType) {
            args = {
                TestAPI: "FormIt.Tools.StartTool",
toolType: toolType
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.BlendFacesOrEdges = function(val) {
            args = {
                TestAPI: "FormIt.Tools.BlendFacesOrEdges",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.FlattenGroups = function() {
            args = {
                TestAPI: "FormIt.Tools.FlattenGroups"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.OffsetBody = function(val) {
            args = {
                TestAPI: "FormIt.Tools.OffsetBody",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.Paintbrush = function(materialID,backside) {
            args = {
                TestAPI: "FormIt.Tools.Paintbrush",
materialID: materialID,
        backside: backside
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.ShellBodyOrFaces = function(val) {
            args = {
                TestAPI: "FormIt.Tools.ShellBodyOrFaces",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.ClearAllInferences = function() {
            args = {
                TestAPI: "FormIt.Tools.ClearAllInferences"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.InitToolsAPI = function() {
            args = {
                TestAPI: "FormIt.Tools.InitToolsAPI"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.SelectArrayTool = function(numCopies,copyDivide,groupBeforeCopy,radial) {
            args = {
                TestAPI: "FormIt.Tools.SelectArrayTool",
numCopies: numCopies,
        copyDivide: copyDivide,
        groupBeforeCopy: groupBeforeCopy,
        radial: radial
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Tools.GetSecondaryTool = function() {
            args = {
                TestAPI: "FormIt.Tools.GetSecondaryTool"
            };
            return callAsyncAPI(args);
        };
window.FormIt.UI = window.FormIt.UI || {};

        window.FormIt.UI.LoadLangPack = function(filename) {
            args = {
                TestAPI: "FormIt.UI.LoadLangPack",
filename: filename
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UI.CreatePanel = function(title,url) {
            args = {
                TestAPI: "FormIt.UI.CreatePanel",
title: title,
        url: url
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UI.CreateToolbar = function(tbJSON,URL) {
            args = {
                TestAPI: "FormIt.UI.CreateToolbar",
tbJSON: tbJSON,
        URL: URL
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UI.ShowNotification = function(message,notificationType,nTimeout) {
            args = {
                TestAPI: "FormIt.UI.ShowNotification",
message: message,
        notificationType: notificationType,
        nTimeout: nTimeout
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UI.CloseNotification = function(notificationHandle) {
            args = {
                TestAPI: "FormIt.UI.CloseNotification",
notificationHandle: notificationHandle
            };
            return callAsyncAPI(args);
        };
window.FormIt.UndoManagement = window.FormIt.UndoManagement || {};

        window.FormIt.UndoManagement.BeginState = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.BeginState"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.EndState = function(name,userName) {
            args = {
                TestAPI: "FormIt.UndoManagement.EndState",
name: name,
        userName: userName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.RejectState = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.RejectState"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.CanGlobalRedo = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.CanGlobalRedo"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GlobalRedo = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GlobalRedo"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GlobalUndo = function(bAndDeleteRedo) {
            args = {
                TestAPI: "FormIt.UndoManagement.GlobalUndo",
bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.CanGlobalUndo = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.CanGlobalUndo"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.CanRedo = function(nStates) {
            args = {
                TestAPI: "FormIt.UndoManagement.CanRedo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.CanUndo = function(nStates) {
            args = {
                TestAPI: "FormIt.UndoManagement.CanUndo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GetCurrentState = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GetCurrentState"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GetHistoryIDs = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GetHistoryIDs"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GetHistoryStates = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GetHistoryStates"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GetStateData = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GetStateData"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.GetStateHistories = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.GetStateHistories"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.MergeCurrentStates = function(histories) {
            args = {
                TestAPI: "FormIt.UndoManagement.MergeCurrentStates",
histories: histories
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.MergeStateRange = function() {
            args = {
                TestAPI: "FormIt.UndoManagement.MergeStateRange"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.MergeStates = function(states) {
            args = {
                TestAPI: "FormIt.UndoManagement.MergeStates",
states: states
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.NoteState = function(name,aHistories) {
            args = {
                TestAPI: "FormIt.UndoManagement.NoteState",
name: name,
        aHistories: aHistories
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.Redo = function(nStates) {
            args = {
                TestAPI: "FormIt.UndoManagement.Redo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.RollTo = function(bAndDeleteRedo) {
            args = {
                TestAPI: "FormIt.UndoManagement.RollTo",
bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.SetLastStateName = function(stateName) {
            args = {
                TestAPI: "FormIt.UndoManagement.SetLastStateName",
stateName: stateName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.SetStateName = function(stateName) {
            args = {
                TestAPI: "FormIt.UndoManagement.SetStateName",
stateName: stateName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.UndoManagement.Undo = function(nStates,bAndDeleteRedo) {
            args = {
                TestAPI: "FormIt.UndoManagement.Undo",
nStates: nStates,
        bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };
window.FormIt.Utils = window.FormIt.Utils || {};

        window.FormIt.Utils.DecodeBase64Bytes = function(decodeBytes) {
            args = {
                TestAPI: "FormIt.Utils.DecodeBase64Bytes",
decodeBytes: decodeBytes
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Utils.EncodeBase64Bytes = function(encodeBytes) {
            args = {
                TestAPI: "FormIt.Utils.EncodeBase64Bytes",
encodeBytes: encodeBytes
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Utils.NewGuid = function() {
            args = {
                TestAPI: "FormIt.Utils.NewGuid"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Utils.GuidFromString = function(hexStr) {
            args = {
                TestAPI: "FormIt.Utils.GuidFromString",
hexStr: hexStr
            };
            return callAsyncAPI(args);
        };
window.FormIt.VisualStyles = window.FormIt.VisualStyles || {};

        window.FormIt.VisualStyles.GetShadowsVisible = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetShadowsVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetShadowsVisible = function(val) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetShadowsVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes = function(val) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsGroundPlaneVisible = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsGroundPlaneVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetGroundPlaneVisible = function(val) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetGroundPlaneVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsWorkPlaneVisible = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsWorkPlaneVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetWorkPlaneVisible = function(val) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetWorkPlaneVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetNorthArrowDisplay = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetNorthArrowDisplay"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetNorthArrowDisplay = function(bOn) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetNorthArrowDisplay",
bOn: bOn
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.ToggleNorthArrowDisplay = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.ToggleNorthArrowDisplay"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsNorthArrowVisible = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsNorthArrowVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetShowAxes = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetShowAxes"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetShowAxes = function(bShow) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetShowAxes",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetShowSilhouettes = function(bShow) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetShowSilhouettes",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetShowEdges = function(bShow) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetShowEdges",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsGridVisible = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsGridVisible"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetGridVisible = function(bVisible) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetGridVisible",
bVisible: bVisible
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetHighlightPreselect = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetHighlightPreselect"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetHighlightPreselect = function(bHighlight) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetHighlightPreselect",
bHighlight: bHighlight
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetAmbientColorIntensity = function(i) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientColorIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetAmbientColorIntensity = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetAmbientColorIntensity"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetAmbientTextureIntensity = function(i) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientTextureIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetAmbientTextureIntensity = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetAmbientTextureIntensity"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetAmbientMaterialIntensity = function(i) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientMaterialIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSunShading = function(i) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSunShading",
i: i
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetSunShading = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetSunShading"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetShadowIntensity = function(i) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetShadowIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetShadowIntensity = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetShadowIntensity"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetAdvancedMaterialShaderType = function(type) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetAdvancedMaterialShaderType",
type: type
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetAdvancedMaterialShaderType = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetAdvancedMaterialShaderType"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsSkyRendered = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsSkyRendered"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSkyRendered = function(b) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSkyRendered",
b: b
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsFogRendered = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.IsFogRendered"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetFogRendered = function(b) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetFogRendered",
b: b
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSkyLowerColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSkyLowerColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetSkyLowerColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetSkyLowerColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSkyUpperColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSkyUpperColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetSkyUpperColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetSkyUpperColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetBackgroundColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetBackgroundColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetBackgroundColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetBackgroundColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetGroundPlaneColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetGroundPlaneColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetGroundPlaneColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetGroundPlaneColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetWorkPlaneColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetWorkPlaneColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetWorkPlaneColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetWorkPlaneColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSunEditorEnabled = function(bEnabled) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSunEditorEnabled",
bEnabled: bEnabled
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetSunEditorEnabled = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetSunEditorEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetEdgeWeight = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetEdgeWeight"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetEdgeWeight = function(weight) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetEdgeWeight",
weight: weight
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetEdgeColor = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetEdgeColor"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetEdgeColor = function(color) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetEdgeColor",
color: color
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.GetSilhouetteWeight = function() {
            args = {
                TestAPI: "FormIt.VisualStyles.GetSilhouetteWeight"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetSilhouetteWeight = function(weight) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetSilhouetteWeight",
weight: weight
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.IsRenderSettingActive = function(flag) {
            args = {
                TestAPI: "FormIt.VisualStyles.IsRenderSettingActive",
flag: flag
            };
            return callAsyncAPI(args);
        };

        window.FormIt.VisualStyles.SetRenderSettingFlags = function(flag,b) {
            args = {
                TestAPI: "FormIt.VisualStyles.SetRenderSettingFlags",
flag: flag,
        b: b
            };
            return callAsyncAPI(args);
        };
window.FormIt.Events = window.FormIt.Events || {};

        window.FormIt.Events.AreaSelectBegan = function(pt,mods) {
            args = {
                TestAPI: "FormIt.Events.AreaSelectBegan",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.AreaSelectChanged = function(pt,mods) {
            args = {
                TestAPI: "FormIt.Events.AreaSelectChanged",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.AreaSelectEnded = function(mods) {
            args = {
                TestAPI: "FormIt.Events.AreaSelectEnded",
mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.DoubleTap = function(pt,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.DoubleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.DoubleTapTwoTouches = function(pt,mods) {
            args = {
                TestAPI: "FormIt.Events.DoubleTapTwoTouches",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.HandleEvent = function(event) {
            args = {
                TestAPI: "FormIt.Events.HandleEvent",
event: event
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.KeyDown = function(keyCode,mods) {
            args = {
                TestAPI: "FormIt.Events.KeyDown",
keyCode: keyCode,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.KeyUp = function(keyCode,mods) {
            args = {
                TestAPI: "FormIt.Events.KeyUp",
keyCode: keyCode,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.LongPress = function(pt,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.LongPress",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseDown = function(pt,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseDown",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseMove = function(pt,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseMove",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseOut = function(pt,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseOut",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseOver = function(pt,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseOver",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseUp = function(pt,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseUp",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.MouseWheel = function(pt,delta,button,mods) {
            args = {
                TestAPI: "FormIt.Events.MouseWheel",
pt: pt,
        delta: delta,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PanBegin = function(pt,nTouches,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.PanBegin",
pt: pt,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PanChanged = function(vec,nTouches,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.PanChanged",
vec: vec,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PanEnded = function(mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.PanEnded",
mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PinchBegan = function(pt,mods) {
            args = {
                TestAPI: "FormIt.Events.PinchBegan",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PinchChanged = function(dDelta,mods) {
            args = {
                TestAPI: "FormIt.Events.PinchChanged",
dDelta: dDelta,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.PinchEnded = function(mods) {
            args = {
                TestAPI: "FormIt.Events.PinchEnded",
mods: mods
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.SingleTap = function(pt,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.SingleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Events.TouchBegan = function(pt,mods,isStylus) {
            args = {
                TestAPI: "FormIt.Events.TouchBegan",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };
window.FormIt.Testing = window.FormIt.Testing || {};

        window.FormIt.Testing.DisableMessaging = function() {
            args = {
                TestAPI: "FormIt.Testing.DisableMessaging"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.EnableMessaging = function() {
            args = {
                TestAPI: "FormIt.Testing.EnableMessaging"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.IsMessagingEnabled = function() {
            args = {
                TestAPI: "FormIt.Testing.IsMessagingEnabled"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.IsRunning = function() {
            args = {
                TestAPI: "FormIt.Testing.IsRunning"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.SetIsRunning = function(running) {
            args = {
                TestAPI: "FormIt.Testing.SetIsRunning",
running: running
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.LoadFileAndCompare = function(sTestFile,sExtension,sCompareFileName) {
            args = {
                TestAPI: "FormIt.Testing.LoadFileAndCompare",
sTestFile: sTestFile,
        sExtension: sExtension,
        sCompareFileName: sCompareFileName
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.RunNativeTests = function() {
            args = {
                TestAPI: "FormIt.Testing.RunNativeTests"
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.SetForgeMode = function(mode,path) {
            args = {
                TestAPI: "FormIt.Testing.SetForgeMode",
mode: mode,
        path: path
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.DownloadFile = function(token,fileInfo) {
            args = {
                TestAPI: "FormIt.Testing.DownloadFile",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.GetHubsWithProjects = function(token) {
            args = {
                TestAPI: "FormIt.Testing.GetHubsWithProjects",
token: token
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.CheckEntitlements = function(token) {
            args = {
                TestAPI: "FormIt.Testing.CheckEntitlements",
token: token
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.GetContentPermissions = function(token,projectInfo,content) {
            args = {
                TestAPI: "FormIt.Testing.GetContentPermissions",
token: token,
        projectInfo: projectInfo,
        content: content
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.GetTopFolders = function(token,hubInfo,projectInfo) {
            args = {
                TestAPI: "FormIt.Testing.GetTopFolders",
token: token,
        hubInfo: hubInfo,
        projectInfo: projectInfo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.ListContents = function(token,projectInfo,folderId) {
            args = {
                TestAPI: "FormIt.Testing.ListContents",
token: token,
        projectInfo: projectInfo,
        folderId: folderId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.CreateRemoteFile = function(token,fileName,data,folderId,projectId) {
            args = {
                TestAPI: "FormIt.Testing.CreateRemoteFile",
token: token,
        fileName: fileName,
        data: data,
        folderId: folderId,
        projectId: projectId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.UpdateRemoteFile = function(token,data,fileInfo,projectId) {
            args = {
                TestAPI: "FormIt.Testing.UpdateRemoteFile",
token: token,
        data: data,
        fileInfo: fileInfo,
        projectId: projectId
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.CreateThumbNailDerivative = function(token,fileInfo) {
            args = {
                TestAPI: "FormIt.Testing.CreateThumbNailDerivative",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.GetThumbNail = function(token,fileInfo) {
            args = {
                TestAPI: "FormIt.Testing.GetThumbNail",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.GetRevitFamilyInfo = function(token,fileInfo) {
            args = {
                TestAPI: "FormIt.Testing.GetRevitFamilyInfo",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Testing.Sleep = function(time) {
            args = {
                TestAPI: "FormIt.Testing.Sleep",
time: time
            };
            return callAsyncAPI(args);
        };
window.FormIt.Settings = window.FormIt.Settings || {};

        window.FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints = function(bNoInference) {
            args = {
                TestAPI: "FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints",
bNoInference: bNoInference
            };
            return callAsyncAPI(args);
        };

        window.FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints = function() {
            args = {
                TestAPI: "FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints"
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper = function(paths,ExcludeImages,ExcludeSectionPlanes) {
            args = {
                TestAPI: "WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper",
paths: paths,
        ExcludeImages: ExcludeImages,
        ExcludeSectionPlanes: ExcludeSectionPlanes
            };
            return callAsyncAPI(args);
        };

        window.WSM.Utils.GetUTCOffset = function(longitude,latitude) {
            args = {
                TestAPI: "WSM.Utils.GetUTCOffset",
longitude: longitude,
        latitude: latitude
            };
            return callAsyncAPI(args);
        };

        window.WSM.Test.HistoryObjects = function(historyObjects) {
            args = {
                TestAPI: "WSM.Test.HistoryObjects",
historyObjects: historyObjects
            };
            return callAsyncAPI(args);
        };

        window.WSM.Test.Size_t = function(nID,nArrayIDs) {
            args = {
                TestAPI: "WSM.Test.Size_t",
nID: nID,
        nArrayIDs: nArrayIDs
            };
            return callAsyncAPI(args);
        };

        window.WSM.Test.LoadFromFileWithSuspend = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin) {
            args = {
                TestAPI: "WSM.Test.LoadFromFileWithSuspend",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        dMaxDistanceFromOrigin: dMaxDistanceFromOrigin
            };
            return callAsyncAPI(args);
        };

        window.WSM.Test.ResetActiveHistory = function() {
            args = {
                TestAPI: "WSM.Test.ResetActiveHistory"
            };
            return callAsyncAPI(args);
        };
// This file is auto generated
WSM.nObjectType = WSM.nObjectType || {};
WSM.nObjectType.nUnSpecifiedType = 0;
WSM.nObjectType.nBodyType = 1;
WSM.nObjectType.nLumpType = 2;
WSM.nObjectType.nShellType = 3;
WSM.nObjectType.nFaceType = 4;
WSM.nObjectType.nLoopType = 5;
WSM.nObjectType.nCoedgeType = 6;
WSM.nObjectType.nEdgeType = 7;
WSM.nObjectType.nVertexType = 8;
WSM.nObjectType.nMaterialAttributeType = 9;
WSM.nObjectType.nMaterialType = 10;
WSM.nObjectType.nCircleAttributeType = 11;
WSM.nObjectType.nObjectPropertiesAttributeType = 12;
WSM.nObjectType.nTextureType = 13;
WSM.nObjectType.nLevelAttributeType = 14;
WSM.nObjectType.nLevelType = 15;
WSM.nObjectType.nSketchPropertiesType = 16;
WSM.nObjectType.nSplineCurveAttributeType = 17;
WSM.nObjectType.nCylinderSurfaceAttributeType = 18;
WSM.nObjectType.nSphereSurfaceAttributeType = 19;
WSM.nObjectType.nExtrudeSurfaceAttributeType = 20;
WSM.nObjectType.nImageType = 21;
WSM.nObjectType.nSatelliteDataAttributeType = 22;
WSM.nObjectType.nGroupType = 23;
WSM.nObjectType.nInstanceType = 24;
WSM.nObjectType.nLayerAttributeType = 25;
WSM.nObjectType.nLayerType = 26;
WSM.nObjectType.nGeneratedGeometryInformationType = 27;
WSM.nObjectType.nFaceUVDataAttributeType = 28;
WSM.nObjectType.nEdgeStyleAttributeType = 29;
WSM.nObjectType.nBlendAttributeType = 30;
WSM.nObjectType.nStringAttributeType = 31;
WSM.nObjectType.nMeshType = 32;
WSM.nObjectType.nLineMeshType = 33;
WSM.nObjectType.nPointMeshType = 34;
WSM.nObjectType.nNumObjectTypes = 35;
WSM.nFileType = WSM.nFileType || {};
WSM.nFileType.nFileTypeBinaryWSM = 0;
WSM.nFileType.nFileTypeSAT = 1;
WSM.nFileType.nFileTypeSTL = 2;
WSM.nFileType.nFileTypeOBJ = 3;
WSM.nFileType.nFileTypeDWG = 4;
WSM.nFileType.nFileTypeLMV = 5;
WSM.nFileType.nFileTypeThreejsJSON = 6;
WSM.nFileType.nFileTypeFBX = 7;
WSM.nFileType.nFileTypeSKP = 8;
WSM.nFileType.nFileTypeDAE = 9;
WSM.nFileType.nFileTypeDXF = 10;
WSM.nFileType.nFileTypeJSON = 11;
WSM.nFileType.nFileTypeATFX = 12;
WSM.nConvexity = WSM.nConvexity || {};
WSM.nConvexity.nConvexityUnset = 0;
WSM.nConvexity.nConvexitySmooth = 1;
WSM.nConvexity.nConvexityConcave = 2;
WSM.nConvexity.nConvexityConvex = 4;
WSM.nConvexity.nConvexityMixed = 8;
WSM.nConvexity.nConvexityNonManifold = 16;
WSM.nLoadingOptions = WSM.nLoadingOptions || {};
WSM.nLoadingOptions.NoOptions = 0;
WSM.nLoadingOptions.Merge = 1;
WSM.nLoadingOptions.PlaceOnGround = 2;
WSM.nLoadingOptions.RemoveDuplicate = 4;
WSM.nLoadingOptions.SmoothingByAngle = 8;
WSM.nLoadingOptions.CreateMesh = 16;
WSM.DeltaFlag = WSM.DeltaFlag || {};
WSM.DeltaFlag.nNotMine = 1;
WSM.DeltaFlag.nAddedToOutQueue = 2;
WSM.DeltaFlag.nSentToServer = 4;
WSM.DeltaFlag.nServerAccepted = 8;
WSM.nCopyBehavior = WSM.nCopyBehavior || {};
WSM.nCopyBehavior.nDoNotCopyNorShare = 0;
WSM.nCopyBehavior.nShareOrCopy = 1;
WSM.nCopyBehavior.nCopyAlways = 2;
WSM.nCopyBehavior.nNumCopyBehaviors = 3;
WSM.nHistoryComparison = WSM.nHistoryComparison || {};
WSM.nHistoryComparison.nIdentical = 0;
WSM.nHistoryComparison.nLessAcceptedDeltas = 1;
WSM.nHistoryComparison.nMoreAcceptedDeltas = 2;
WSM.nHistoryComparison.nMoreLocalDeltas = 4;
WSM.nHistoryComparison.nLocalActiveDeltaLower = 8;
WSM.nHistoryComparison.nLocalActiveDeltaHigher = 16;
WSM.nHistoryComparison.nOutOfSync = 32;
WSM.ApiProgress = WSM.ApiProgress || {};
FormIt.ContextMenuAction = FormIt.ContextMenuAction || {};
FormIt.ContextMenuAction.None = 0;
FormIt.ContextMenuAction.Array = 1;
FormIt.ContextMenuAction.BoolSubtract = 2;
FormIt.ContextMenuAction.BoolUnion = 3;
FormIt.ContextMenuAction.Copy = 4;
FormIt.ContextMenuAction.Delete = 5;
FormIt.ContextMenuAction.Lasso = 6;
FormIt.ContextMenuAction.Merge = 7;
FormIt.ContextMenuAction.Move = 8;
FormIt.ContextMenuAction.OffsetFace = 9;
FormIt.ContextMenuAction.FlattenFaces = 10;
FormIt.ContextMenuAction.Paste = 11;
FormIt.ContextMenuAction.ReverseFace = 12;
FormIt.ContextMenuAction.Rotate = 13;
FormIt.ContextMenuAction.SetAxes = 14;
FormIt.ContextMenuAction.Scale = 15;
FormIt.ContextMenuAction.Taper = 16;
FormIt.ContextMenuAction.UnSmoothEdges = 17;
FormIt.ContextMenuAction.GroupCreate = 18;
FormIt.ContextMenuAction.GroupUngroup = 19;
FormIt.ContextMenuAction.GroupUngroupAll = 20;
FormIt.ContextMenuAction.GroupMakeUnique = 21;
FormIt.ContextMenuAction.GroupEditInContext = 22;
FormIt.ContextMenuAction.GroupEndEditInContext = 23;
FormIt.ContextMenuAction.SmoothEdges = 24;
FormIt.ContextMenuAction.ExtrudeEdges = 25;
FormIt.ContextMenuAction.OffsetEdges = 26;
FormIt.ContextMenuAction.ResetAxes = 27;
FormIt.ContextMenuAction.Mirror = 28;
FormIt.ContextMenuAction.LinearMeasure = 29;
FormIt.ContextMenuAction.AngularMeasure = 30;
FormIt.ContextMenuAction.GroupExitToParent = 31;
FormIt.ContextMenuAction.ObjectsToMeshes = 32;
FormIt.ContextMenuAction.MeshesToObjects = 33;
FormIt.ContextMenuAction.NonUniformScale = 34;
FormIt.ContextMenuAction.EditTextures = 35;
FormIt.ContextMenuAction.AlignCameraWithFace = 36;
FormIt.ContextMenuAction.EditCircle = 37;
FormIt.ContextMenuAction.EditSpline = 38;
FormIt.ContextMenuAction.NumContextMenuActions = 39;
FormIt.MaxContextMenuItems = 16;
FormIt.ContextMenuActionLocation = FormIt.ContextMenuActionLocation || {};
FormIt.ContextMenuActionLocation.Delete = 0;
FormIt.ContextMenuActionLocation.Rotate = 1;
FormIt.ContextMenuActionLocation.Lasso = 1;
FormIt.ContextMenuActionLocation.Scale = 2;
FormIt.ContextMenuActionLocation.SetAxes = 2;
FormIt.ContextMenuActionLocation.NonUniformScale = 3;
FormIt.ContextMenuActionLocation.ResetAxes = 3;
FormIt.ContextMenuActionLocation.Array = 4;
FormIt.ContextMenuActionLocation.Paste = 5;
FormIt.ContextMenuActionLocation.Copy = 6;
FormIt.ContextMenuActionLocation.EditTextures = 7;
FormIt.ContextMenuActionLocation.EditCircle = 7;
FormIt.ContextMenuActionLocation.EditSpline = 7;
FormIt.ContextMenuActionLocation.Mirror = 8;
FormIt.ContextMenuActionLocation.ObjectsToMeshes = 9;
FormIt.ContextMenuActionLocation.MeshesToObjects = 9;
FormIt.ContextMenuActionLocation.ReverseFace = 10;
FormIt.ContextMenuActionLocation.Merge = 10;
FormIt.ContextMenuActionLocation.ExtrudeEdges = 10;
FormIt.ContextMenuActionLocation.GroupUngroupAll = 10;
FormIt.ContextMenuActionLocation.AngularMeasure = 10;
FormIt.ContextMenuActionLocation.GroupUngroup = 11;
FormIt.ContextMenuActionLocation.BoolUnion = 11;
FormIt.ContextMenuActionLocation.OffsetFace = 11;
FormIt.ContextMenuActionLocation.FlattenFaces = 11;
FormIt.ContextMenuActionLocation.OffsetEdges = 11;
FormIt.ContextMenuActionLocation.LinearMeasure = 11;
FormIt.ContextMenuActionLocation.GroupMakeUnique = 12;
FormIt.ContextMenuActionLocation.Taper = 12;
FormIt.ContextMenuActionLocation.BoolSubtract = 12;
FormIt.ContextMenuActionLocation.SmoothEdges = 12;
FormIt.ContextMenuActionLocation.UnSmoothEdges = 12;
FormIt.ContextMenuActionLocation.GroupEditInContext = 13;
FormIt.ContextMenuActionLocation.GroupEndEditInContext = 13;
FormIt.ContextMenuActionLocation.Move = 13;
FormIt.ContextMenuActionLocation.GroupCreate = 14;
FormIt.ContextMenuActionLocation.GroupExitToParent = 14;
FormIt.ContextMenuActionLocation.AlignCameraWithFace = 15;
FormIt.ContextMenuActionLocation.InvalidContextMenuLocation = 16;
FormIt.ToolType = FormIt.ToolType || {};
FormIt.ToolType.NONE = 0;
FormIt.ToolType.CAMERA_ORBIT = 1;
FormIt.ToolType.CAMERA_PAN = 2;
FormIt.ToolType.CAMERA_ZOOM = 3;
FormIt.ToolType.KEYBOARD_SHORTCUTS = 4;
FormIt.ToolType.SELECTION = 5;
FormIt.ToolType.CREATE_CUBE = 6;
FormIt.ToolType.CREATE_PYRAMID = 7;
FormIt.ToolType.CREATE_DOME = 8;
FormIt.ToolType.CREATE_ROOF = 9;
FormIt.ToolType.CREATE_CYLINDER = 10;
FormIt.ToolType.DRAG_FACE = 11;
FormIt.ToolType.POLYLINE = 12;
FormIt.ToolType.RECTANGLE = 13;
FormIt.ToolType.CIRCLE = 14;
FormIt.ToolType.SET_AXES = 15;
FormIt.ToolType.TRANSLATION = 16;
FormIt.ToolType.ARC = 17;
FormIt.ToolType.SCALE_FACE = 18;
FormIt.ToolType.ROTATE_FACE = 19;
FormIt.ToolType.SPLINE = 20;
FormIt.ToolType.ROTATION = 21;
FormIt.ToolType.PASTE = 22;
FormIt.ToolType.SCALE_OBJECTS = 23;
FormIt.ToolType.OFFSET_FACE = 24;
FormIt.ToolType.TAPER_FACE = 25;
FormIt.ToolType.PAINTBRUSH = 26;
FormIt.ToolType.AREA_SELECTION = 27;
FormIt.ToolType.MERGE = 28;
FormIt.ToolType.REVERSE_FACE = 29;
FormIt.ToolType.GROUP = 30;
FormIt.ToolType.GROUP_CONTEXTMENU = 31;
FormIt.ToolType.UNGROUP = 32;
FormIt.ToolType.UNGROUP_CONTEXTMENU = 33;
FormIt.ToolType.UNGROUP_ALL = 34;
FormIt.ToolType.UNGROUP_ALL_CONTEXTMENU = 35;
FormIt.ToolType.GROUP_FLATTEN = 36;
FormIt.ToolType.GROUP_MAKE_UNIQUE = 37;
FormIt.ToolType.GROUP_MAKE_UNIQUE_CONTEXTMENU = 38;
FormIt.ToolType.GROUP_EDIT_IN_CONTEXT = 39;
FormIt.ToolType.GROUP_EDIT_IN_CONTEXT_CONTEXTMENU = 40;
FormIt.ToolType.FILTERED_SELECTION = 41;
FormIt.ToolType.FIRST_PERSON_CAMERA = 42;
FormIt.ToolType.HISTORY_PLACEMENT = 43;
FormIt.ToolType.SOLAR_RADIATION_SELECTION = 44;
FormIt.ToolType.SOLAR_RADIATION_AREA_SELECTION = 45;
FormIt.ToolType.JOIN = 46;
FormIt.ToolType.CUT = 47;
FormIt.ToolType.SWEEP = 48;
FormIt.ToolType.OFFSET_BODY = 49;
FormIt.ToolType.COVER_EDGES = 50;
FormIt.ToolType.JOIN_CONTEXTMENU = 51;
FormIt.ToolType.CUT_CONTEXTMENU = 52;
FormIt.ToolType.LOFT_EDGES = 53;
FormIt.ToolType.SOLAR_RADIATION_MEASURE = 54;
FormIt.ToolType.EXTRUDE_EDGES = 55;
FormIt.ToolType.OFFSET_EDGES = 56;
FormIt.ToolType.PLACE_LCS = 57;
FormIt.ToolType.SHELL_BODY = 58;
FormIt.ToolType.MIRROR = 59;
FormIt.ToolType.BLEND = 60;
FormIt.ToolType.LINEAR_MEASURE = 61;
FormIt.ToolType.ANGULAR_MEASURE = 62;
FormIt.ToolType.QUICK_SWIPE_DELETE = 63;
FormIt.ToolType.CAMERA_SWIVEL = 64;
FormIt.ToolType.EDIT_CIRCLE = 65;
FormIt.ToolType.EDIT_SPLINE = 66;
FormIt.ToolType.NON_UNIFORM_SCALE_OBJECTS = 67;
FormIt.ToolType.ARCCENTERRADIUS = 68;
FormIt.ToolType.MATERIALPICKER = 69;
FormIt.ToolType.SECTION_PLANE = 70;
FormIt.ToolType.ARRAY = 71;
FormIt.ToolType.MOVE = 72;
FormIt.ToolType.COPY = 73;
FormIt.ToolType.DELETE_OBJECT = 74;
FormIt.ToolType.UNSMOOTH_EDGES = 75;
FormIt.ToolType.SMOOTH_EDGES = 76;
FormIt.ToolType.RESET_AXES = 77;
FormIt.ToolType.EXIT_TO_PARENT = 78;
FormIt.ToolType.LASSO_SELECTION = 79;
FormIt.ToolType.TRANSLATION_IMPLICIT = 80;
FormIt.ToolType.FLATTEN_FACES = 81;
FormIt.ToolType.OBJECTS_TO_MESHES = 82;
FormIt.ToolType.MESHES_TO_OBJECTS = 83;
FormIt.ToolType.EDIT_TEXTURES = 84;
FormIt.ToolType.ALIGN_WITH_FACE = 85;
FormIt.ToolType.DYNAMOSELECTION = 86;
FormIt.ToolType.POLYGON = 87;
FormIt.ToolType.OFFSET_LINE = 88;
FormIt.ToolType.CONFIRM_ACTION = 89;
FormIt.ToolType.NUM_TOOLS = 90;
WSM.Utils = WSM.Utils || {};
WSM.Utils.CurveType = WSM.Utils.CurveType || {};
WSM.Utils.CurveType.Unknown = 0;
WSM.Utils.CurveType.Line = 1;
WSM.Utils.CurveType.Circle = 2;
WSM.Utils.CurveType.Spline = 3;
WSM.Utils.SurfaceType = WSM.Utils.SurfaceType || {};
WSM.Utils.SurfaceType.Unknown = 0;
WSM.Utils.SurfaceType.Plane = 1;
WSM.Utils.SurfaceType.Cylinder = 2;
WSM.Utils.SurfaceType.Sphere = 3;
WSM.Utils.SurfaceType.Extrude = 4;
WSM.Utils.SurfaceType.Blend = 5;
WSM.Utils.SelectionLevel = WSM.Utils.SelectionLevel || {};
WSM.Utils.SelectionLevel.BreakAtJunctionNonSmooth = 0;
WSM.Utils.SelectionLevel.BreakAtJunction = 1;
WSM.Utils.SelectionLevel.ConnectedFacesVariant = 2;
WSM.Utils.SelectionLevel.ConnectedFacesComponents = 3;
WSM.Utils.SelectionLevel.ConnectedFacesVariantComponents = 4;
WSM.Utils.SelectionLevel.AllConnected = 5;
WSM.Utils.TooltipType = WSM.Utils.TooltipType || {};
WSM.Utils.TooltipType.TOOLTIP = 0;
WSM.Utils.TooltipType.STATUS = 1;
WSM.Utils.TooltipType.NONE = 2;
WSM.nSubObjectType = WSM.nSubObjectType || {};
WSM.nSubObjectType.EdgeMidPoint = 0;
WSM.nSubObjectType.FaceCentroid = 1;
WSM.nSubObjectType.NONE = 2;
WSM.nSubObjectType.OnLevel = 3;
WSM.nSubObjectType.MeshMidPoint = 4;
WSM.nSubObjectType.MeshVertex = 5;
WSM.nSubObjectType.CircleCenter = 6;
WSM.Utils = WSM.Utils || {};
WSM.Utils = WSM.Utils || {};
WSM.Utils.CoordSystem = WSM.Utils.CoordSystem || {};
WSM.Utils.CoordSystem.HCS = 0;
WSM.Utils.CoordSystem.LCS = 1;
WSM.Utils.CoordSystem.WHCS = 2;
WSM.Utils.CoordSystem.WLCS = 3;
FormIt.LibraryType = FormIt.LibraryType || {};
FormIt.LibraryType.SKETCH = 0;
FormIt.LibraryType.APPLICATION = 1;
FormIt.LibraryType.BUNDLE = 2;
FormIt.LinearFormatType = FormIt.LinearFormatType || {};
FormIt.LinearFormatType.kBestFit = 0;
FormIt.LinearFormatType.kImperialFeetInches = 1;
FormIt.LinearFormatType.kImperialFeetFractional = 2;
FormIt.LinearFormatType.kMetricCentimeter = 3;
FormIt.LinearFormatType.kMetricMeter = 4;
FormIt.LinearFormatType.kMetricMillimeter = 5;
FormIt.LinearFormatType.kImperialInches = 6;
FormIt.NotificationType = FormIt.NotificationType || {};
FormIt.NotificationType.Unspecified = 0;
FormIt.NotificationType.Information = 1;
FormIt.NotificationType.Warning = 2;
FormIt.NotificationType.Error = 3;
FormIt.NotificationType.Success = 4;
FormIt.SolidRendererFlags = FormIt.SolidRendererFlags || {};
FormIt.SolidRendererFlags.NONE = 0;
FormIt.SolidRendererFlags.OVERSHOOT_SILHOUETTE_AND_DRAFTING = 1;
FormIt.SolidRendererFlags.DRAFTING_ALWAYS_VISIBLE = 2;
FormIt.SolidRendererFlags.SKETCHY_EDGES = 4;
FormIt.SolidRendererFlags.AMBIENT_SHADOWS = 8;
FormIt.SolidRendererFlags.HIDE_EDGES = 16;
FormIt.SolidRendererFlags.FACE_SIDES = 32;
FormIt.SolidRendererFlags.THIN_EDGES = 64;
FormIt.SolidRendererFlags.NON_MANIFOLD_EDGES = 128;
FormIt.SolidRendererFlags.HIDE_SILHOUETTE = 256;
FormIt.SolidRendererFlags.USE_FACE_BACK_MATERIALS = 512;
FormIt.SolidRendererFlags.USE_EDGE_MATERIALS = 1024;
FormIt.SolidRendererFlags.MONOTONE = 2048;
FormIt.SolidRendererFlags.HIDE_GROUND_PLANE = 4096;
FormIt.SolidRendererFlags.SECTIONPLANECOLOR = 8192;
FormIt.SolidRendererFlags.SHOW_GROUP_BBOX = 16384;
FormIt.SolidRendererFlags.HIDE_SKY_COLOR = 32768;
FormIt.SolidRendererFlags.HIDE_FOG = 65536;
FormIt.SolidRendererFlags.HIDE_WORK_PLANE = 131072;
FormIt.SortOrder = FormIt.SortOrder || {};
FormIt.SortOrder.Ascending = 0;
FormIt.SortOrder.Descending = 1;
FormIt.SortOrder.Unsorted = 2;
FormIt.UnitType = FormIt.UnitType || {};
FormIt.UnitType.kImperialFeetInches = 0;
FormIt.UnitType.kMetricMeter = 1;
FormIt.UnitType.kImperialInches = 2;
FormIt.UnitType.kMetricCentimeter = 3;
FormIt.UnitType.kMetricMillimeter = 4;
FormIt.UnitType.kUnitTypeInvalid = 5;
FormIt.KeyboardModifier = FormIt.KeyboardModifier || {};
FormIt.KeyboardModifier.NoModifier = 0;
FormIt.KeyboardModifier.ShiftModifier = 1;
FormIt.KeyboardModifier.ControlModifier = 2;
FormIt.KeyboardModifier.AltModifier = 4;
FormIt.KeyboardModifier.ControlShiftModifier = 3;
FormIt.KeyboardModifier.ControlAltModifier = 6;
FormIt.KeyboardModifier.AltShiftModifier = 5;
FormIt.KeyboardModifier.ControlAltShiftModifier = 7;
FormIt.MouseButton = FormIt.MouseButton || {};
FormIt.MouseButton.NONE = 0;
FormIt.MouseButton.LEFT = 1;
FormIt.MouseButton.RIGHT = 2;
FormIt.MouseButton.MIDDLE = 4;
FormIt.MouseButton.LEFTMIDDLE = 5;
FormIt.MouseButton.LEFTRIGHT = 3;
FormIt.MouseButton.MIDDLERIGHT = 6;
FormIt.MouseButton.LEFTMIDDLERIGHT = 7;
FormIt.Collaboration = FormIt.Collaboration || {};
FormIt.Dynamo = FormIt.Dynamo || {};
FormIt.SunLocationDataChange = FormIt.SunLocationDataChange || {};
FormIt.SunLocationDataChange.eLatitude = 1;
FormIt.SunLocationDataChange.eLongitude = 2;
FormIt.SunLocationDataChange.eSunLocationTime = 4;
FormIt.SunLocationDataChange.eUTCTimeZone = 8;
FormIt.SunLocationDataChange.eDSTOffset = 16;
FormIt.SunLocationDataChange.eSunLocationDay = 32;
FormIt.SunLocationDataChange.eSunLocationMonth = 64;
FormIt.SunLocationDataChange.eSunLocationYear = 128;
FormIt.SunLocationDataChange.eDSTEnabled = 256;
FormIt.Materials = FormIt.Materials || {};
FormIt.Materials.AttributeType = FormIt.Materials.AttributeType || {};
FormIt.Materials.AttributeType.kGloss = 0;
FormIt.Materials.AttributeType.kReflectionDirect = 1;
FormIt.Materials.AttributeType.kReflectionOblique = 2;
FormIt.Materials.MapType = FormIt.Materials.MapType || {};
FormIt.Materials.MapType.kNormalMap = 0;
FormIt.Materials.MapType.kOpacityMap = 1;
FormIt.CameraDirectionType = FormIt.CameraDirectionType || {};
FormIt.CameraDirectionType.DEFAULT = 0;
FormIt.CameraDirectionType.ZPOS = 1;
FormIt.CameraDirectionType.ZNEG = 2;
FormIt.CameraDirectionType.XPOS = 3;
FormIt.CameraDirectionType.XNEG = 4;
FormIt.CameraDirectionType.YPOS = 5;
FormIt.CameraDirectionType.YNEG = 6;
FormIt.CameraDirectionType.NUM_PROJECTION_TYPES = 7;
FormIt.CameraProjectionType = FormIt.CameraProjectionType || {};
FormIt.CameraProjectionType.PERSPECTIVE = 0;
FormIt.CameraProjectionType.ORTHOGRAPHIC = 1;
FormIt.SceneCaptureFlags = FormIt.SceneCaptureFlags || {};
FormIt.SceneCaptureFlags.None = 0;
FormIt.SceneCaptureFlags.CameraData = 1;
FormIt.SceneCaptureFlags.RendererData = 2;
FormIt.SceneCaptureFlags.SunLocationData = 4;
FormIt.SceneCaptureFlags.ViewItemsDeprecated = 8;
FormIt.SceneCaptureFlags.LayersList = 16;
FormIt.Layers = FormIt.Layers || {};
FormIt.ReadResult = FormIt.ReadResult || {};
FormIt.ReadResult.LOADED = 0;
FormIt.ReadResult.GOOD = 1;
FormIt.ReadResult.UNRECOGNIZED_FILETYPE = 2;
FormIt.ReadResult.UNRECOGNIZED_VERSION = 3;
FormIt.ReadResult.UNRECOGNIZED_OFFSET = 4;
FormIt.ReadResult.OLDERFILE = 5;
FormIt.ReadResult.BAD = 6;
FormIt.ReadResult.FAILED = 7;
FormIt.ReadResult.COULDNT_OPEN = 8;
FormIt.ReadResult.COULDNT_CREATE_IMAGE = 9;
FormIt.ReadResult.END_OF_FILE = 10;
FormIt.ReadResult.NONE = 11;
FormIt.WriteResult = FormIt.WriteResult || {};
FormIt.WriteResult.GOOD = 0;
FormIt.WriteResult.BAD = 1;
FormIt.WriteResult.UNRECOGNIZED_VERSION = 2;
FormIt.WriteResult.NONE = 3;
FormIt.RestoreResult = FormIt.RestoreResult || {};
FormIt.RestoreResult.NOTHING_TO_RESTORE = 0;
FormIt.RestoreResult.RESTORED = 1;
FormIt.RestoreResult.FAILED = 2;
FormIt.SaveOptions = FormIt.SaveOptions || {};
FormIt.SaveOptions.AllObjects = 0;
FormIt.SaveOptions.AllObjectsWithHistory = 1;
FormIt.SaveOptions.VisibleOnly = 2;
FormIt.SaveOptions.SelectedOnly = 3;
FormIt.SaveOptions.SelectedOnlyWorldCoords = 4;
FormIt.Entitlement = FormIt.Entitlement || {};
FormIt.Entitlement.Type = FormIt.Entitlement.Type || {};
FormIt.Entitlement.Type.None = 0;
FormIt.Entitlement.Type.FormitPro = 1;
FormIt.Entitlement.Type.FormitProTrial = 2;
FormIt.Entitlement.Type.FormitFree = 4;
FormIt.Entitlement.RespFormat = FormIt.Entitlement.RespFormat || {};
FormIt.Entitlement.RespFormat.XML = 0;
FormIt.Entitlement.RespFormat.Json = 1;
FormIt.BuildingType = FormIt.BuildingType || {};
FormIt.BuildingType.UNKNOWN = 0;
FormIt.BuildingType.AUTOMOTIVE_FACILITY = 1;
FormIt.BuildingType.CONVENTION_CENTER = 2;
FormIt.BuildingType.COURTHOUSE = 3;
FormIt.BuildingType.DATACENTER = 4;
FormIt.BuildingType.DINING_BAR_LOUNGE_OR_LEISURE = 5;
FormIt.BuildingType.DINING_CAFETERIA_FAST_FOOD = 6;
FormIt.BuildingType.DINING_FAMILY = 7;
FormIt.BuildingType.DORMITORY = 8;
FormIt.BuildingType.EXERCISE_CENTER = 9;
FormIt.BuildingType.FIRE_STATION = 10;
FormIt.BuildingType.GYMNASIUM = 11;
FormIt.BuildingType.HOSPITAL_OR_HEALTHCARE = 12;
FormIt.BuildingType.HOTEL = 13;
FormIt.BuildingType.LIBRARY = 14;
FormIt.BuildingType.MANUFACTURING = 15;
FormIt.BuildingType.MOTEL = 16;
FormIt.BuildingType.MOTION_PICTURE_THEATRE = 17;
FormIt.BuildingType.MULTIFAMILY = 18;
FormIt.BuildingType.MUSEUM = 19;
FormIt.BuildingType.OFFICE = 20;
FormIt.BuildingType.PARKING_GARAGE = 21;
FormIt.BuildingType.PENITENTIARY = 22;
FormIt.BuildingType.PERFORMING_ARTS_THEATER = 23;
FormIt.BuildingType.POLICE_STATION = 24;
FormIt.BuildingType.POST_OFFICE = 25;
FormIt.BuildingType.RELIGIOUS_BUILDING = 26;
FormIt.BuildingType.RETAIL = 27;
FormIt.BuildingType.SCHOOL_OR_UNIVERSITY = 28;
FormIt.BuildingType.SINGLE_FAMILY = 29;
FormIt.BuildingType.SPORTS_ARENA = 30;
FormIt.BuildingType.TOWNHALL = 31;
FormIt.BuildingType.TRANSPORTATION = 32;
FormIt.BuildingType.WAREHOUSE = 33;
FormIt.BuildingType.WORKSHOP = 34;
FormIt.BuildingType.COUNT = 35;
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.GBS = FormIt.Analysis.GBS || {};
FormIt.Analysis.GBS.Status = FormIt.Analysis.GBS.Status || {};
FormIt.Analysis.GBS.Status.NOTANALYSED = 0;
FormIt.Analysis.GBS.Status.ANALYZING = 1;
FormIt.Analysis.GBS.Status.ANALYSED = 2;
FormIt.Analysis.GBS.Status.WAITING_FOR_TRANSLATION = 3;
FormIt.Analysis.GBS.Status.COUNT = 4;
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.Statistics = FormIt.Statistics || {};
FormIt.Statistics.UITrackingTypes = FormIt.Statistics.UITrackingTypes || {};
FormIt.Statistics.UITrackingTypes.UNKNOWN = -1;
FormIt.Statistics.UITrackingTypes.SETTINGS = 0;
FormIt.Statistics.UITrackingTypes.SUN_SHADOW_SETTINGS = 1;
FormIt.Statistics.UITrackingTypes.MATERIALS_PALETTE = 2;
FormIt.Statistics.UITrackingTypes.PROPERTIES_PANEL = 3;
FormIt.Statistics.UITrackingTypes.LEVELS_PANEL = 4;
FormIt.Statistics.UITrackingTypes.BPA_PANEL = 5;
FormIt.Statistics.UITrackingTypes.LOCATION = 6;
FormIt.Statistics.UITrackingTypes.BENCHMARK_API = 7;
FormIt.Statistics.UITrackingTypes.HELP = 8;
FormIt.Statistics.UITrackingTypes.GET_SUPPORT = 9;
FormIt.Statistics.UITrackingTypes.OPEN_FORMIT_BLOG = 10;
FormIt.Statistics.UITrackingTypes.LOGIN = 11;
FormIt.Statistics.UITrackingTypes.LOGOUT = 12;
FormIt.Statistics.UITrackingTypes.NEW_SKETCH = 13;
FormIt.Statistics.UITrackingTypes.OPEN_GALLERY = 14;
FormIt.Statistics.UITrackingTypes.SAVE_SKETCH = 15;
FormIt.Statistics.UITrackingTypes.SAVE_AS = 16;
FormIt.Statistics.UITrackingTypes.MATERIAL_START_EDIT = 17;
FormIt.Statistics.UITrackingTypes.LOAD_CUSTOM_TEXTURE = 18;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_GET_STATIONS = 19;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_LOAD_STATION = 20;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_LOAD_GRAPH = 21;
FormIt.Statistics.UITrackingTypes.GBS_BPA_LOAD_GRAPH = 22;
FormIt.Statistics.UITrackingTypes.GETTING_STARTED = 23;
FormIt.Statistics.UITrackingTypes.ABOUT_FORMIT = 24;
FormIt.Statistics.UITrackingTypes.KEYBOARD_SHORTCUTS = 25;
FormIt.Statistics.UITrackingTypes.SAVE_SUCCESSFUL = 26;
FormIt.Statistics.UITrackingTypes.COLLABORATION_REMOVE_GUEST = 27;
FormIt.Statistics.UITrackingTypes.OPEN_FORMIT_SURVEY = 28;
FormIt.Statistics.UITrackingTypes.CONTENT_LIBRARY_PANEL = 29;
FormIt.Statistics.UITrackingTypes.COLLABORATION_PANEL = 30;
FormIt.Statistics.UITrackingTypes.CONTENT_LIBRARY_IMPORT_LOCAL = 31;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS = 32;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS_START_ANALYSIS = 33;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS_CLOSE = 34;
FormIt.Statistics.UITrackingTypes.PRO_MENU_OPEN = 35;
FormIt.Statistics.UITrackingTypes.PRO_START_TRIAL = 36;
FormIt.Statistics.UITrackingTypes.PRO_BUY_LINK = 37;
FormIt.Statistics.UITrackingTypes.LAYERS_PANEL = 38;
FormIt.Statistics.UITrackingTypes.SCENES_PANEL = 39;
FormIt.Statistics.UITrackingTypes.IMPORT_MATERIAL = 40;
FormIt.Statistics.UITrackingTypes.HELIUM_START = 41;
FormIt.Statistics.UITrackingTypes.HELIUM_HEARTBEAT = 42;
FormIt.Statistics.UITrackingTypes.HELIUM_STOP = 43;
FormIt.Statistics.UITrackingTypes.SAVE_SKETCH_LOCAL = 44;
FormIt.Statistics.UITrackingTypes.SAVE_AS_LOCAL = 45;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL = 46;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXM = 47;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXMF = 48;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXMB = 49;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_DWG = 50;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_FBX = 51;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_OBJ = 52;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_SAT = 53;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_SKP = 54;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_STL = 55;
FormIt.Statistics.UITrackingTypes.EXPORT_LOCAL = 56;
FormIt.Statistics.UITrackingTypes.IMPORT_LOCAL = 57;
FormIt.Statistics.UITrackingTypes.RENAME = 58;
FormIt.Statistics.UITrackingTypes.DYNAMO_PANEL = 59;
FormIt.Statistics.UITrackingTypes.VISUAL_STYLE_PANEL = 60;
FormIt.Statistics.UITrackingTypes.GROUPS_TREE_PANEL = 61;
FormIt.Statistics.UITrackingTypes.UNDO_MANAGER_PANEL = 62;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_BUTTON = 63;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_BAKE = 64;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_EDIT = 65;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_LAUNCH = 66;
FormIt.Statistics.UITrackingTypes.DYNAMO_PROPS_RUN_GRAPH = 67;
FormIt.Statistics.UITrackingTypes.DYNAMO_PROPS_EDIT_IN_DYNAMO = 68;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL = 69;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXM = 70;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXMF = 71;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXMB = 72;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_DWG = 73;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_FBX = 74;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_OBJ = 75;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_SAT = 76;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_SKP = 77;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_STL = 78;
FormIt.Statistics.UITrackingTypes.EXPORT_BIM360DOCS = 79;
FormIt.Statistics.UITrackingTypes.WEATHER_PANEL = 80;
FormIt.Statistics.UITrackingTypes.RENDER_PANEL = 81;
FormIt.Statistics.UITrackingTypes.IMPORT_MODEL_CLOUD = 82;
FormIt.Statistics.UITrackingTypes.LOAD_PLUGIN = 83;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN = 84;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXM = 85;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXMF = 86;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXMB = 87;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_DWG = 88;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_FBX = 89;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_OBJ = 90;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_SAT = 91;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_SKP = 92;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_STL = 93;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_SAVE = 94;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_SAVEAS = 95;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_VIEWFILES = 96;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_EXPORT = 97;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_FINISHED_UPLOAD = 98;
FormIt.Statistics.UITrackingTypes.BIM360_CONTENT_LIBRARY_IMPORT = 99;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN_LOAD_RETRY_START = 100;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN_LOAD_RETRY_FAILED = 101;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN__LOAD_RETRY_SUCCESS = 102;
FormIt.Statistics.UITrackingTypes.LOCALE_MANIFEST_UPDATED = 103;
FormIt.Statistics.UITrackingTypes.LOCALE_DIR_NOT_FOUND = 104;
FormIt.Statistics.UITrackingTypes.LOCALE_LANG_FOUND = 105;
FormIt.Statistics.UITrackingTypes.LOCALE_LANG_NOT_FOUND = 106;
FormIt.Statistics.UITrackingTypes.LOCALE_MENU_SET = 107;
FormIt.Statistics.UITrackingTypes.SEND_TO_REVIT = 108;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_OPEN = 109;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_CLOSE = 110;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_FAIL = 111;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_NO_DYN_PORT = 112;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_NO_STATIC_PORT = 113;
FormIt.Files = FormIt.Files || {};
FormIt.Files.Action = FormIt.Files.Action || {};
FormIt.Files.Action.Open = 0;
FormIt.Files.Action.Save = 1;
FormIt.Files.Action.Export = 2;
FormIt.Files.Action.Import = 3;
FormIt.Files.ContentType = FormIt.Files.ContentType || {};
FormIt.Files.ContentType.Type_Image = 0;
FormIt.Files.ContentType.Type_3DModel = 1;
FormIt.Files.Types = FormIt.Files.Types || {};
FormIt.Files.Types.AXM = 0;
FormIt.Files.Types.AXMF = 1;
FormIt.Files.Types.AXMB = 2;
FormIt.Files.Types.FBX = 3;
FormIt.Files.Types.OBJ = 4;
FormIt.Files.Types.SAT = 5;
FormIt.Files.Types.STL = 6;
FormIt.Files.Types.WSM = 7;
FormIt.Files.Types.LMV = 8;
FormIt.Files.Types.SKP = 9;
FormIt.Files.Types.AutocadDXF = 10;
FormIt.Files.Types.AutocadDWG = 11;
FormIt.Files.Types.ColladaDAE = 12;
FormIt.Files.Types.PNG = 13;
FormIt.Files.Types.JPG = 14;
FormIt.Files.Types.JPEG = 15;
FormIt.Files.Types.SPD = 16;
FormIt.Files.Types.JS = 17;
FormIt.Files.Types.JSON = 18;
FormIt.Files.Types.ATFX = 19;
FormIt.UI = FormIt.UI || {};
FormIt.UI.FormItDialogBox = FormIt.UI.FormItDialogBox || {};
FormIt.UI.FormItDialogBox.Local = 0;
FormIt.UI.FormItDialogBox.BIM360Gallery = 1;
FormIt.UI.FormItDialogBox.BIM360ContentLibrary = 2;
FormIt.UI.FormItDialogBox.LocalContentLibrary = 3;
FormIt.UI.CursorType = FormIt.UI.CursorType || {};
FormIt.UI.CursorType.kPickArrow = 0;
FormIt.UI.CursorType.kPickArrowPlusMinus = 1;
FormIt.UI.CursorType.kForbidden = 2;
FormIt.UI.CursorType.kCameraOrbit = 3;
FormIt.UI.CursorType.kCameraPan = 4;
FormIt.UI.CursorType.kCameraSwivel = 5;
FormIt.UI.CursorType.kCameraZoom = 6;
FormIt.UI.CursorType.kGrip = 7;
FormIt.UI.CursorType.kTextEdit = 8;
FormIt.UI.CursorType.kNumCursorTypes = 9;
FormIt.Forge = FormIt.Forge || {};
FormIt.Forge.ForgeMode = FormIt.Forge.ForgeMode || {};
FormIt.Forge.ForgeMode.Default = 0;
FormIt.Forge.ForgeMode.Test = 1;
FormIt.Forge.ForgeMode.Journal = 2;
FormIt.Forge.ErrorCode = FormIt.Forge.ErrorCode || {};
FormIt.Forge.ErrorCode.Success = 0;
FormIt.Forge.ErrorCode.Forbidden = 1;
FormIt.Forge.ErrorCode.Unauthorized = 2;
FormIt.Forge.ErrorCode.BadInput = 3;
FormIt.Forge.ErrorCode.ElementNotFound = 4;
FormIt.Forge.ErrorCode.AlreadyExists = 5;
FormIt.Forge.ErrorCode.MalformedResponse = 6;
FormIt.Forge.ErrorCode.InternalError = 7;
FormIt.Forge.ErrorCode.ConnectionError = 8;
FormIt.Forge.ErrorCode.ProjectNotFound = 9;
FormIt.Forge.ErrorCode.Pending = 10;
FormIt.Forge.ErrorCode.ReceiveHubProjectFailed = 11;
FormIt.Forge.ErrorCode.ReceiveFileListFailed = 12;
FormIt.Forge.ErrorCode.ReceiveEmptyFileList = 13;
FormIt.Forge.ErrorCode.OpenFileFailed = 14;
FormIt.Forge.ErrorCode.NoBIM360DocsEntitlements = 15;
FormIt.Forge.ErrorCode.SavingInProgress = 16;
FormIt.Forge.ErrorCode.ExportingInProgress = 17;
FormIt.Forge.ErrorCode.FileSaveSuccess = 18;
FormIt.Forge.ErrorCode.FileExportSuccess = 19;
FormIt.Forge.ErrorCode.FileSaveFailed = 20;
FormIt.Forge.ErrorCode.FileExportFailed = 21;
FormIt.Forge.ErrorCode.GetOAuthBearerTokenFailed = 22;
FormIt.Forge.ErrorCode.UnknownBIM360DocsException = 23;
FormIt.Forge.ErrorCode.CacheRefreshNeeded = 24;
FormIt.Forge.ErrorCode.FileUpdateDenied = 25;
FormIt.Forge.ErrorCode.ReceiveEmptyFileListContentLibrary = 26;
FormIt.Forge.ErrorCode.NoPermissionsToShowContent = 27;
FormIt.Forge.ErrorCode.NoPermissionsAndEmptyFileList = 28;
FormIt.Forge.ErrorCode.NoPermissionsAndEmptyFileListContentLibrary = 29;
FormIt.Forge.UI = FormIt.Forge.UI || {};
FormIt.AutoSave = FormIt.AutoSave || {};
FormIt.Web = FormIt.Web || {};
FormIt.Web.RequestMethod = FormIt.Web.RequestMethod || {};
FormIt.Web.RequestMethod.GET = 0;
FormIt.Web.RequestMethod.PUT = 1;
FormIt.Web.RequestMethod.POST = 2;
FormIt.Graphics = FormIt.Graphics || {};
FormIt.Utils = FormIt.Utils || {};
WSM.nFileType = WSM.nFileType || {};
WSM.nFileType.nFileTypeBinaryWSM = 0;
WSM.nFileType.nFileTypeSAT = 1;
WSM.nFileType.nFileTypeSTL = 2;
WSM.nFileType.nFileTypeOBJ = 3;
WSM.nFileType.nFileTypeDWG = 4;
WSM.nFileType.nFileTypeLMV = 5;
WSM.nFileType.nFileTypeThreejsJSON = 6;
WSM.nFileType.nFileTypeFBX = 7;
WSM.nFileType.nFileTypeSKP = 8;
WSM.nFileType.nFileTypeDAE = 9;
WSM.nFileType.nFileTypeDXF = 10;
WSM.nFileType.nFileTypeJSON = 11;
WSM.nFileType.nFileTypeATFX = 12;
FormIt.Files = FormIt.Files || {};
WSM.LineInferenceType = WSM.LineInferenceType || {};
WSM.LineInferenceType.Xaxis = 0;
WSM.LineInferenceType.XaxisFromPt = 1;
WSM.LineInferenceType.Yaxis = 2;
WSM.LineInferenceType.YaxisFromPt = 3;
WSM.LineInferenceType.Zaxis = 4;
WSM.LineInferenceType.ZaxisFromPt = 5;
WSM.LineInferenceType.Perp = 6;
WSM.LineInferenceType.PerpFromPt = 7;
WSM.LineInferenceType.Parallel = 8;
WSM.LineInferenceType.WSMEdge = 9;
WSM.GripType = WSM.GripType || {};
WSM.GripType.CURRENTPOINT = 0;
WSM.GripType.PLACEDPOINT = 1;
WSM.GripType.MIDPOINT = 2;
WSM.GripType.ARROW = 3;
WSM.GripType.DOUBLEARROW = 4;
WSM.GripType.DOUBLEARROWSPACED = 5;
WSM.GripType.ORIGIN = 6;
WSM.GripType.AXIS = 7;
WSM.GripType.SOURCE = 8;
WSM.GripType.DEST = 9;
WSM.GripType.ARROW3D = 10;
WSM.GripType.DOUBLEARROW3D = 11;
WSM.GripType.ROTATIONARROW = 12;
WSM.GripType.ROTATIONARROW3D = 13;
WSM.DimensionInSideType = WSM.DimensionInSideType || {};
WSM.DimensionInSideType.None = 0;
WSM.DimensionInSideType.Text = 1;
WSM.DimensionInSideType.RightVertical = 2;
WSM.DimensionInSideType.RightHorizontal = 4;
WSM.DimensionInSideType.RightArrow = 8;
WSM.DimensionInSideType.LeftVertical = 16;
WSM.DimensionInSideType.LeftHorizontal = 32;
WSM.DimensionInSideType.LeftArrow = 64;
WSM.Tools = WSM.Tools || {};
WSM.Tools.ToolType = WSM.Tools.ToolType || {};
WSM.Tools.ToolType.Arc = 0;
WSM.Tools.ToolType.Circle = 1;
WSM.Tools.ToolType.DragFace = 2;
WSM.Tools.ToolType.OffsetFace = 3;
WSM.Tools.ToolType.RotateFace = 4;
WSM.Tools.ToolType.ScaleFace = 5;
WSM.Tools.ToolType.TaperFace = 6;
WSM.Tools.ToolType.Placement = 7;
WSM.Tools.ToolType.Polyline = 8;
WSM.Tools.ToolType.Rectangle = 9;
WSM.Tools.ToolType.Rotation = 10;
WSM.Tools.ToolType.Scale = 11;
WSM.Tools.ToolType.Translation = 12;
WSM.Tools.ToolType.Spline = 13;
WSM.Tools.ToolType.ExtrudeEdges = 14;
WSM.Tools.ToolType.OffsetEdges = 15;
WSM.Tools.ToolType.LCSTool = 16;
WSM.Tools.ToolType.Mirror = 17;
WSM.Tools.ToolType.LinearMeasureTool = 18;
WSM.Tools.ToolType.AngularMeasureTool = 19;
WSM.Tools.ToolType.EditCircleTool = 20;
WSM.Tools.ToolType.EditSplineTool = 21;
WSM.Tools.ToolType.NonUniformScaleTool = 22;
WSM.Tools.ToolType.ArcCenterRadius = 23;
WSM.Tools.ToolType.FlattenFaces = 24;
WSM.Tools.ToolType.EditTextures = 25;
WSM.Tools.ToolType.Polygon = 26;
WSM.Tools.ToolType.OffsetLine = 27;
WSM.Tools.ToolType.NumToolTypes = 28;
WSM.Tools.ToolState = WSM.Tools.ToolState || {};
WSM.Tools.ToolState.FirstPt = 0;
WSM.Tools.ToolState.SecondPt = 1;
WSM.Tools.ToolState.ThirdPt = 2;
WSM.Tools.ToolState.WaitingForInput = 3;
WSM.Tools.ToolOperationMode = WSM.Tools.ToolOperationMode || {};
WSM.Tools.ToolOperationMode.PRIMARY = 0;
WSM.Tools.ToolOperationMode.SECONDARY = 1;
WSM.Tools.ExecutionType = WSM.Tools.ExecutionType || {};
WSM.Tools.ExecutionType.Unknown = 0;
WSM.Tools.ExecutionType.Executed = 1;
WSM.Tools.ExecutionType.NotExecuted = 2;
WSM.Tools.ResultType = WSM.Tools.ResultType || {};
WSM.Tools.ResultType.Good = 0;
WSM.Tools.ResultType.NoAppHelperRegistered = 1;
WSM.Tools.ResultType.BadToolType = 2;
WSM.Tools.ResultType.BadID = 3;
WSM.Tools.ResultType.BadValue = 4;
WSM.Tools.ResultType.BadIndex = 5;
WSM.Tools.ResultType.NumResultTypes = 6;
WSM.Tools.ResetReason = WSM.Tools.ResetReason || {};
WSM.Tools.ResetReason.UserCancelled = 0;
WSM.Tools.ResetReason.ModelChanged = 1;
WSM.Tools.ResetReason.OperationCompleted = 2;
WSM.Tools.ResetReason.OperationStarted = 3;
WSM.Tools.ToolReturn = WSM.Tools.ToolReturn || {};
WSM.Tools.ToolReturn.CONSUMED = 0;
WSM.Tools.ToolReturn.IGNORED = 1;
WSM.Tools.ToolReturn.KILLME = 2;
WSM.Tools = WSM.Tools || {};
WSM.Tools = WSM.Tools || {};
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.GBS = FormIt.Analysis.GBS || {};
FormIt.Collaboration = FormIt.Collaboration || {};
FormIt.Edit = FormIt.Edit || {};
FormIt.Entitlement = FormIt.Entitlement || {};
FormIt.Events = FormIt.Events || {};
FormIt.FileSystem = FormIt.FileSystem || {};
FormIt.Graphics = FormIt.Graphics || {};
FormIt.MaterialsLegacy = FormIt.MaterialsLegacy || {};
FormIt.Scripting = FormIt.Scripting || {};
FormIt.Statistics = FormIt.Statistics || {};
FormIt.StringConversion = FormIt.StringConversion || {};
FormIt.SunAndLocation = FormIt.SunAndLocation || {};
FormIt.Testing = FormIt.Testing || {};
FormIt.Tools = FormIt.Tools || {};
FormIt.ToolUI = FormIt.ToolUI || {};
FormIt.UI = FormIt.UI || {};
FormIt.Utils = FormIt.Utils || {};
FormIt.SectionPlanes = FormIt.SectionPlanes || {};
FormIt.SectionPlanes.Attributes = FormIt.SectionPlanes.Attributes || {};
FormIt.SectionPlanes.Materials = FormIt.SectionPlanes.Materials || {};
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.UndoManagement.Detail = FormIt.UndoManagement.Detail || {};
FormIt.AutoSave = FormIt.AutoSave || {};
FormIt.Web = FormIt.Web || {};
FormIt.FRS = FormIt.FRS || {};
FormIt.DebugMode = FormIt.DebugMode || {};
FormIt.Revit = FormIt.Revit || {};
FormIt.StringConversion = FormIt.StringConversion || {};
FormIt.Model = FormIt.Model || {};
FormIt.GroupEdit = FormIt.GroupEdit || {};
FormIt.ImageManager = FormIt.ImageManager || {};
FormIt.Levels = FormIt.Levels || {};
FormIt.Commands = FormIt.Commands || {};
FormIt.SectionPlanes = FormIt.SectionPlanes || {};
FormIt.Shortcuts = FormIt.Shortcuts || {};
FormIt.Tools = FormIt.Tools || {};
FormIt.Cameras = FormIt.Cameras || {};
FormIt.Graphics = FormIt.Graphics || {};
FormIt.VisualStyles = FormIt.VisualStyles || {};
FormIt.Selection = FormIt.Selection || {};
FormIt.Clipboard = FormIt.Clipboard || {};
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.Solar = FormIt.Analysis.Solar || {};
FormIt.Analysis.Solar.WeatherDataStatus = FormIt.Analysis.Solar.WeatherDataStatus || {};
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataNotLoaded = 0;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataLoaded = 1;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataNotAvailableForLocation = 2;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataFormatError = 3;
FormIt.Scenes = FormIt.Scenes || {};
FormIt.Layers = FormIt.Layers || {};
FormIt.MaterialProvider = FormIt.MaterialProvider || {};
FormIt.SketchMaterials = FormIt.SketchMaterials || {};
FormIt.SampleMaterials = FormIt.SampleMaterials || {};
FormIt.UI = FormIt.UI || {};
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.Files = FormIt.Files || {};
FormIt.Forge = FormIt.Forge || {};
FormIt.Forge.UI = FormIt.Forge.UI || {};
FormIt.Dynamo = FormIt.Dynamo || {};
FormIt.SunAndLocation = FormIt.SunAndLocation || {};
FormIt.Utils = FormIt.Utils || {};

    // Invalid ID
    WSM.INVALID_ID = 0xFFFFFFFF;
    // Invalid size
    WSM.INVALID_SIZE = 0xFFFFFFFF;

    // WSM Tolerances
    WSM.DISTANCE_TOL = 1.0e-6;
    WSM.DISTANCE_TOL2 = 1.0e-12;
    WSM.ANGLE_TOL = 1.0e-10;
    WSM.ANGLE_TOL2 = 1.0e-20;

    // Detla types
    WSM.ModelChangedDataType = {};
    WSM.ModelChangedDataType.RESET_HISTORY = -3;
    WSM.ModelChangedDataType.UNDO = -1;
    WSM.ModelChangedDataType.DELTA_CLOSED = 0;
    WSM.ModelChangedDataType.REDO = 1;
    WSM.ModelChangedDataType.FROM_COLLABORATION = 2;
    WSM.ModelChangedDataType.COLLAB_MULTI_DELTA = 3;
    WSM.ModelChangedDataType.CREATED_REFD_HISTORY = 4;
    WSM.ModelChangedDataType.DELETED_HISTORY = 5;
    WSM.ModelChangedDataType.DELTAS_MERGED = 6;
    WSM.ModelChangedDataType.DELETING_ALL_HISTORY = 7;
    WSM.ModelChangedDataType.REDO_DELTAS_DELETED = 8;
            // This file is auto generated
WSM.nObjectType = WSM.nObjectType || {};
WSM.nObjectType.nUnSpecifiedType = 0;
WSM.nObjectType.nBodyType = 1;
WSM.nObjectType.nLumpType = 2;
WSM.nObjectType.nShellType = 3;
WSM.nObjectType.nFaceType = 4;
WSM.nObjectType.nLoopType = 5;
WSM.nObjectType.nCoedgeType = 6;
WSM.nObjectType.nEdgeType = 7;
WSM.nObjectType.nVertexType = 8;
WSM.nObjectType.nMaterialAttributeType = 9;
WSM.nObjectType.nMaterialType = 10;
WSM.nObjectType.nCircleAttributeType = 11;
WSM.nObjectType.nObjectPropertiesAttributeType = 12;
WSM.nObjectType.nTextureType = 13;
WSM.nObjectType.nLevelAttributeType = 14;
WSM.nObjectType.nLevelType = 15;
WSM.nObjectType.nSketchPropertiesType = 16;
WSM.nObjectType.nSplineCurveAttributeType = 17;
WSM.nObjectType.nCylinderSurfaceAttributeType = 18;
WSM.nObjectType.nSphereSurfaceAttributeType = 19;
WSM.nObjectType.nExtrudeSurfaceAttributeType = 20;
WSM.nObjectType.nImageType = 21;
WSM.nObjectType.nSatelliteDataAttributeType = 22;
WSM.nObjectType.nGroupType = 23;
WSM.nObjectType.nInstanceType = 24;
WSM.nObjectType.nLayerAttributeType = 25;
WSM.nObjectType.nLayerType = 26;
WSM.nObjectType.nGeneratedGeometryInformationType = 27;
WSM.nObjectType.nFaceUVDataAttributeType = 28;
WSM.nObjectType.nEdgeStyleAttributeType = 29;
WSM.nObjectType.nBlendAttributeType = 30;
WSM.nObjectType.nStringAttributeType = 31;
WSM.nObjectType.nMeshType = 32;
WSM.nObjectType.nLineMeshType = 33;
WSM.nObjectType.nPointMeshType = 34;
WSM.nObjectType.nNumObjectTypes = 35;
WSM.nFileType = WSM.nFileType || {};
WSM.nFileType.nFileTypeBinaryWSM = 0;
WSM.nFileType.nFileTypeSAT = 1;
WSM.nFileType.nFileTypeSTL = 2;
WSM.nFileType.nFileTypeOBJ = 3;
WSM.nFileType.nFileTypeDWG = 4;
WSM.nFileType.nFileTypeLMV = 5;
WSM.nFileType.nFileTypeThreejsJSON = 6;
WSM.nFileType.nFileTypeFBX = 7;
WSM.nFileType.nFileTypeSKP = 8;
WSM.nFileType.nFileTypeDAE = 9;
WSM.nFileType.nFileTypeDXF = 10;
WSM.nFileType.nFileTypeJSON = 11;
WSM.nFileType.nFileTypeATFX = 12;
WSM.nConvexity = WSM.nConvexity || {};
WSM.nConvexity.nConvexityUnset = 0;
WSM.nConvexity.nConvexitySmooth = 1;
WSM.nConvexity.nConvexityConcave = 2;
WSM.nConvexity.nConvexityConvex = 4;
WSM.nConvexity.nConvexityMixed = 8;
WSM.nConvexity.nConvexityNonManifold = 16;
WSM.nLoadingOptions = WSM.nLoadingOptions || {};
WSM.nLoadingOptions.NoOptions = 0;
WSM.nLoadingOptions.Merge = 1;
WSM.nLoadingOptions.PlaceOnGround = 2;
WSM.nLoadingOptions.RemoveDuplicate = 4;
WSM.nLoadingOptions.SmoothingByAngle = 8;
WSM.nLoadingOptions.CreateMesh = 16;
WSM.DeltaFlag = WSM.DeltaFlag || {};
WSM.DeltaFlag.nNotMine = 1;
WSM.DeltaFlag.nAddedToOutQueue = 2;
WSM.DeltaFlag.nSentToServer = 4;
WSM.DeltaFlag.nServerAccepted = 8;
WSM.nCopyBehavior = WSM.nCopyBehavior || {};
WSM.nCopyBehavior.nDoNotCopyNorShare = 0;
WSM.nCopyBehavior.nShareOrCopy = 1;
WSM.nCopyBehavior.nCopyAlways = 2;
WSM.nCopyBehavior.nNumCopyBehaviors = 3;
WSM.nHistoryComparison = WSM.nHistoryComparison || {};
WSM.nHistoryComparison.nIdentical = 0;
WSM.nHistoryComparison.nLessAcceptedDeltas = 1;
WSM.nHistoryComparison.nMoreAcceptedDeltas = 2;
WSM.nHistoryComparison.nMoreLocalDeltas = 4;
WSM.nHistoryComparison.nLocalActiveDeltaLower = 8;
WSM.nHistoryComparison.nLocalActiveDeltaHigher = 16;
WSM.nHistoryComparison.nOutOfSync = 32;
WSM.ApiProgress = WSM.ApiProgress || {};
FormIt.ContextMenuAction = FormIt.ContextMenuAction || {};
FormIt.ContextMenuAction.None = 0;
FormIt.ContextMenuAction.Array = 1;
FormIt.ContextMenuAction.BoolSubtract = 2;
FormIt.ContextMenuAction.BoolUnion = 3;
FormIt.ContextMenuAction.Copy = 4;
FormIt.ContextMenuAction.Delete = 5;
FormIt.ContextMenuAction.Lasso = 6;
FormIt.ContextMenuAction.Merge = 7;
FormIt.ContextMenuAction.Move = 8;
FormIt.ContextMenuAction.OffsetFace = 9;
FormIt.ContextMenuAction.FlattenFaces = 10;
FormIt.ContextMenuAction.Paste = 11;
FormIt.ContextMenuAction.ReverseFace = 12;
FormIt.ContextMenuAction.Rotate = 13;
FormIt.ContextMenuAction.SetAxes = 14;
FormIt.ContextMenuAction.Scale = 15;
FormIt.ContextMenuAction.Taper = 16;
FormIt.ContextMenuAction.UnSmoothEdges = 17;
FormIt.ContextMenuAction.GroupCreate = 18;
FormIt.ContextMenuAction.GroupUngroup = 19;
FormIt.ContextMenuAction.GroupUngroupAll = 20;
FormIt.ContextMenuAction.GroupMakeUnique = 21;
FormIt.ContextMenuAction.GroupEditInContext = 22;
FormIt.ContextMenuAction.GroupEndEditInContext = 23;
FormIt.ContextMenuAction.SmoothEdges = 24;
FormIt.ContextMenuAction.ExtrudeEdges = 25;
FormIt.ContextMenuAction.OffsetEdges = 26;
FormIt.ContextMenuAction.ResetAxes = 27;
FormIt.ContextMenuAction.Mirror = 28;
FormIt.ContextMenuAction.LinearMeasure = 29;
FormIt.ContextMenuAction.AngularMeasure = 30;
FormIt.ContextMenuAction.GroupExitToParent = 31;
FormIt.ContextMenuAction.ObjectsToMeshes = 32;
FormIt.ContextMenuAction.MeshesToObjects = 33;
FormIt.ContextMenuAction.NonUniformScale = 34;
FormIt.ContextMenuAction.EditTextures = 35;
FormIt.ContextMenuAction.AlignCameraWithFace = 36;
FormIt.ContextMenuAction.EditCircle = 37;
FormIt.ContextMenuAction.EditSpline = 38;
FormIt.ContextMenuAction.NumContextMenuActions = 39;
FormIt.MaxContextMenuItems = 16;
FormIt.ContextMenuActionLocation = FormIt.ContextMenuActionLocation || {};
FormIt.ContextMenuActionLocation.Delete = 0;
FormIt.ContextMenuActionLocation.Rotate = 1;
FormIt.ContextMenuActionLocation.Lasso = 1;
FormIt.ContextMenuActionLocation.Scale = 2;
FormIt.ContextMenuActionLocation.SetAxes = 2;
FormIt.ContextMenuActionLocation.NonUniformScale = 3;
FormIt.ContextMenuActionLocation.ResetAxes = 3;
FormIt.ContextMenuActionLocation.Array = 4;
FormIt.ContextMenuActionLocation.Paste = 5;
FormIt.ContextMenuActionLocation.Copy = 6;
FormIt.ContextMenuActionLocation.EditTextures = 7;
FormIt.ContextMenuActionLocation.EditCircle = 7;
FormIt.ContextMenuActionLocation.EditSpline = 7;
FormIt.ContextMenuActionLocation.Mirror = 8;
FormIt.ContextMenuActionLocation.ObjectsToMeshes = 9;
FormIt.ContextMenuActionLocation.MeshesToObjects = 9;
FormIt.ContextMenuActionLocation.ReverseFace = 10;
FormIt.ContextMenuActionLocation.Merge = 10;
FormIt.ContextMenuActionLocation.ExtrudeEdges = 10;
FormIt.ContextMenuActionLocation.GroupUngroupAll = 10;
FormIt.ContextMenuActionLocation.AngularMeasure = 10;
FormIt.ContextMenuActionLocation.GroupUngroup = 11;
FormIt.ContextMenuActionLocation.BoolUnion = 11;
FormIt.ContextMenuActionLocation.OffsetFace = 11;
FormIt.ContextMenuActionLocation.FlattenFaces = 11;
FormIt.ContextMenuActionLocation.OffsetEdges = 11;
FormIt.ContextMenuActionLocation.LinearMeasure = 11;
FormIt.ContextMenuActionLocation.GroupMakeUnique = 12;
FormIt.ContextMenuActionLocation.Taper = 12;
FormIt.ContextMenuActionLocation.BoolSubtract = 12;
FormIt.ContextMenuActionLocation.SmoothEdges = 12;
FormIt.ContextMenuActionLocation.UnSmoothEdges = 12;
FormIt.ContextMenuActionLocation.GroupEditInContext = 13;
FormIt.ContextMenuActionLocation.GroupEndEditInContext = 13;
FormIt.ContextMenuActionLocation.Move = 13;
FormIt.ContextMenuActionLocation.GroupCreate = 14;
FormIt.ContextMenuActionLocation.GroupExitToParent = 14;
FormIt.ContextMenuActionLocation.AlignCameraWithFace = 15;
FormIt.ContextMenuActionLocation.InvalidContextMenuLocation = 16;
FormIt.ToolType = FormIt.ToolType || {};
FormIt.ToolType.NONE = 0;
FormIt.ToolType.CAMERA_ORBIT = 1;
FormIt.ToolType.CAMERA_PAN = 2;
FormIt.ToolType.CAMERA_ZOOM = 3;
FormIt.ToolType.KEYBOARD_SHORTCUTS = 4;
FormIt.ToolType.SELECTION = 5;
FormIt.ToolType.CREATE_CUBE = 6;
FormIt.ToolType.CREATE_PYRAMID = 7;
FormIt.ToolType.CREATE_DOME = 8;
FormIt.ToolType.CREATE_ROOF = 9;
FormIt.ToolType.CREATE_CYLINDER = 10;
FormIt.ToolType.DRAG_FACE = 11;
FormIt.ToolType.POLYLINE = 12;
FormIt.ToolType.RECTANGLE = 13;
FormIt.ToolType.CIRCLE = 14;
FormIt.ToolType.SET_AXES = 15;
FormIt.ToolType.TRANSLATION = 16;
FormIt.ToolType.ARC = 17;
FormIt.ToolType.SCALE_FACE = 18;
FormIt.ToolType.ROTATE_FACE = 19;
FormIt.ToolType.SPLINE = 20;
FormIt.ToolType.ROTATION = 21;
FormIt.ToolType.PASTE = 22;
FormIt.ToolType.SCALE_OBJECTS = 23;
FormIt.ToolType.OFFSET_FACE = 24;
FormIt.ToolType.TAPER_FACE = 25;
FormIt.ToolType.PAINTBRUSH = 26;
FormIt.ToolType.AREA_SELECTION = 27;
FormIt.ToolType.MERGE = 28;
FormIt.ToolType.REVERSE_FACE = 29;
FormIt.ToolType.GROUP = 30;
FormIt.ToolType.GROUP_CONTEXTMENU = 31;
FormIt.ToolType.UNGROUP = 32;
FormIt.ToolType.UNGROUP_CONTEXTMENU = 33;
FormIt.ToolType.UNGROUP_ALL = 34;
FormIt.ToolType.UNGROUP_ALL_CONTEXTMENU = 35;
FormIt.ToolType.GROUP_FLATTEN = 36;
FormIt.ToolType.GROUP_MAKE_UNIQUE = 37;
FormIt.ToolType.GROUP_MAKE_UNIQUE_CONTEXTMENU = 38;
FormIt.ToolType.GROUP_EDIT_IN_CONTEXT = 39;
FormIt.ToolType.GROUP_EDIT_IN_CONTEXT_CONTEXTMENU = 40;
FormIt.ToolType.FILTERED_SELECTION = 41;
FormIt.ToolType.FIRST_PERSON_CAMERA = 42;
FormIt.ToolType.HISTORY_PLACEMENT = 43;
FormIt.ToolType.SOLAR_RADIATION_SELECTION = 44;
FormIt.ToolType.SOLAR_RADIATION_AREA_SELECTION = 45;
FormIt.ToolType.JOIN = 46;
FormIt.ToolType.CUT = 47;
FormIt.ToolType.SWEEP = 48;
FormIt.ToolType.OFFSET_BODY = 49;
FormIt.ToolType.COVER_EDGES = 50;
FormIt.ToolType.JOIN_CONTEXTMENU = 51;
FormIt.ToolType.CUT_CONTEXTMENU = 52;
FormIt.ToolType.LOFT_EDGES = 53;
FormIt.ToolType.SOLAR_RADIATION_MEASURE = 54;
FormIt.ToolType.EXTRUDE_EDGES = 55;
FormIt.ToolType.OFFSET_EDGES = 56;
FormIt.ToolType.PLACE_LCS = 57;
FormIt.ToolType.SHELL_BODY = 58;
FormIt.ToolType.MIRROR = 59;
FormIt.ToolType.BLEND = 60;
FormIt.ToolType.LINEAR_MEASURE = 61;
FormIt.ToolType.ANGULAR_MEASURE = 62;
FormIt.ToolType.QUICK_SWIPE_DELETE = 63;
FormIt.ToolType.CAMERA_SWIVEL = 64;
FormIt.ToolType.EDIT_CIRCLE = 65;
FormIt.ToolType.EDIT_SPLINE = 66;
FormIt.ToolType.NON_UNIFORM_SCALE_OBJECTS = 67;
FormIt.ToolType.ARCCENTERRADIUS = 68;
FormIt.ToolType.MATERIALPICKER = 69;
FormIt.ToolType.SECTION_PLANE = 70;
FormIt.ToolType.ARRAY = 71;
FormIt.ToolType.MOVE = 72;
FormIt.ToolType.COPY = 73;
FormIt.ToolType.DELETE_OBJECT = 74;
FormIt.ToolType.UNSMOOTH_EDGES = 75;
FormIt.ToolType.SMOOTH_EDGES = 76;
FormIt.ToolType.RESET_AXES = 77;
FormIt.ToolType.EXIT_TO_PARENT = 78;
FormIt.ToolType.LASSO_SELECTION = 79;
FormIt.ToolType.TRANSLATION_IMPLICIT = 80;
FormIt.ToolType.FLATTEN_FACES = 81;
FormIt.ToolType.OBJECTS_TO_MESHES = 82;
FormIt.ToolType.MESHES_TO_OBJECTS = 83;
FormIt.ToolType.EDIT_TEXTURES = 84;
FormIt.ToolType.ALIGN_WITH_FACE = 85;
FormIt.ToolType.DYNAMOSELECTION = 86;
FormIt.ToolType.POLYGON = 87;
FormIt.ToolType.OFFSET_LINE = 88;
FormIt.ToolType.CONFIRM_ACTION = 89;
FormIt.ToolType.NUM_TOOLS = 90;
WSM.Utils = WSM.Utils || {};
WSM.Utils.CurveType = WSM.Utils.CurveType || {};
WSM.Utils.CurveType.Unknown = 0;
WSM.Utils.CurveType.Line = 1;
WSM.Utils.CurveType.Circle = 2;
WSM.Utils.CurveType.Spline = 3;
WSM.Utils.SurfaceType = WSM.Utils.SurfaceType || {};
WSM.Utils.SurfaceType.Unknown = 0;
WSM.Utils.SurfaceType.Plane = 1;
WSM.Utils.SurfaceType.Cylinder = 2;
WSM.Utils.SurfaceType.Sphere = 3;
WSM.Utils.SurfaceType.Extrude = 4;
WSM.Utils.SurfaceType.Blend = 5;
WSM.Utils.SelectionLevel = WSM.Utils.SelectionLevel || {};
WSM.Utils.SelectionLevel.BreakAtJunctionNonSmooth = 0;
WSM.Utils.SelectionLevel.BreakAtJunction = 1;
WSM.Utils.SelectionLevel.ConnectedFacesVariant = 2;
WSM.Utils.SelectionLevel.ConnectedFacesComponents = 3;
WSM.Utils.SelectionLevel.ConnectedFacesVariantComponents = 4;
WSM.Utils.SelectionLevel.AllConnected = 5;
WSM.Utils.TooltipType = WSM.Utils.TooltipType || {};
WSM.Utils.TooltipType.TOOLTIP = 0;
WSM.Utils.TooltipType.STATUS = 1;
WSM.Utils.TooltipType.NONE = 2;
WSM.nSubObjectType = WSM.nSubObjectType || {};
WSM.nSubObjectType.EdgeMidPoint = 0;
WSM.nSubObjectType.FaceCentroid = 1;
WSM.nSubObjectType.NONE = 2;
WSM.nSubObjectType.OnLevel = 3;
WSM.nSubObjectType.MeshMidPoint = 4;
WSM.nSubObjectType.MeshVertex = 5;
WSM.nSubObjectType.CircleCenter = 6;
WSM.Utils = WSM.Utils || {};
WSM.Utils = WSM.Utils || {};
WSM.Utils.CoordSystem = WSM.Utils.CoordSystem || {};
WSM.Utils.CoordSystem.HCS = 0;
WSM.Utils.CoordSystem.LCS = 1;
WSM.Utils.CoordSystem.WHCS = 2;
WSM.Utils.CoordSystem.WLCS = 3;
FormIt.LibraryType = FormIt.LibraryType || {};
FormIt.LibraryType.SKETCH = 0;
FormIt.LibraryType.APPLICATION = 1;
FormIt.LibraryType.BUNDLE = 2;
FormIt.LinearFormatType = FormIt.LinearFormatType || {};
FormIt.LinearFormatType.kBestFit = 0;
FormIt.LinearFormatType.kImperialFeetInches = 1;
FormIt.LinearFormatType.kImperialFeetFractional = 2;
FormIt.LinearFormatType.kMetricCentimeter = 3;
FormIt.LinearFormatType.kMetricMeter = 4;
FormIt.LinearFormatType.kMetricMillimeter = 5;
FormIt.LinearFormatType.kImperialInches = 6;
FormIt.NotificationType = FormIt.NotificationType || {};
FormIt.NotificationType.Unspecified = 0;
FormIt.NotificationType.Information = 1;
FormIt.NotificationType.Warning = 2;
FormIt.NotificationType.Error = 3;
FormIt.NotificationType.Success = 4;
FormIt.SolidRendererFlags = FormIt.SolidRendererFlags || {};
FormIt.SolidRendererFlags.NONE = 0;
FormIt.SolidRendererFlags.OVERSHOOT_SILHOUETTE_AND_DRAFTING = 1;
FormIt.SolidRendererFlags.DRAFTING_ALWAYS_VISIBLE = 2;
FormIt.SolidRendererFlags.SKETCHY_EDGES = 4;
FormIt.SolidRendererFlags.AMBIENT_SHADOWS = 8;
FormIt.SolidRendererFlags.HIDE_EDGES = 16;
FormIt.SolidRendererFlags.FACE_SIDES = 32;
FormIt.SolidRendererFlags.THIN_EDGES = 64;
FormIt.SolidRendererFlags.NON_MANIFOLD_EDGES = 128;
FormIt.SolidRendererFlags.HIDE_SILHOUETTE = 256;
FormIt.SolidRendererFlags.USE_FACE_BACK_MATERIALS = 512;
FormIt.SolidRendererFlags.USE_EDGE_MATERIALS = 1024;
FormIt.SolidRendererFlags.MONOTONE = 2048;
FormIt.SolidRendererFlags.HIDE_GROUND_PLANE = 4096;
FormIt.SolidRendererFlags.SECTIONPLANECOLOR = 8192;
FormIt.SolidRendererFlags.SHOW_GROUP_BBOX = 16384;
FormIt.SolidRendererFlags.HIDE_SKY_COLOR = 32768;
FormIt.SolidRendererFlags.HIDE_FOG = 65536;
FormIt.SolidRendererFlags.HIDE_WORK_PLANE = 131072;
FormIt.SortOrder = FormIt.SortOrder || {};
FormIt.SortOrder.Ascending = 0;
FormIt.SortOrder.Descending = 1;
FormIt.SortOrder.Unsorted = 2;
FormIt.UnitType = FormIt.UnitType || {};
FormIt.UnitType.kImperialFeetInches = 0;
FormIt.UnitType.kMetricMeter = 1;
FormIt.UnitType.kImperialInches = 2;
FormIt.UnitType.kMetricCentimeter = 3;
FormIt.UnitType.kMetricMillimeter = 4;
FormIt.UnitType.kUnitTypeInvalid = 5;
FormIt.KeyboardModifier = FormIt.KeyboardModifier || {};
FormIt.KeyboardModifier.NoModifier = 0;
FormIt.KeyboardModifier.ShiftModifier = 1;
FormIt.KeyboardModifier.ControlModifier = 2;
FormIt.KeyboardModifier.AltModifier = 4;
FormIt.KeyboardModifier.ControlShiftModifier = 3;
FormIt.KeyboardModifier.ControlAltModifier = 6;
FormIt.KeyboardModifier.AltShiftModifier = 5;
FormIt.KeyboardModifier.ControlAltShiftModifier = 7;
FormIt.MouseButton = FormIt.MouseButton || {};
FormIt.MouseButton.NONE = 0;
FormIt.MouseButton.LEFT = 1;
FormIt.MouseButton.RIGHT = 2;
FormIt.MouseButton.MIDDLE = 4;
FormIt.MouseButton.LEFTMIDDLE = 5;
FormIt.MouseButton.LEFTRIGHT = 3;
FormIt.MouseButton.MIDDLERIGHT = 6;
FormIt.MouseButton.LEFTMIDDLERIGHT = 7;
FormIt.Collaboration = FormIt.Collaboration || {};
FormIt.Dynamo = FormIt.Dynamo || {};
FormIt.SunLocationDataChange = FormIt.SunLocationDataChange || {};
FormIt.SunLocationDataChange.eLatitude = 1;
FormIt.SunLocationDataChange.eLongitude = 2;
FormIt.SunLocationDataChange.eSunLocationTime = 4;
FormIt.SunLocationDataChange.eUTCTimeZone = 8;
FormIt.SunLocationDataChange.eDSTOffset = 16;
FormIt.SunLocationDataChange.eSunLocationDay = 32;
FormIt.SunLocationDataChange.eSunLocationMonth = 64;
FormIt.SunLocationDataChange.eSunLocationYear = 128;
FormIt.SunLocationDataChange.eDSTEnabled = 256;
FormIt.Materials = FormIt.Materials || {};
FormIt.Materials.AttributeType = FormIt.Materials.AttributeType || {};
FormIt.Materials.AttributeType.kGloss = 0;
FormIt.Materials.AttributeType.kReflectionDirect = 1;
FormIt.Materials.AttributeType.kReflectionOblique = 2;
FormIt.Materials.MapType = FormIt.Materials.MapType || {};
FormIt.Materials.MapType.kNormalMap = 0;
FormIt.Materials.MapType.kOpacityMap = 1;
FormIt.CameraDirectionType = FormIt.CameraDirectionType || {};
FormIt.CameraDirectionType.DEFAULT = 0;
FormIt.CameraDirectionType.ZPOS = 1;
FormIt.CameraDirectionType.ZNEG = 2;
FormIt.CameraDirectionType.XPOS = 3;
FormIt.CameraDirectionType.XNEG = 4;
FormIt.CameraDirectionType.YPOS = 5;
FormIt.CameraDirectionType.YNEG = 6;
FormIt.CameraDirectionType.NUM_PROJECTION_TYPES = 7;
FormIt.CameraProjectionType = FormIt.CameraProjectionType || {};
FormIt.CameraProjectionType.PERSPECTIVE = 0;
FormIt.CameraProjectionType.ORTHOGRAPHIC = 1;
FormIt.SceneCaptureFlags = FormIt.SceneCaptureFlags || {};
FormIt.SceneCaptureFlags.None = 0;
FormIt.SceneCaptureFlags.CameraData = 1;
FormIt.SceneCaptureFlags.RendererData = 2;
FormIt.SceneCaptureFlags.SunLocationData = 4;
FormIt.SceneCaptureFlags.ViewItemsDeprecated = 8;
FormIt.SceneCaptureFlags.LayersList = 16;
FormIt.Layers = FormIt.Layers || {};
FormIt.ReadResult = FormIt.ReadResult || {};
FormIt.ReadResult.LOADED = 0;
FormIt.ReadResult.GOOD = 1;
FormIt.ReadResult.UNRECOGNIZED_FILETYPE = 2;
FormIt.ReadResult.UNRECOGNIZED_VERSION = 3;
FormIt.ReadResult.UNRECOGNIZED_OFFSET = 4;
FormIt.ReadResult.OLDERFILE = 5;
FormIt.ReadResult.BAD = 6;
FormIt.ReadResult.FAILED = 7;
FormIt.ReadResult.COULDNT_OPEN = 8;
FormIt.ReadResult.COULDNT_CREATE_IMAGE = 9;
FormIt.ReadResult.END_OF_FILE = 10;
FormIt.ReadResult.NONE = 11;
FormIt.WriteResult = FormIt.WriteResult || {};
FormIt.WriteResult.GOOD = 0;
FormIt.WriteResult.BAD = 1;
FormIt.WriteResult.UNRECOGNIZED_VERSION = 2;
FormIt.WriteResult.NONE = 3;
FormIt.RestoreResult = FormIt.RestoreResult || {};
FormIt.RestoreResult.NOTHING_TO_RESTORE = 0;
FormIt.RestoreResult.RESTORED = 1;
FormIt.RestoreResult.FAILED = 2;
FormIt.SaveOptions = FormIt.SaveOptions || {};
FormIt.SaveOptions.AllObjects = 0;
FormIt.SaveOptions.AllObjectsWithHistory = 1;
FormIt.SaveOptions.VisibleOnly = 2;
FormIt.SaveOptions.SelectedOnly = 3;
FormIt.SaveOptions.SelectedOnlyWorldCoords = 4;
FormIt.Entitlement = FormIt.Entitlement || {};
FormIt.Entitlement.Type = FormIt.Entitlement.Type || {};
FormIt.Entitlement.Type.None = 0;
FormIt.Entitlement.Type.FormitPro = 1;
FormIt.Entitlement.Type.FormitProTrial = 2;
FormIt.Entitlement.Type.FormitFree = 4;
FormIt.Entitlement.RespFormat = FormIt.Entitlement.RespFormat || {};
FormIt.Entitlement.RespFormat.XML = 0;
FormIt.Entitlement.RespFormat.Json = 1;
FormIt.BuildingType = FormIt.BuildingType || {};
FormIt.BuildingType.UNKNOWN = 0;
FormIt.BuildingType.AUTOMOTIVE_FACILITY = 1;
FormIt.BuildingType.CONVENTION_CENTER = 2;
FormIt.BuildingType.COURTHOUSE = 3;
FormIt.BuildingType.DATACENTER = 4;
FormIt.BuildingType.DINING_BAR_LOUNGE_OR_LEISURE = 5;
FormIt.BuildingType.DINING_CAFETERIA_FAST_FOOD = 6;
FormIt.BuildingType.DINING_FAMILY = 7;
FormIt.BuildingType.DORMITORY = 8;
FormIt.BuildingType.EXERCISE_CENTER = 9;
FormIt.BuildingType.FIRE_STATION = 10;
FormIt.BuildingType.GYMNASIUM = 11;
FormIt.BuildingType.HOSPITAL_OR_HEALTHCARE = 12;
FormIt.BuildingType.HOTEL = 13;
FormIt.BuildingType.LIBRARY = 14;
FormIt.BuildingType.MANUFACTURING = 15;
FormIt.BuildingType.MOTEL = 16;
FormIt.BuildingType.MOTION_PICTURE_THEATRE = 17;
FormIt.BuildingType.MULTIFAMILY = 18;
FormIt.BuildingType.MUSEUM = 19;
FormIt.BuildingType.OFFICE = 20;
FormIt.BuildingType.PARKING_GARAGE = 21;
FormIt.BuildingType.PENITENTIARY = 22;
FormIt.BuildingType.PERFORMING_ARTS_THEATER = 23;
FormIt.BuildingType.POLICE_STATION = 24;
FormIt.BuildingType.POST_OFFICE = 25;
FormIt.BuildingType.RELIGIOUS_BUILDING = 26;
FormIt.BuildingType.RETAIL = 27;
FormIt.BuildingType.SCHOOL_OR_UNIVERSITY = 28;
FormIt.BuildingType.SINGLE_FAMILY = 29;
FormIt.BuildingType.SPORTS_ARENA = 30;
FormIt.BuildingType.TOWNHALL = 31;
FormIt.BuildingType.TRANSPORTATION = 32;
FormIt.BuildingType.WAREHOUSE = 33;
FormIt.BuildingType.WORKSHOP = 34;
FormIt.BuildingType.COUNT = 35;
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.GBS = FormIt.Analysis.GBS || {};
FormIt.Analysis.GBS.Status = FormIt.Analysis.GBS.Status || {};
FormIt.Analysis.GBS.Status.NOTANALYSED = 0;
FormIt.Analysis.GBS.Status.ANALYZING = 1;
FormIt.Analysis.GBS.Status.ANALYSED = 2;
FormIt.Analysis.GBS.Status.WAITING_FOR_TRANSLATION = 3;
FormIt.Analysis.GBS.Status.COUNT = 4;
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.Statistics = FormIt.Statistics || {};
FormIt.Statistics.UITrackingTypes = FormIt.Statistics.UITrackingTypes || {};
FormIt.Statistics.UITrackingTypes.UNKNOWN = -1;
FormIt.Statistics.UITrackingTypes.SETTINGS = 0;
FormIt.Statistics.UITrackingTypes.SUN_SHADOW_SETTINGS = 1;
FormIt.Statistics.UITrackingTypes.MATERIALS_PALETTE = 2;
FormIt.Statistics.UITrackingTypes.PROPERTIES_PANEL = 3;
FormIt.Statistics.UITrackingTypes.LEVELS_PANEL = 4;
FormIt.Statistics.UITrackingTypes.BPA_PANEL = 5;
FormIt.Statistics.UITrackingTypes.LOCATION = 6;
FormIt.Statistics.UITrackingTypes.BENCHMARK_API = 7;
FormIt.Statistics.UITrackingTypes.HELP = 8;
FormIt.Statistics.UITrackingTypes.GET_SUPPORT = 9;
FormIt.Statistics.UITrackingTypes.OPEN_FORMIT_BLOG = 10;
FormIt.Statistics.UITrackingTypes.LOGIN = 11;
FormIt.Statistics.UITrackingTypes.LOGOUT = 12;
FormIt.Statistics.UITrackingTypes.NEW_SKETCH = 13;
FormIt.Statistics.UITrackingTypes.OPEN_GALLERY = 14;
FormIt.Statistics.UITrackingTypes.SAVE_SKETCH = 15;
FormIt.Statistics.UITrackingTypes.SAVE_AS = 16;
FormIt.Statistics.UITrackingTypes.MATERIAL_START_EDIT = 17;
FormIt.Statistics.UITrackingTypes.LOAD_CUSTOM_TEXTURE = 18;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_GET_STATIONS = 19;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_LOAD_STATION = 20;
FormIt.Statistics.UITrackingTypes.GBS_WEATHER_LOAD_GRAPH = 21;
FormIt.Statistics.UITrackingTypes.GBS_BPA_LOAD_GRAPH = 22;
FormIt.Statistics.UITrackingTypes.GETTING_STARTED = 23;
FormIt.Statistics.UITrackingTypes.ABOUT_FORMIT = 24;
FormIt.Statistics.UITrackingTypes.KEYBOARD_SHORTCUTS = 25;
FormIt.Statistics.UITrackingTypes.SAVE_SUCCESSFUL = 26;
FormIt.Statistics.UITrackingTypes.COLLABORATION_REMOVE_GUEST = 27;
FormIt.Statistics.UITrackingTypes.OPEN_FORMIT_SURVEY = 28;
FormIt.Statistics.UITrackingTypes.CONTENT_LIBRARY_PANEL = 29;
FormIt.Statistics.UITrackingTypes.COLLABORATION_PANEL = 30;
FormIt.Statistics.UITrackingTypes.CONTENT_LIBRARY_IMPORT_LOCAL = 31;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS = 32;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS_START_ANALYSIS = 33;
FormIt.Statistics.UITrackingTypes.ENERGY_ANALYSIS_CLOSE = 34;
FormIt.Statistics.UITrackingTypes.PRO_MENU_OPEN = 35;
FormIt.Statistics.UITrackingTypes.PRO_START_TRIAL = 36;
FormIt.Statistics.UITrackingTypes.PRO_BUY_LINK = 37;
FormIt.Statistics.UITrackingTypes.LAYERS_PANEL = 38;
FormIt.Statistics.UITrackingTypes.SCENES_PANEL = 39;
FormIt.Statistics.UITrackingTypes.IMPORT_MATERIAL = 40;
FormIt.Statistics.UITrackingTypes.HELIUM_START = 41;
FormIt.Statistics.UITrackingTypes.HELIUM_HEARTBEAT = 42;
FormIt.Statistics.UITrackingTypes.HELIUM_STOP = 43;
FormIt.Statistics.UITrackingTypes.SAVE_SKETCH_LOCAL = 44;
FormIt.Statistics.UITrackingTypes.SAVE_AS_LOCAL = 45;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL = 46;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXM = 47;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXMF = 48;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_AXMB = 49;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_DWG = 50;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_FBX = 51;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_OBJ = 52;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_SAT = 53;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_SKP = 54;
FormIt.Statistics.UITrackingTypes.OPEN_LOCAL_STL = 55;
FormIt.Statistics.UITrackingTypes.EXPORT_LOCAL = 56;
FormIt.Statistics.UITrackingTypes.IMPORT_LOCAL = 57;
FormIt.Statistics.UITrackingTypes.RENAME = 58;
FormIt.Statistics.UITrackingTypes.DYNAMO_PANEL = 59;
FormIt.Statistics.UITrackingTypes.VISUAL_STYLE_PANEL = 60;
FormIt.Statistics.UITrackingTypes.GROUPS_TREE_PANEL = 61;
FormIt.Statistics.UITrackingTypes.UNDO_MANAGER_PANEL = 62;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_BUTTON = 63;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_BAKE = 64;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_EDIT = 65;
FormIt.Statistics.UITrackingTypes.DYNAMO_ADD_CONTENT_LAUNCH = 66;
FormIt.Statistics.UITrackingTypes.DYNAMO_PROPS_RUN_GRAPH = 67;
FormIt.Statistics.UITrackingTypes.DYNAMO_PROPS_EDIT_IN_DYNAMO = 68;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL = 69;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXM = 70;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXMF = 71;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_AXMB = 72;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_DWG = 73;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_FBX = 74;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_OBJ = 75;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_SAT = 76;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_SKP = 77;
FormIt.Statistics.UITrackingTypes.IMPORT_3D_MODEL_LOCAL_STL = 78;
FormIt.Statistics.UITrackingTypes.EXPORT_BIM360DOCS = 79;
FormIt.Statistics.UITrackingTypes.WEATHER_PANEL = 80;
FormIt.Statistics.UITrackingTypes.RENDER_PANEL = 81;
FormIt.Statistics.UITrackingTypes.IMPORT_MODEL_CLOUD = 82;
FormIt.Statistics.UITrackingTypes.LOAD_PLUGIN = 83;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN = 84;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXM = 85;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXMF = 86;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_AXMB = 87;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_DWG = 88;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_FBX = 89;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_OBJ = 90;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_SAT = 91;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_SKP = 92;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_OPEN_STL = 93;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_SAVE = 94;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_SAVEAS = 95;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_VIEWFILES = 96;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_EXPORT = 97;
FormIt.Statistics.UITrackingTypes.BIM360DOCS_FINISHED_UPLOAD = 98;
FormIt.Statistics.UITrackingTypes.BIM360_CONTENT_LIBRARY_IMPORT = 99;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN_LOAD_RETRY_START = 100;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN_LOAD_RETRY_FAILED = 101;
FormIt.Statistics.UITrackingTypes.LOCATION_PLUGIN__LOAD_RETRY_SUCCESS = 102;
FormIt.Statistics.UITrackingTypes.LOCALE_MANIFEST_UPDATED = 103;
FormIt.Statistics.UITrackingTypes.LOCALE_DIR_NOT_FOUND = 104;
FormIt.Statistics.UITrackingTypes.LOCALE_LANG_FOUND = 105;
FormIt.Statistics.UITrackingTypes.LOCALE_LANG_NOT_FOUND = 106;
FormIt.Statistics.UITrackingTypes.LOCALE_MENU_SET = 107;
FormIt.Statistics.UITrackingTypes.SEND_TO_REVIT = 108;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_OPEN = 109;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_CLOSE = 110;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_FAIL = 111;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_NO_DYN_PORT = 112;
FormIt.Statistics.UITrackingTypes.REVIT_CONNECTION_NO_STATIC_PORT = 113;
FormIt.Files = FormIt.Files || {};
FormIt.Files.Action = FormIt.Files.Action || {};
FormIt.Files.Action.Open = 0;
FormIt.Files.Action.Save = 1;
FormIt.Files.Action.Export = 2;
FormIt.Files.Action.Import = 3;
FormIt.Files.ContentType = FormIt.Files.ContentType || {};
FormIt.Files.ContentType.Type_Image = 0;
FormIt.Files.ContentType.Type_3DModel = 1;
FormIt.Files.Types = FormIt.Files.Types || {};
FormIt.Files.Types.AXM = 0;
FormIt.Files.Types.AXMF = 1;
FormIt.Files.Types.AXMB = 2;
FormIt.Files.Types.FBX = 3;
FormIt.Files.Types.OBJ = 4;
FormIt.Files.Types.SAT = 5;
FormIt.Files.Types.STL = 6;
FormIt.Files.Types.WSM = 7;
FormIt.Files.Types.LMV = 8;
FormIt.Files.Types.SKP = 9;
FormIt.Files.Types.AutocadDXF = 10;
FormIt.Files.Types.AutocadDWG = 11;
FormIt.Files.Types.ColladaDAE = 12;
FormIt.Files.Types.PNG = 13;
FormIt.Files.Types.JPG = 14;
FormIt.Files.Types.JPEG = 15;
FormIt.Files.Types.SPD = 16;
FormIt.Files.Types.JS = 17;
FormIt.Files.Types.JSON = 18;
FormIt.Files.Types.ATFX = 19;
FormIt.UI = FormIt.UI || {};
FormIt.UI.FormItDialogBox = FormIt.UI.FormItDialogBox || {};
FormIt.UI.FormItDialogBox.Local = 0;
FormIt.UI.FormItDialogBox.BIM360Gallery = 1;
FormIt.UI.FormItDialogBox.BIM360ContentLibrary = 2;
FormIt.UI.FormItDialogBox.LocalContentLibrary = 3;
FormIt.UI.CursorType = FormIt.UI.CursorType || {};
FormIt.UI.CursorType.kPickArrow = 0;
FormIt.UI.CursorType.kPickArrowPlusMinus = 1;
FormIt.UI.CursorType.kForbidden = 2;
FormIt.UI.CursorType.kCameraOrbit = 3;
FormIt.UI.CursorType.kCameraPan = 4;
FormIt.UI.CursorType.kCameraSwivel = 5;
FormIt.UI.CursorType.kCameraZoom = 6;
FormIt.UI.CursorType.kGrip = 7;
FormIt.UI.CursorType.kTextEdit = 8;
FormIt.UI.CursorType.kNumCursorTypes = 9;
FormIt.Forge = FormIt.Forge || {};
FormIt.Forge.ForgeMode = FormIt.Forge.ForgeMode || {};
FormIt.Forge.ForgeMode.Default = 0;
FormIt.Forge.ForgeMode.Test = 1;
FormIt.Forge.ForgeMode.Journal = 2;
FormIt.Forge.ErrorCode = FormIt.Forge.ErrorCode || {};
FormIt.Forge.ErrorCode.Success = 0;
FormIt.Forge.ErrorCode.Forbidden = 1;
FormIt.Forge.ErrorCode.Unauthorized = 2;
FormIt.Forge.ErrorCode.BadInput = 3;
FormIt.Forge.ErrorCode.ElementNotFound = 4;
FormIt.Forge.ErrorCode.AlreadyExists = 5;
FormIt.Forge.ErrorCode.MalformedResponse = 6;
FormIt.Forge.ErrorCode.InternalError = 7;
FormIt.Forge.ErrorCode.ConnectionError = 8;
FormIt.Forge.ErrorCode.ProjectNotFound = 9;
FormIt.Forge.ErrorCode.Pending = 10;
FormIt.Forge.ErrorCode.ReceiveHubProjectFailed = 11;
FormIt.Forge.ErrorCode.ReceiveFileListFailed = 12;
FormIt.Forge.ErrorCode.ReceiveEmptyFileList = 13;
FormIt.Forge.ErrorCode.OpenFileFailed = 14;
FormIt.Forge.ErrorCode.NoBIM360DocsEntitlements = 15;
FormIt.Forge.ErrorCode.SavingInProgress = 16;
FormIt.Forge.ErrorCode.ExportingInProgress = 17;
FormIt.Forge.ErrorCode.FileSaveSuccess = 18;
FormIt.Forge.ErrorCode.FileExportSuccess = 19;
FormIt.Forge.ErrorCode.FileSaveFailed = 20;
FormIt.Forge.ErrorCode.FileExportFailed = 21;
FormIt.Forge.ErrorCode.GetOAuthBearerTokenFailed = 22;
FormIt.Forge.ErrorCode.UnknownBIM360DocsException = 23;
FormIt.Forge.ErrorCode.CacheRefreshNeeded = 24;
FormIt.Forge.ErrorCode.FileUpdateDenied = 25;
FormIt.Forge.ErrorCode.ReceiveEmptyFileListContentLibrary = 26;
FormIt.Forge.ErrorCode.NoPermissionsToShowContent = 27;
FormIt.Forge.ErrorCode.NoPermissionsAndEmptyFileList = 28;
FormIt.Forge.ErrorCode.NoPermissionsAndEmptyFileListContentLibrary = 29;
FormIt.Forge.UI = FormIt.Forge.UI || {};
FormIt.AutoSave = FormIt.AutoSave || {};
FormIt.Web = FormIt.Web || {};
FormIt.Web.RequestMethod = FormIt.Web.RequestMethod || {};
FormIt.Web.RequestMethod.GET = 0;
FormIt.Web.RequestMethod.PUT = 1;
FormIt.Web.RequestMethod.POST = 2;
FormIt.Graphics = FormIt.Graphics || {};
FormIt.Utils = FormIt.Utils || {};
WSM.nFileType = WSM.nFileType || {};
WSM.nFileType.nFileTypeBinaryWSM = 0;
WSM.nFileType.nFileTypeSAT = 1;
WSM.nFileType.nFileTypeSTL = 2;
WSM.nFileType.nFileTypeOBJ = 3;
WSM.nFileType.nFileTypeDWG = 4;
WSM.nFileType.nFileTypeLMV = 5;
WSM.nFileType.nFileTypeThreejsJSON = 6;
WSM.nFileType.nFileTypeFBX = 7;
WSM.nFileType.nFileTypeSKP = 8;
WSM.nFileType.nFileTypeDAE = 9;
WSM.nFileType.nFileTypeDXF = 10;
WSM.nFileType.nFileTypeJSON = 11;
WSM.nFileType.nFileTypeATFX = 12;
FormIt.Files = FormIt.Files || {};
WSM.LineInferenceType = WSM.LineInferenceType || {};
WSM.LineInferenceType.Xaxis = 0;
WSM.LineInferenceType.XaxisFromPt = 1;
WSM.LineInferenceType.Yaxis = 2;
WSM.LineInferenceType.YaxisFromPt = 3;
WSM.LineInferenceType.Zaxis = 4;
WSM.LineInferenceType.ZaxisFromPt = 5;
WSM.LineInferenceType.Perp = 6;
WSM.LineInferenceType.PerpFromPt = 7;
WSM.LineInferenceType.Parallel = 8;
WSM.LineInferenceType.WSMEdge = 9;
WSM.GripType = WSM.GripType || {};
WSM.GripType.CURRENTPOINT = 0;
WSM.GripType.PLACEDPOINT = 1;
WSM.GripType.MIDPOINT = 2;
WSM.GripType.ARROW = 3;
WSM.GripType.DOUBLEARROW = 4;
WSM.GripType.DOUBLEARROWSPACED = 5;
WSM.GripType.ORIGIN = 6;
WSM.GripType.AXIS = 7;
WSM.GripType.SOURCE = 8;
WSM.GripType.DEST = 9;
WSM.GripType.ARROW3D = 10;
WSM.GripType.DOUBLEARROW3D = 11;
WSM.GripType.ROTATIONARROW = 12;
WSM.GripType.ROTATIONARROW3D = 13;
WSM.DimensionInSideType = WSM.DimensionInSideType || {};
WSM.DimensionInSideType.None = 0;
WSM.DimensionInSideType.Text = 1;
WSM.DimensionInSideType.RightVertical = 2;
WSM.DimensionInSideType.RightHorizontal = 4;
WSM.DimensionInSideType.RightArrow = 8;
WSM.DimensionInSideType.LeftVertical = 16;
WSM.DimensionInSideType.LeftHorizontal = 32;
WSM.DimensionInSideType.LeftArrow = 64;
WSM.Tools = WSM.Tools || {};
WSM.Tools.ToolType = WSM.Tools.ToolType || {};
WSM.Tools.ToolType.Arc = 0;
WSM.Tools.ToolType.Circle = 1;
WSM.Tools.ToolType.DragFace = 2;
WSM.Tools.ToolType.OffsetFace = 3;
WSM.Tools.ToolType.RotateFace = 4;
WSM.Tools.ToolType.ScaleFace = 5;
WSM.Tools.ToolType.TaperFace = 6;
WSM.Tools.ToolType.Placement = 7;
WSM.Tools.ToolType.Polyline = 8;
WSM.Tools.ToolType.Rectangle = 9;
WSM.Tools.ToolType.Rotation = 10;
WSM.Tools.ToolType.Scale = 11;
WSM.Tools.ToolType.Translation = 12;
WSM.Tools.ToolType.Spline = 13;
WSM.Tools.ToolType.ExtrudeEdges = 14;
WSM.Tools.ToolType.OffsetEdges = 15;
WSM.Tools.ToolType.LCSTool = 16;
WSM.Tools.ToolType.Mirror = 17;
WSM.Tools.ToolType.LinearMeasureTool = 18;
WSM.Tools.ToolType.AngularMeasureTool = 19;
WSM.Tools.ToolType.EditCircleTool = 20;
WSM.Tools.ToolType.EditSplineTool = 21;
WSM.Tools.ToolType.NonUniformScaleTool = 22;
WSM.Tools.ToolType.ArcCenterRadius = 23;
WSM.Tools.ToolType.FlattenFaces = 24;
WSM.Tools.ToolType.EditTextures = 25;
WSM.Tools.ToolType.Polygon = 26;
WSM.Tools.ToolType.OffsetLine = 27;
WSM.Tools.ToolType.NumToolTypes = 28;
WSM.Tools.ToolState = WSM.Tools.ToolState || {};
WSM.Tools.ToolState.FirstPt = 0;
WSM.Tools.ToolState.SecondPt = 1;
WSM.Tools.ToolState.ThirdPt = 2;
WSM.Tools.ToolState.WaitingForInput = 3;
WSM.Tools.ToolOperationMode = WSM.Tools.ToolOperationMode || {};
WSM.Tools.ToolOperationMode.PRIMARY = 0;
WSM.Tools.ToolOperationMode.SECONDARY = 1;
WSM.Tools.ExecutionType = WSM.Tools.ExecutionType || {};
WSM.Tools.ExecutionType.Unknown = 0;
WSM.Tools.ExecutionType.Executed = 1;
WSM.Tools.ExecutionType.NotExecuted = 2;
WSM.Tools.ResultType = WSM.Tools.ResultType || {};
WSM.Tools.ResultType.Good = 0;
WSM.Tools.ResultType.NoAppHelperRegistered = 1;
WSM.Tools.ResultType.BadToolType = 2;
WSM.Tools.ResultType.BadID = 3;
WSM.Tools.ResultType.BadValue = 4;
WSM.Tools.ResultType.BadIndex = 5;
WSM.Tools.ResultType.NumResultTypes = 6;
WSM.Tools.ResetReason = WSM.Tools.ResetReason || {};
WSM.Tools.ResetReason.UserCancelled = 0;
WSM.Tools.ResetReason.ModelChanged = 1;
WSM.Tools.ResetReason.OperationCompleted = 2;
WSM.Tools.ResetReason.OperationStarted = 3;
WSM.Tools.ToolReturn = WSM.Tools.ToolReturn || {};
WSM.Tools.ToolReturn.CONSUMED = 0;
WSM.Tools.ToolReturn.IGNORED = 1;
WSM.Tools.ToolReturn.KILLME = 2;
WSM.Tools = WSM.Tools || {};
WSM.Tools = WSM.Tools || {};
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.GBS = FormIt.Analysis.GBS || {};
FormIt.Collaboration = FormIt.Collaboration || {};
FormIt.Edit = FormIt.Edit || {};
FormIt.Entitlement = FormIt.Entitlement || {};
FormIt.Events = FormIt.Events || {};
FormIt.FileSystem = FormIt.FileSystem || {};
FormIt.Graphics = FormIt.Graphics || {};
FormIt.MaterialsLegacy = FormIt.MaterialsLegacy || {};
FormIt.Scripting = FormIt.Scripting || {};
FormIt.Statistics = FormIt.Statistics || {};
FormIt.StringConversion = FormIt.StringConversion || {};
FormIt.SunAndLocation = FormIt.SunAndLocation || {};
FormIt.Testing = FormIt.Testing || {};
FormIt.Tools = FormIt.Tools || {};
FormIt.ToolUI = FormIt.ToolUI || {};
FormIt.UI = FormIt.UI || {};
FormIt.Utils = FormIt.Utils || {};
FormIt.SectionPlanes = FormIt.SectionPlanes || {};
FormIt.SectionPlanes.Attributes = FormIt.SectionPlanes.Attributes || {};
FormIt.SectionPlanes.Materials = FormIt.SectionPlanes.Materials || {};
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.UndoManagement.Detail = FormIt.UndoManagement.Detail || {};
FormIt.AutoSave = FormIt.AutoSave || {};
FormIt.Web = FormIt.Web || {};
FormIt.FRS = FormIt.FRS || {};
FormIt.DebugMode = FormIt.DebugMode || {};
FormIt.Revit = FormIt.Revit || {};
FormIt.StringConversion = FormIt.StringConversion || {};
FormIt.Model = FormIt.Model || {};
FormIt.GroupEdit = FormIt.GroupEdit || {};
FormIt.ImageManager = FormIt.ImageManager || {};
FormIt.Levels = FormIt.Levels || {};
FormIt.Commands = FormIt.Commands || {};
FormIt.SectionPlanes = FormIt.SectionPlanes || {};
FormIt.Shortcuts = FormIt.Shortcuts || {};
FormIt.Tools = FormIt.Tools || {};
FormIt.Cameras = FormIt.Cameras || {};
FormIt.Graphics = FormIt.Graphics || {};
FormIt.VisualStyles = FormIt.VisualStyles || {};
FormIt.Selection = FormIt.Selection || {};
FormIt.Clipboard = FormIt.Clipboard || {};
FormIt.Analysis = FormIt.Analysis || {};
FormIt.Analysis.Solar = FormIt.Analysis.Solar || {};
FormIt.Analysis.Solar.WeatherDataStatus = FormIt.Analysis.Solar.WeatherDataStatus || {};
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataNotLoaded = 0;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataLoaded = 1;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataNotAvailableForLocation = 2;
FormIt.Analysis.Solar.WeatherDataStatus.kWeatherDataFormatError = 3;
FormIt.Scenes = FormIt.Scenes || {};
FormIt.Layers = FormIt.Layers || {};
FormIt.MaterialProvider = FormIt.MaterialProvider || {};
FormIt.SketchMaterials = FormIt.SketchMaterials || {};
FormIt.SampleMaterials = FormIt.SampleMaterials || {};
FormIt.UI = FormIt.UI || {};
FormIt.UndoManagement = FormIt.UndoManagement || {};
FormIt.Files = FormIt.Files || {};
FormIt.Forge = FormIt.Forge || {};
FormIt.Forge.UI = FormIt.Forge.UI || {};
FormIt.Dynamo = FormIt.Dynamo || {};
FormIt.SunAndLocation = FormIt.SunAndLocation || {};
FormIt.Utils = FormIt.Utils || {};

    // Invalid ID
    WSM.INVALID_ID = 0xFFFFFFFF;
    // Invalid size
    WSM.INVALID_SIZE = 0xFFFFFFFF;

    // WSM Tolerances
    WSM.DISTANCE_TOL = 1.0e-6;
    WSM.DISTANCE_TOL2 = 1.0e-12;
    WSM.ANGLE_TOL = 1.0e-10;
    WSM.ANGLE_TOL2 = 1.0e-20;

    // Detla types
    WSM.ModelChangedDataType = {};
    WSM.ModelChangedDataType.RESET_HISTORY = -3;
    WSM.ModelChangedDataType.UNDO = -1;
    WSM.ModelChangedDataType.DELTA_CLOSED = 0;
    WSM.ModelChangedDataType.REDO = 1;
    WSM.ModelChangedDataType.FROM_COLLABORATION = 2;
    WSM.ModelChangedDataType.COLLAB_MULTI_DELTA = 3;
    WSM.ModelChangedDataType.CREATED_REFD_HISTORY = 4;
    WSM.ModelChangedDataType.DELETED_HISTORY = 5;
    WSM.ModelChangedDataType.DELTAS_MERGED = 6;
    WSM.ModelChangedDataType.DELETING_ALL_HISTORY = 7;
    WSM.ModelChangedDataType.REDO_DELTAS_DELETED = 8;
            
}
