// This file is auto-generated
import { FormItInterface } from '/SharedPluginFiles/FormItInterface.mod.js';
// This file is auto-generated

    // Wrapper for calling "native" code as async functions
    function callAsyncAPI(args) {
        return new Promise(res => {
            FormItInterface.CallMethodDirect(args, json => res(JSON.parse(json)));
        });
    };
const WSM = {};

        WSM.APIGetActiveHistory = function() {
            const args = {
                TestAPI: "WSM.APIGetActiveHistory"
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateHistory = function(nHistoryID,bNonTemporary) {
            const args = {
                TestAPI: "WSM.APICreateHistory",
nHistoryID: nHistoryID,
    bNonTemporary: bNonTemporary
            };
            return callAsyncAPI(args);
        };

        WSM.APIChangeHistoryID = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIChangeHistoryID",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIDeleteHistory = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIDeleteHistory",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIDeleteAllHistories = function() {
            const args = {
                TestAPI: "WSM.APIDeleteAllHistories"
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllHistoriesReadOnly = function(bWithTemporary) {
            const args = {
                TestAPI: "WSM.APIGetAllHistoriesReadOnly",
bWithTemporary: bWithTemporary
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllReachableHistoriesReadOnly = function(nHistoryID,bGoUp) {
            const args = {
                TestAPI: "WSM.APIGetAllReachableHistoriesReadOnly",
nHistoryID: nHistoryID,
    bGoUp: bGoUp
            };
            return callAsyncAPI(args);
        };

        WSM.APIUndoHistory = function(nHistoryID,bAndDeleteRedo,nApplyOnDeltaID) {
            const args = {
                TestAPI: "WSM.APIUndoHistory",
nHistoryID: nHistoryID,
    bAndDeleteRedo: bAndDeleteRedo,
    nApplyOnDeltaID: nApplyOnDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIRedoHistory = function(nHistoryID,nApplyOnDeltaID) {
            const args = {
                TestAPI: "WSM.APIRedoHistory",
nHistoryID: nHistoryID,
    nApplyOnDeltaID: nApplyOnDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIUndoHistoryToDelta = function(nHistoryID,nDeltaID) {
            const args = {
                TestAPI: "WSM.APIUndoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIRedoHistoryToDelta = function(nHistoryID,nDeltaID) {
            const args = {
                TestAPI: "WSM.APIRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIDeleteAllRedoHistory = function(nHistoryID,bReuseDiscardedObjectIDs) {
            const args = {
                TestAPI: "WSM.APIDeleteAllRedoHistory",
nHistoryID: nHistoryID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APICanUndoHistoryReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APICanUndoHistoryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APICanRedoHistoryReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APICanRedoHistoryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APICanUndoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
            const args = {
                TestAPI: "WSM.APICanUndoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APICanRedoHistoryToDeltaReadOnly = function(nHistoryID,nDeltaID) {
            const args = {
                TestAPI: "WSM.APICanRedoHistoryToDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIUndoOrRedoHistoryToDelta = function(nHistoryID,nDeltaID,bAndDeleteRedo) {
            const args = {
                TestAPI: "WSM.APIUndoOrRedoHistoryToDelta",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID,
    bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllHistoryDeltasReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetAllHistoryDeltasReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetHistoryDeltasReadOnly = function(nHistoryID,nStartDeltaID,nEndDeltaID) {
            const args = {
                TestAPI: "WSM.APIGetHistoryDeltasReadOnly",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIMergeDeltas = function(nHistoryID,nStartDeltaID,nEndDeltaID,bReuseDiscardedObjectIDs) {
            const args = {
                TestAPI: "WSM.APIMergeDeltas",
nHistoryID: nHistoryID,
    nStartDeltaID: nStartDeltaID,
    nEndDeltaID: nEndDeltaID,
    bReuseDiscardedObjectIDs: bReuseDiscardedObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIReverseFaces = function(nHistoryID,aFaceIDs) {
            const args = {
                TestAPI: "WSM.APIReverseFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APICheckValidityReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APICheckValidityReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APICheckHistoryValidityReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APICheckHistoryValidityReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIComputeAreaReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIComputeAreaReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIComputeVolumeReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIComputeVolumeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APICopyObject = function(nHistoryID,nToHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APICopyObject",
nHistoryID: nHistoryID,
    nToHistoryID: nToHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIDragFace = function(nHistoryID,nObjectID,nDistance,bMerge) {
            const args = {
                TestAPI: "WSM.APIDragFace",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nDistance: nDistance,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        WSM.APIDragFaces = function(nHistoryID,aaFaceIDs,aDists,aDirs,bMerge) {
            const args = {
                TestAPI: "WSM.APIDragFaces",
nHistoryID: nHistoryID,
    aaFaceIDs: aaFaceIDs,
    aDists: aDists,
    aDirs: aDirs,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        WSM.APIScaleFace = function(nHistoryID,nFaceID,aScaleFactor) {
            const args = {
                TestAPI: "WSM.APIScaleFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aScaleFactor: aScaleFactor
            };
            return callAsyncAPI(args);
        };

        WSM.APISetObjectProperties = function(nHistoryID,nObjectID,sObjectName,bReportAreaByLevel,aDefaultLevelIDs) {
            const args = {
                TestAPI: "WSM.APISetObjectProperties",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sObjectName: sObjectName,
    bReportAreaByLevel: bReportAreaByLevel,
    aDefaultLevelIDs: aDefaultLevelIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIOffsetFace = function(nHistoryID,nFaceID,dOffsetDistance,bOffsetHolesToo,trans,bReadOnly) {
            const args = {
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

        WSM.APITaperFace = function(nHistoryID,nFaceID,dRadians,axis) {
            const args = {
                TestAPI: "WSM.APITaperFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    dRadians: dRadians,
    axis: axis
            };
            return callAsyncAPI(args);
        };

        WSM.APIRotateFace = function(nHistoryID,nFaceID,aRadian) {
            const args = {
                TestAPI: "WSM.APIRotateFace",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    aRadian: aRadian
            };
            return callAsyncAPI(args);
        };

        WSM.APIRotateFaceBetweenPoints = function(nHistoryID,nFaceID,startPt,endPt) {
            const args = {
                TestAPI: "WSM.APIRotateFaceBetweenPoints",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    startPt: startPt,
    endPt: endPt
            };
            return callAsyncAPI(args);
        };

        WSM.APIMergeBody = function(nHistoryID,nBodyID,dSmoothCosAngle) {
            const args = {
                TestAPI: "WSM.APIMergeBody",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dSmoothCosAngle: dSmoothCosAngle
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateBlock = function(nHistoryID,point3d1,point3d2) {
            const args = {
                TestAPI: "WSM.APICreateBlock",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateCircleOrArc = function(nHistoryID,radius,posCenter,xAxis,yAxis,dStartParam,dEndParam,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets) {
            const args = {
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

        WSM.APICreateCircleOrArcFromPoints = function(nHistoryID,arcStartPos,arcEndPos,thirdPoint,accuracyORcount,bReadOnly,trans,nMinimumNumberOfFacets,bCircle) {
            const args = {
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

        WSM.APICreateHermiteSpline = function(nHistoryID,aControlPoints,bClosed,startTangent,endTangent,bReadOnly) {
            const args = {
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

        WSM.APICreateClampedHermiteSplineDataReadOnly = function(nHistoryID,aControlPointsOld,startTangentOld,endTangentOld,bClosedOld,aVertexIDsOnSpline,nNumberOfNewContolPoints) {
            const args = {
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

        WSM.APICreateRectangle = function(nHistoryID,firstEdgePt1,firstEdgePt2,projectionPt,bReadOnly) {
            const args = {
                TestAPI: "WSM.APICreateRectangle",
nHistoryID: nHistoryID,
    firstEdgePt1: firstEdgePt1,
    firstEdgePt2: firstEdgePt2,
    projectionPt: projectionPt,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateHemisphere = function(nHistoryID,nRadius,centerPt,nAccuracyORcount) {
            const args = {
                TestAPI: "WSM.APICreateHemisphere",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateCone = function(nHistoryID,nRadius,nHeight,centerPt,nAccuracyORcount) {
            const args = {
                TestAPI: "WSM.APICreateCone",
nHistoryID: nHistoryID,
    nRadius: nRadius,
    nHeight: nHeight,
    centerPt: centerPt,
    nAccuracyORcount: nAccuracyORcount
            };
            return callAsyncAPI(args);
        };

        WSM.APISweep = function(nHistoryID,aProfile,aPath,bRemoveUnusedProfileAndPath) {
            const args = {
                TestAPI: "WSM.APISweep",
nHistoryID: nHistoryID,
    aProfile: aProfile,
    aPath: aPath,
    bRemoveUnusedProfileAndPath: bRemoveUnusedProfileAndPath
            };
            return callAsyncAPI(args);
        };

        WSM.APIOffset3d = function(nHistoryID,nObjectID,dDistance) {
            const args = {
                TestAPI: "WSM.APIOffset3d",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    dDistance: dDistance
            };
            return callAsyncAPI(args);
        };

        WSM.APIShell = function(nHistoryID,nBodyID,dDistance) {
            const args = {
                TestAPI: "WSM.APIShell",
nHistoryID: nHistoryID,
    nBodyID: nBodyID,
    dDistance: dDistance
            };
            return callAsyncAPI(args);
        };

        WSM.APIBlend = function(nHistoryID,dRadius,aPathIDs,accuracyORcount,nMinimumNumberOfFacets) {
            const args = {
                TestAPI: "WSM.APIBlend",
nHistoryID: nHistoryID,
    dRadius: dRadius,
    aPathIDs: aPathIDs,
    accuracyORcount: accuracyORcount,
    nMinimumNumberOfFacets: nMinimumNumberOfFacets
            };
            return callAsyncAPI(args);
        };

        WSM.APIOffsetEdges = function(nHistoryID,nEdgeIDs,dOffsetDistance,trans,bReadOnly) {
            const args = {
                TestAPI: "WSM.APIOffsetEdges",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs,
    dOffsetDistance: dOffsetDistance,
    trans: trans,
    bReadOnly: bReadOnly
            };
            return callAsyncAPI(args);
        };

        WSM.APICover = function(nHistoryID,aEdgeIDs,bMerge) {
            const args = {
                TestAPI: "WSM.APICover",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    bMerge: bMerge
            };
            return callAsyncAPI(args);
        };

        WSM.APILoft = function(nHistoryID,aaProfileIDs,bDeleteInteriorProfileFaces) {
            const args = {
                TestAPI: "WSM.APILoft",
nHistoryID: nHistoryID,
    aaProfileIDs: aaProfileIDs,
    bDeleteInteriorProfileFaces: bDeleteInteriorProfileFaces
            };
            return callAsyncAPI(args);
        };

        WSM.APIExtrudeEdges = function(nHistoryID,aProfileIDs,t) {
            const args = {
                TestAPI: "WSM.APIExtrudeEdges",
nHistoryID: nHistoryID,
    aProfileIDs: aProfileIDs,
    t: t
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadAXMFile = function(nHistoryID,sFilePath,isImport,logOutputPath) {
            const args = {
                TestAPI: "WSM.APILoadAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    isImport: isImport,
    logOutputPath: logOutputPath
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadMaterialsFromAXMFile = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.APILoadMaterialsFromAXMFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveToAXMFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,aPreviewImage,bWithChildren) {
            const args = {
                TestAPI: "WSM.APISaveToAXMFileReadOnly",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    sFilePath: sFilePath,
    aPreviewImage: aPreviewImage,
    bWithChildren: bWithChildren
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadFromFile = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
            const args = {
                TestAPI: "WSM.APILoadFromFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadFromFacets = function(nHistoryID,facetsData,dMaxDistanceFromOrigin,dRemoveDuplicateTol) {
            const args = {
                TestAPI: "WSM.APILoadFromFacets",
nHistoryID: nHistoryID,
    facetsData: facetsData,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dRemoveDuplicateTol: dRemoveDuplicateTol
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveLastDeltaToBinaryFile = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.APISaveLastDeltaToBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveDeltaToBinaryStringReadOnly = function(nHistoryID,nDeltaID) {
            const args = {
                TestAPI: "WSM.APISaveDeltaToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    nDeltaID: nDeltaID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetLastDeltaIDReadOnly = function(nHistoryID,nBeforeLast) {
            const args = {
                TestAPI: "WSM.APIGetLastDeltaIDReadOnly",
nHistoryID: nHistoryID,
    nBeforeLast: nBeforeLast
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveDeltaToSolidDefReadOnly = function(nHistoryID,bForUndo) {
            const args = {
                TestAPI: "WSM.APISaveDeltaToSolidDefReadOnly",
nHistoryID: nHistoryID,
    bForUndo: bForUndo
            };
            return callAsyncAPI(args);
        };

        WSM.APIAddSolidDefGuids = function(nHistoryID,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIAddSolidDefGuids",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadDeltaFromBinaryString = function(nHistoryID,base64Str,nDeltaID,base64encoded) {
            const args = {
                TestAPI: "WSM.APILoadDeltaFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    nDeltaID: nDeltaID,
    base64encoded: base64encoded
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveToFileReadOnly = function(nHistoryID,aObjectIDs,sFilePath,eFileType,bWithChildren,dExportScale,aExcludedObjects,aLayerDisplayedNegateVec) {
            const args = {
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

        WSM.APISaveAllActiveObjectsToBinaryFileReadOnly = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.APISaveAllActiveObjectsToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveHistoryToBinaryFileReadOnly = function(nHistoryID,sFilePath,aLayerDisplayedNegateVec) {
            const args = {
                TestAPI: "WSM.APISaveHistoryToBinaryFileReadOnly",
nHistoryID: nHistoryID,
    sFilePath: sFilePath,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveHistoryToBinaryStringReadOnly = function(nHistoryID,bBase64Encode,aLayerDisplayedNegateVec) {
            const args = {
                TestAPI: "WSM.APISaveHistoryToBinaryStringReadOnly",
nHistoryID: nHistoryID,
    bBase64Encode: bBase64Encode,
    aLayerDisplayedNegateVec: aLayerDisplayedNegateVec
            };
            return callAsyncAPI(args);
        };

        WSM.APISaveToStringReadOnly = function(nHistoryID,aObjectIDs,bWithChildren,aExcludedObjects,aLayerDisplayedNegateVec,eFileType) {
            const args = {
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

        WSM.APILoadFromString = function(nHistoryID,saveString,eFileType,dMaxDistanceFromOrigin,dScaleFactor) {
            const args = {
                TestAPI: "WSM.APILoadFromString",
nHistoryID: nHistoryID,
    saveString: saveString,
    eFileType: eFileType,
    dMaxDistanceFromOrigin: dMaxDistanceFromOrigin,
    dScaleFactor: dScaleFactor
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadHistoryFromBinaryString = function(nHistoryID,base64Str,base64encoded) {
            const args = {
                TestAPI: "WSM.APILoadHistoryFromBinaryString",
nHistoryID: nHistoryID,
    base64Str: base64Str,
    base64encoded: base64encoded
            };
            return callAsyncAPI(args);
        };

        WSM.APILoadDeltaFromBinaryFile = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.APILoadDeltaFromBinaryFile",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        WSM.APICreatePolyline = function(nHistoryID,aPoint3ds,bForceClosed) {
            const args = {
                TestAPI: "WSM.APICreatePolyline",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    bForceClosed: bForceClosed
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateExtrusion = function(nHistoryID,aPoint3ds,dist) {
            const args = {
                TestAPI: "WSM.APICreateExtrusion",
nHistoryID: nHistoryID,
    aPoint3ds: aPoint3ds,
    dist: dist
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateCylinder = function(nHistoryID,aPosCenter,aRadius,aHeight,aAccuracyORcount,aAxis) {
            const args = {
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

        WSM.APIGetBodyFacesReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetBodyFacesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIRegisterProgressCallbacksReadOnly = function(startCbkStr,progressCbkStr,finishCbkStr,progressIncrement,progressStart,progressEnd) {
            const args = {
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

        WSM.APIGetTopLevelOwnersReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetTopLevelOwnersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectsByTypeReadOnly = function(nHistoryID,nObjectID,nType,bUpstream) {
            const args = {
                TestAPI: "WSM.APIGetObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    nType: nType,
    bUpstream: bUpstream
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllObjectsByTypeReadOnly = function(nHistoryID,nType) {
            const args = {
                TestAPI: "WSM.APIGetAllObjectsByTypeReadOnly",
nHistoryID: nHistoryID,
    nType: nType
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectTypeReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectTypeReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectNameReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectNameReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectPropertiesReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectPropertiesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly = function(nHistoryID,nObjectType,bForUndo) {
            const args = {
                TestAPI: "WSM.APIGetCreatedChangedAndDeletedInActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nObjectType: nObjectType,
    bForUndo: bForUndo
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly = function(nHistoryID,nStartDelta,nEndDelta,aObjectTypes) {
            const args = {
                TestAPI: "WSM.APIGetCreatedChangedAndDeletedInDeltaRangeReadOnly",
nHistoryID: nHistoryID,
    nStartDelta: nStartDelta,
    nEndDelta: nEndDelta,
    aObjectTypes: aObjectTypes
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetEdgeOrVertexMarkedSmoothReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetEdgesOrVerticesMarkedSmooth = function(nHistoryID,aObjectIDs,bSmooth) {
            const args = {
                TestAPI: "WSM.APISetEdgesOrVerticesMarkedSmooth",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    bSmooth: bSmooth
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsEdgeSilhouetteReadOnly = function(nHistoryID,nEdgeID,cameraPos,cameraDir,bPerspectiveView) {
            const args = {
                TestAPI: "WSM.APIIsEdgeSilhouetteReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
            };
            return callAsyncAPI(args);
        };

        WSM.APIDetectSilhouettesReadOnly = function(nHistoryID,nEdgeIDs,cameraPos,cameraDir,bPerspectiveView,bSmoothOnly) {
            const args = {
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

        WSM.APIDetectFreeEdgesReadOnly = function(nHistoryID,nEdgeIDs) {
            const args = {
                TestAPI: "WSM.APIDetectFreeEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeIDs: nEdgeIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsEdgeManifoldReadOnly = function(nHistoryID,nEdgeID) {
            const args = {
                TestAPI: "WSM.APIIsEdgeManifoldReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFacePlaneReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFacePlaneReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceCentroidPoint3dReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFaceCentroidPoint3dReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceConnectedComponentReadOnly = function(nHistoryID,nFaceID,bUseVertices,bSmooth) {
            const args = {
                TestAPI: "WSM.APIGetFaceConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bUseVertices: bUseVertices,
    bSmooth: bSmooth
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceVariantReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFaceVariantReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceVertexNormalsReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFaceVertexNormalsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetVertexPoint3dReadOnly = function(nHistoryID,nVertexID) {
            const args = {
                TestAPI: "WSM.APIGetVertexPoint3dReadOnly",
nHistoryID: nHistoryID,
    nVertexID: nVertexID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetIdOfActiveDeltaReadOnly = function(nHistoryID,nDeltaOffset) {
            const args = {
                TestAPI: "WSM.APIGetIdOfActiveDeltaReadOnly",
nHistoryID: nHistoryID,
    nDeltaOffset: nDeltaOffset
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetBodyEdgesReadOnly = function(nHistoryID,nBodyID) {
            const args = {
                TestAPI: "WSM.APIGetBodyEdgesReadOnly",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllNonOwnedReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetAllNonOwnedReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllConnectedNonOwnedReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetAllConnectedNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIRayFireReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces) {
            const args = {
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

        WSM.APIRayFireSortedReadOnly = function(nHistoryID,line3dPickRay,dRayRadius,bVertices,bEdges,bFaces,dMaxParam,bSearchInGroups) {
            const args = {
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

        WSM.APIIntersectsNegativeSideOfPlanesReadOnly = function(nHistoryID,aPlanes,dTol,bVertices,bEdges,bFaces,bStrict,line3dPickRay,bSearchInGroups,bPickInstances) {
            const args = {
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

        WSM.APITransformObject = function(nHistoryID,nObjectID,transf3d) {
            const args = {
                TestAPI: "WSM.APITransformObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        WSM.APITransformObjects = function(nHistoryID,aObjectIDs,transf3d) {
            const args = {
                TestAPI: "WSM.APITransformObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        WSM.APIDeleteObject = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIDeleteObject",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIDeleteObjects = function(nHistoryID,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIDeleteObjects",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateEmptyBody = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APICreateEmptyBody",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIAddFaceComponentToBody = function(nHistoryID,nFaceID,nBodyID) {
            const args = {
                TestAPI: "WSM.APIAddFaceComponentToBody",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        WSM.APIMoveVertices = function(nHistoryID,aVertexIDs,aNewVertexPositions) {
            const args = {
                TestAPI: "WSM.APIMoveVertices",
nHistoryID: nHistoryID,
    aVertexIDs: aVertexIDs,
    aNewVertexPositions: aNewVertexPositions
            };
            return callAsyncAPI(args);
        };

        WSM.APIMoveObject = function(nHistoryID,objectID,displacement) {
            const args = {
                TestAPI: "WSM.APIMoveObject",
nHistoryID: nHistoryID,
    objectID: objectID,
    displacement: displacement
            };
            return callAsyncAPI(args);
        };

        WSM.APIMoveObjects = function(nHistoryID,objectIDs,transf3d) {
            const args = {
                TestAPI: "WSM.APIMoveObjects",
nHistoryID: nHistoryID,
    objectIDs: objectIDs,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        WSM.APIDumpResults = function() {
            const args = {
                TestAPI: "WSM.APIDumpResults"
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetResultsCount = function() {
            const args = {
                TestAPI: "WSM.APIGetResultsCount"
            };
            return callAsyncAPI(args);
        };

        WSM.APIClearResults = function() {
            const args = {
                TestAPI: "WSM.APIClearResults"
            };
            return callAsyncAPI(args);
        };

        WSM.APIConnectPoint3ds = function(nHistoryID,point3d1,point3d2) {
            const args = {
                TestAPI: "WSM.APIConnectPoint3ds",
nHistoryID: nHistoryID,
    point3d1: point3d1,
    point3d2: point3d2
            };
            return callAsyncAPI(args);
        };

        WSM.APIConnectVertexAndPoint3d = function(nHistoryID,nVertexID,point3d) {
            const args = {
                TestAPI: "WSM.APIConnectVertexAndPoint3d",
nHistoryID: nHistoryID,
    nVertexID: nVertexID,
    point3d: point3d
            };
            return callAsyncAPI(args);
        };

        WSM.APIConnectVertices = function(nHistoryID,nVertexID1,nVertexID2) {
            const args = {
                TestAPI: "WSM.APIConnectVertices",
nHistoryID: nHistoryID,
    nVertexID1: nVertexID1,
    nVertexID2: nVertexID2
            };
            return callAsyncAPI(args);
        };

        WSM.APIImprint = function(nHistoryID,nObjectID1,nObjectID2,bChangeBoth) {
            const args = {
                TestAPI: "WSM.APIImprint",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    bChangeBoth: bChangeBoth
            };
            return callAsyncAPI(args);
        };

        WSM.APIImprintWithPlane = function(nHistoryID,nObjectID,plane) {
            const args = {
                TestAPI: "WSM.APIImprintWithPlane",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    plane: plane
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsEdgeOnCircleReadOnly = function(nHistoryID,nEdgeID) {
            const args = {
                TestAPI: "WSM.APIIsEdgeOnCircleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        WSM.APIEditCircleEdges = function(nHistoryID,nEdgeIDs,radius,center,normal,xaxis,angle) {
            const args = {
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

        WSM.APIIsEdgeOnSplineReadOnly = function(nHistoryID,nEdgeID) {
            const args = {
                TestAPI: "WSM.APIIsEdgeOnSplineReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        WSM.APIEditSplineEdges = function(nHistoryID,nEdgeIDs,aControlPoints,bClosed,startTangent,endTangent) {
            const args = {
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

        WSM.APIIsFaceOnCylinderReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIIsFaceOnCylinderReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIEditCylinderFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
            const args = {
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

        WSM.APIIsFaceOnSphereReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIIsFaceOnSphereReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIEditSphereFaces = function(nHistoryID,nFaceIDs,radius,center,normal,xaxis) {
            const args = {
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

        WSM.APIIsFaceOnExtrudeReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIIsFaceOnExtrudeReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsFaceOnBlendReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIIsFaceOnBlendReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIUnite = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
            const args = {
                TestAPI: "WSM.APIUnite",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APISubtract = function(nHistoryID,nObjectID1,nObjectID2,aExtraObjectsIDs) {
            const args = {
                TestAPI: "WSM.APISubtract",
nHistoryID: nHistoryID,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2,
    aExtraObjectsIDs: aExtraObjectsIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIUniteNonDestructive = function(blank,tools) {
            const args = {
                TestAPI: "WSM.APIUniteNonDestructive",
blank: blank,
    tools: tools
            };
            return callAsyncAPI(args);
        };

        WSM.APISubtractNonDestructive = function(blank,tools) {
            const args = {
                TestAPI: "WSM.APISubtractNonDestructive",
blank: blank,
    tools: tools
            };
            return callAsyncAPI(args);
        };

        WSM.APISeparate = function(nHistoryID,nBodyID) {
            const args = {
                TestAPI: "WSM.APISeparate",
nHistoryID: nHistoryID,
    nBodyID: nBodyID
            };
            return callAsyncAPI(args);
        };

        WSM.APISlice = function(nHistoryID,nDestinationHistoryID,nObjectID,plane) {
            const args = {
                TestAPI: "WSM.APISlice",
nHistoryID: nHistoryID,
    nDestinationHistoryID: nDestinationHistoryID,
    nObjectID: nObjectID,
    plane: plane
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetMemorySizeReadOnly = function(nHistoryID,bCollapsedHistoryWithLiveObjsOnly) {
            const args = {
                TestAPI: "WSM.APIGetMemorySizeReadOnly",
nHistoryID: nHistoryID,
    bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetVersionReadOnly = function() {
            const args = {
                TestAPI: "WSM.APIGetVersionReadOnly"
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetBoxReadOnly = function(nHistoryID,nObjectID,transf) {
            const args = {
                TestAPI: "WSM.APIGetBoxReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    transf: transf
            };
            return callAsyncAPI(args);
        };

        WSM.APIEnableJournaling = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.APIEnableJournaling",
nHistoryID: nHistoryID,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        WSM.APIEnableJournalingToString = function(nHistoryID,bIncludeReadOnly) {
            const args = {
                TestAPI: "WSM.APIEnableJournalingToString",
nHistoryID: nHistoryID,
    bIncludeReadOnly: bIncludeReadOnly
            };
            return callAsyncAPI(args);
        };

        WSM.APIEnableJournalingTypes = function(aTypes) {
            const args = {
                TestAPI: "WSM.APIEnableJournalingTypes",
aTypes: aTypes
            };
            return callAsyncAPI(args);
        };

        WSM.APIDisableJournaling = function() {
            const args = {
                TestAPI: "WSM.APIDisableJournaling"
            };
            return callAsyncAPI(args);
        };

        WSM.APIFaceContainsPointReadOnly = function(nHistoryID,nFaceID,point) {
            const args = {
                TestAPI: "WSM.APIFaceContainsPointReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    point: point
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetInvalidID = function() {
            const args = {
                TestAPI: "WSM.APIGetInvalidID"
            };
            return callAsyncAPI(args);
        };

        WSM.APIValidID = function(nID) {
            const args = {
                TestAPI: "WSM.APIValidID",
nID: nID
            };
            return callAsyncAPI(args);
        };

        WSM.FacetsBodyData = function(m_points,m_polygonIndices,m_polygonSmoothingIds,m_colors,m_polygonColorIndices,m_pointColors) {
            const args = {
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

        WSM.GroupInstancePath = function(objectIDs) {
            const args = {
                TestAPI: "WSM.GroupInstancePath",
objectIDs: objectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePathAreEqual = function(path1,path2) {
            const args = {
                TestAPI: "WSM.GroupInstancePathAreEqual",
path1: path1,
    path2: path2
            };
            return callAsyncAPI(args);
        };

        WSM.ObjectHistoryID = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.ObjectHistoryID",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.ObjectHistoryIDAreEqual = function(id1,id2) {
            const args = {
                TestAPI: "WSM.ObjectHistoryIDAreEqual",
id1: id1,
    id2: id2
            };
            return callAsyncAPI(args);
        };

        WSM.Color = function(r,g,b,a) {
            const args = {
                TestAPI: "WSM.Color",
r: r,
    g: g,
    b: b,
    a: a
            };
            return callAsyncAPI(args);
        };

        WSM.ColorAreEqual = function(c1,c2) {
            const args = {
                TestAPI: "WSM.ColorAreEqual",
c1: c1,
    c2: c2
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetCoedgeDirectionReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetCoedgeDirectionReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetConvexityReadOnly = function(nHistoryID,nEdgeOrLoopID) {
            const args = {
                TestAPI: "WSM.APIGetConvexityReadOnly",
nHistoryID: nHistoryID,
    nEdgeOrLoopID: nEdgeOrLoopID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetConvexityConnectedComponentReadOnly = function(nHistoryID,nLoopOrFaceID,nConvexity) {
            const args = {
                TestAPI: "WSM.APIGetConvexityConnectedComponentReadOnly",
nHistoryID: nHistoryID,
    nLoopOrFaceID: nLoopOrFaceID,
    nConvexity: nConvexity
            };
            return callAsyncAPI(args);
        };

        WSM.APICopyOrSketchAndTransformObjects = function(nFromHistoryID,nToHistoryID,aFromObjectIDs,transform,nNumCopies,bGroupBodies,groupTransf3d) {
            const args = {
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

        WSM.APISetObjectsMaterial = function(nHistoryID,aObjectIDs,nMaterialID) {
            const args = {
                TestAPI: "WSM.APISetObjectsMaterial",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetFaceBacksideMaterial = function(nHistoryID,aFaceIDs,nMaterialID) {
            const args = {
                TestAPI: "WSM.APISetFaceBacksideMaterial",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceBacksideMaterialReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFaceBacksideMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectAttributesReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectAttributesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectMaterialReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetObjectMaterialReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateMaterial = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,nTextureID,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures) {
            const args = {
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

        WSM.APICreateMaterialWithTexture = function(nHistoryID,nColor,dHorizonalScale,dVerticalScale,aBitmapData,bUseBitmapAlpha,sMaterialName,sMaterialIdentifier,aAdditionalRenderData,aAdditionalTextures,sTextureName) {
            const args = {
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

        WSM.APISetMaterialColor = function(nHistoryID,nMaterialID,nColor) {
            const args = {
                TestAPI: "WSM.APISetMaterialColor",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    nColor: nColor
            };
            return callAsyncAPI(args);
        };

        WSM.APISetMaterialData = function(nHistoryID,nMaterialID,nColor,dHorizontalScale,dVerticalScale,nTextureID) {
            const args = {
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

        WSM.APISetMaterialTexture = function(nHistoryID,nMaterialID,dHorizontalScale,dVerticalScale,nTextureID) {
            const args = {
                TestAPI: "WSM.APISetMaterialTexture",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID,
    dHorizontalScale: dHorizontalScale,
    dVerticalScale: dVerticalScale,
    nTextureID: nTextureID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetMaterialDataReadOnly = function(nHistoryID,nMaterialID) {
            const args = {
                TestAPI: "WSM.APIGetMaterialDataReadOnly",
nHistoryID: nHistoryID,
    nMaterialID: nMaterialID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateTexture = function(nHistoryID,aBitmapData,bUseBitmapAlpha,sTextureName) {
            const args = {
                TestAPI: "WSM.APICreateTexture",
nHistoryID: nHistoryID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha,
    sTextureName: sTextureName
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetTextureDataReadOnly = function(nHistoryID,nTextureID) {
            const args = {
                TestAPI: "WSM.APIGetTextureDataReadOnly",
nHistoryID: nHistoryID,
    nTextureID: nTextureID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetTextureData = function(nHistoryID,nTextureID,aBitmapData,bUseBitmapAlpha) {
            const args = {
                TestAPI: "WSM.APISetTextureData",
nHistoryID: nHistoryID,
    nTextureID: nTextureID,
    aBitmapData: aBitmapData,
    bUseBitmapAlpha: bUseBitmapAlpha
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectTextureCoordinatesReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectTextureCoordinatesReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateLevelObjects = function(nHistoryID,aLevelsData) {
            const args = {
                TestAPI: "WSM.APICreateLevelObjects",
nHistoryID: nHistoryID,
    aLevelsData: aLevelsData
            };
            return callAsyncAPI(args);
        };

        WSM.APISetLevelsData = function(nHistoryID,aLevelIDs,aLevelsData) {
            const args = {
                TestAPI: "WSM.APISetLevelsData",
nHistoryID: nHistoryID,
    aLevelIDs: aLevelIDs,
    aLevelsData: aLevelsData
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetLevelDataReadOnly = function(nHistoryID,nLevelID) {
            const args = {
                TestAPI: "WSM.APIGetLevelDataReadOnly",
nHistoryID: nHistoryID,
    nLevelID: nLevelID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetObjectsLevels = function(nHistoryID,aObjectIDs,aLevelsIDs) {
            const args = {
                TestAPI: "WSM.APISetObjectsLevels",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aLevelsIDs: aLevelsIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectLayersReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectLayersReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetObjectLevelsReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIGetObjectLevelsReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsObjectLiveReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIIsObjectLiveReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsHistoryLiveReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIIsHistoryLiveReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsNonOwnedReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIIsNonOwnedReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetLocalCoordinateSystemReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetLocalCoordinateSystemReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetLocalCoordinateSystem = function(nHistoryID,transf3d) {
            const args = {
                TestAPI: "WSM.APISetLocalCoordinateSystem",
nHistoryID: nHistoryID,
    transf3d: transf3d
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
            const args = {
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

        WSM.APICreateImageObjectWithTexture = function(nHistoryID,sName,fAlphaValue,bFeaturesVisible,aCornersVector,aBitmapData,sTextureName) {
            const args = {
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

        WSM.APICreateSatelliteImageObject = function(nHistoryID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector,coordinates,coordinatesSpan,aPixelDimensionsVector) {
            const args = {
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

        WSM.APIMoveImage = function(nHistoryID,nImageID,nShift) {
            const args = {
                TestAPI: "WSM.APIMoveImage",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    nShift: nShift
            };
            return callAsyncAPI(args);
        };

        WSM.APISetImageData = function(nHistoryID,nImageID,sName,nTextureID,fAlphaValue,bFeaturesVisible,aCornersVector) {
            const args = {
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

        WSM.APIGetFaceFacetsReadOnly = function(nHistoryID,nFaceID) {
            const args = {
                TestAPI: "WSM.APIGetFaceFacetsReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetSatelliteData = function(nHistoryID,nImageID,coordinates,coordinatesSpan,aPixelDimensions) {
            const args = {
                TestAPI: "WSM.APISetSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID,
    coordinates: coordinates,
    coordinatesSpan: coordinatesSpan,
    aPixelDimensions: aPixelDimensions
            };
            return callAsyncAPI(args);
        };

        WSM.APIRemoveSatelliteData = function(nHistoryID,nImageID) {
            const args = {
                TestAPI: "WSM.APIRemoveSatelliteData",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetImageDataReadOnly = function(nHistoryID,nImageID) {
            const args = {
                TestAPI: "WSM.APIGetImageDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetSatelliteDataReadOnly = function(nHistoryID,nImageID) {
            const args = {
                TestAPI: "WSM.APIGetSatelliteDataReadOnly",
nHistoryID: nHistoryID,
    nImageID: nImageID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateGroup = function(nHistoryID,aObjectIDs,aInstanceTransforms,nReferencedHistoryID,transGeometry) {
            const args = {
                TestAPI: "WSM.APICreateGroup",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs,
    aInstanceTransforms: aInstanceTransforms,
    nReferencedHistoryID: nReferencedHistoryID,
    transGeometry: transGeometry
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetRevitFamilyInformationReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetRevitFamilyInformationReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetRevitFamilyInformation = function(nHistoryID,bIsGeneratedFromRFA,bIsGeneratedFromBuiltinRFA,familyCategory,familyReference,familyType,familyExtraData) {
            const args = {
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

        WSM.APIGetGroupReferencedHistoryReadOnly = function(nHistoryID,nGroupOrInstanceID,bDeletedInstanceOK) {
            const args = {
                TestAPI: "WSM.APIGetGroupReferencedHistoryReadOnly",
nHistoryID: nHistoryID,
    nGroupOrInstanceID: nGroupOrInstanceID,
    bDeletedInstanceOK: bDeletedInstanceOK
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetAllAggregateTransf3dsReadOnly = function(nReferencedHistoryID,nTopMostHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetAllAggregateTransf3dsReadOnly",
nReferencedHistoryID: nReferencedHistoryID,
    nTopMostHistoryID: nTopMostHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIFlattenGroupsOrInstances = function(nHistoryID,aGroupOrInstanceIDs,bRecursive,bImprint) {
            const args = {
                TestAPI: "WSM.APIFlattenGroupsOrInstances",
nHistoryID: nHistoryID,
    aGroupOrInstanceIDs: aGroupOrInstanceIDs,
    bRecursive: bRecursive,
    bImprint: bImprint
            };
            return callAsyncAPI(args);
        };

        WSM.APIAddInstancesToGroup = function(nHistoryID,nGroupID,aTransforms) {
            const args = {
                TestAPI: "WSM.APIAddInstancesToGroup",
nHistoryID: nHistoryID,
    nGroupID: nGroupID,
    aTransforms: aTransforms
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateSeparateHistoriesForInstances = function(nHistoryID,aInstanceIDs,bNewGroupPerInstance) {
            const args = {
                TestAPI: "WSM.APICreateSeparateHistoriesForInstances",
nHistoryID: nHistoryID,
    aInstanceIDs: aInstanceIDs,
    bNewGroupPerInstance: bNewGroupPerInstance
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateStringAttribute = function(nHistoryID,sKey,sValue,aObjIDs,nCopyBehavior,bIsSharedOnSplit) {
            const args = {
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

        WSM.APIGetStringAttributeKeyValueReadOnly = function(nHistoryID,nStringAttributeID) {
            const args = {
                TestAPI: "WSM.APIGetStringAttributeKeyValueReadOnly",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetStringAttributeValue = function(nHistoryID,nStringAttributeID,sValue) {
            const args = {
                TestAPI: "WSM.APISetStringAttributeValue",
nHistoryID: nHistoryID,
    nStringAttributeID: nStringAttributeID,
    sValue: sValue
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetStringAttributesByKeyReadOnly = function(nHistoryID,nObjectID,sKey) {
            const args = {
                TestAPI: "WSM.APIGetStringAttributesByKeyReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID,
    sKey: sKey
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetRenderableFaceReadOnly = function(nHistoryID,nFaceID,bCalculateTexCoords,bBackSide) {
            const args = {
                TestAPI: "WSM.APIGetRenderableFaceReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bCalculateTexCoords: bCalculateTexCoords,
    bBackSide: bBackSide
            };
            return callAsyncAPI(args);
        };

        WSM.APISetFaceUVDataAttributes = function(nHistoryID,aFaceIDs,rTransf3d,bReplaceTransform,tformCenter,tformUVCenter) {
            const args = {
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

        WSM.APIGetFaceUVDataTransformReadOnly = function(nHistoryID,nFaceID,bBackSide) {
            const args = {
                TestAPI: "WSM.APIGetFaceUVDataTransformReadOnly",
nHistoryID: nHistoryID,
    nFaceID: nFaceID,
    bBackSide: bBackSide
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetFaceUVDataAttributeUVsReadOnly = function(nHistoryID,nFaceUVDataAttributeID) {
            const args = {
                TestAPI: "WSM.APIGetFaceUVDataAttributeUVsReadOnly",
nHistoryID: nHistoryID,
    nFaceUVDataAttributeID: nFaceUVDataAttributeID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetEdgePointsReadOnly = function(nHistoryID,nEdgeID) {
            const args = {
                TestAPI: "WSM.APIGetEdgePointsReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsHistoryNonTemporaryReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIIsHistoryNonTemporaryReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateLayer = function(nHistoryID,name,bDisplayed) {
            const args = {
                TestAPI: "WSM.APICreateLayer",
nHistoryID: nHistoryID,
    name: name,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetLayerDataReadOnly = function(nHistoryID,nLayerID) {
            const args = {
                TestAPI: "WSM.APIGetLayerDataReadOnly",
nHistoryID: nHistoryID,
    nLayerID: nLayerID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetLayerData = function(nHistoryID,nLayerID,name,bDisplayed) {
            const args = {
                TestAPI: "WSM.APISetLayerData",
nHistoryID: nHistoryID,
    nLayerID: nLayerID,
    name: name,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        WSM.APISetLayersDisplayed = function(nHistoryID,aLayerIDs,bDisplayed) {
            const args = {
                TestAPI: "WSM.APISetLayersDisplayed",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    bDisplayed: bDisplayed
            };
            return callAsyncAPI(args);
        };

        WSM.APIAddObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIAddObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIRemoveObjectsLayers = function(nHistoryID,aLayerIDs,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aLayerIDs: aLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIAddRemoveObjectsLayers = function(nHistoryID,aAddLayerIDs,aRemoveLayerIDs,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIAddRemoveObjectsLayers",
nHistoryID: nHistoryID,
    aAddLayerIDs: aAddLayerIDs,
    aRemoveLayerIDs: aRemoveLayerIDs,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateGeometryFromData = function(nHistoryID,aTextures,aMaterials,aLayers,aInstances,aFaceCollections,aEdges,aCurves,aImages,aGroupName,bCreateMesh) {
            const args = {
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

        WSM.APICreateEdgesFromData = function(nHistoryID,aLayers,aEdges,aCurves,bCreateMesh,accuracyORcount) {
            const args = {
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

        WSM.APIIsEdgeMergeableReadOnly = function(nHistoryID,nEdgeID,bUseMaterial) {
            const args = {
                TestAPI: "WSM.APIIsEdgeMergeableReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bUseMaterial: bUseMaterial
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetEdgeStyleReadOnly = function(nHistoryID,nEdgeID) {
            const args = {
                TestAPI: "WSM.APIGetEdgeStyleReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetEdgesStyle = function(nHistoryID,aEdgeIDs,nColor) {
            const args = {
                TestAPI: "WSM.APISetEdgesStyle",
nHistoryID: nHistoryID,
    aEdgeIDs: aEdgeIDs,
    nColor: nColor
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsExactMatchReadOnly = function(nHistoryID1,nHistoryID2,nObjectID1,nObjectID2) {
            const args = {
                TestAPI: "WSM.APIIsExactMatchReadOnly",
nHistoryID1: nHistoryID1,
    nHistoryID2: nHistoryID2,
    nObjectID1: nObjectID1,
    nObjectID2: nObjectID2
            };
            return callAsyncAPI(args);
        };

        WSM.APIDebugObjectReadOnly = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.APIDebugObjectReadOnly",
nHistoryID: nHistoryID,
    nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetDynamoModelInformationReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetDynamoModelInformationReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APISetDynamoModelInformation = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APISetDynamoModelInformation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.Is32Bit = function() {
            const args = {
                TestAPI: "WSM.Is32Bit"
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetConnectedEdgesReadOnly = function(nHistoryID,nEdgeID,bBreakOnNonSmooth) {
            const args = {
                TestAPI: "WSM.APIGetConnectedEdgesReadOnly",
nHistoryID: nHistoryID,
    nEdgeID: nEdgeID,
    bBreakOnNonSmooth: bBreakOnNonSmooth
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetEnabledJournalingTypesReadOnly = function() {
            const args = {
                TestAPI: "WSM.APIGetEnabledJournalingTypesReadOnly"
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetHistoryReferencingGroupsReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIGetHistoryReferencingGroupsReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetInstanceTransf3dReadOnly = function(nHistoryID,nInstanceID) {
            const args = {
                TestAPI: "WSM.APIGetInstanceTransf3dReadOnly",
nHistoryID: nHistoryID,
    nInstanceID: nInstanceID
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetPointsFromObjectIDsReadOnly = function(nHistoryID,aIDs) {
            const args = {
                TestAPI: "WSM.APIGetPointsFromObjectIDsReadOnly",
nHistoryID: nHistoryID,
    aIDs: aIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsJournalingReadOnly = function() {
            const args = {
                TestAPI: "WSM.APIIsJournalingReadOnly"
            };
            return callAsyncAPI(args);
        };

        WSM.APICleanModel = function(nHistoryID,dEdgeTol) {
            const args = {
                TestAPI: "WSM.APICleanModel",
nHistoryID: nHistoryID,
    dEdgeTol: dEdgeTol
            };
            return callAsyncAPI(args);
        };

        WSM.APISplitAtNonManifoldEdgesAndVertices = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APISplitAtNonManifoldEdgesAndVertices",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateMesh = function(nHistoryID,aPoints,aTriangles,aNormals,aUVs,aColors) {
            const args = {
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

        WSM.APIGetMeshDataReadOnly = function(nHistoryID,nMeshID) {
            const args = {
                TestAPI: "WSM.APIGetMeshDataReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
            };
            return callAsyncAPI(args);
        };

        WSM.APIMeshContainsPointReadOnly = function(nHistoryID,nMeshID,point) {
            const args = {
                TestAPI: "WSM.APIMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        WSM.APIMeshPointOnOrInsideIfManifoldReadOnly = function(nHistoryID,nMeshID,point) {
            const args = {
                TestAPI: "WSM.APIMeshPointOnOrInsideIfManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        WSM.APIMeshComputeSilhouetteEdgesReadOnly = function(nHistoryID,nMeshID,cameraPos,cameraDir,bPerspectiveView) {
            const args = {
                TestAPI: "WSM.APIMeshComputeSilhouetteEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    cameraPos: cameraPos,
    cameraDir: cameraDir,
    bPerspectiveView: bPerspectiveView
            };
            return callAsyncAPI(args);
        };

        WSM.APIMeshComputeNonSmoothEdgesReadOnly = function(nHistoryID,nMeshID,dCosSmoothAngle) {
            const args = {
                TestAPI: "WSM.APIMeshComputeNonSmoothEdgesReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID,
    dCosSmoothAngle: dCosSmoothAngle
            };
            return callAsyncAPI(args);
        };

        WSM.APIConvertMeshesToObjects = function(nHistoryID,aMeshIDs,dCosSmoothAngle,bFlatten) {
            const args = {
                TestAPI: "WSM.APIConvertMeshesToObjects",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs,
    dCosSmoothAngle: dCosSmoothAngle,
    bFlatten: bFlatten
            };
            return callAsyncAPI(args);
        };

        WSM.APILinkMeshesForConversion = function(nHistoryID,aMeshIDs) {
            const args = {
                TestAPI: "WSM.APILinkMeshesForConversion",
nHistoryID: nHistoryID,
    aMeshIDs: aMeshIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APIConvertObjectsToMeshes = function(nHistoryID,aObjectIDs) {
            const args = {
                TestAPI: "WSM.APIConvertObjectsToMeshes",
nHistoryID: nHistoryID,
    aObjectIDs: aObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateVertex = function(nHistoryID,position) {
            const args = {
                TestAPI: "WSM.APICreateVertex",
nHistoryID: nHistoryID,
    position: position
            };
            return callAsyncAPI(args);
        };

        WSM.APIFlattenFaces = function(nHistoryID,aFaceIDs,dTol) {
            const args = {
                TestAPI: "WSM.APIFlattenFaces",
nHistoryID: nHistoryID,
    aFaceIDs: aFaceIDs,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        WSM.APICreateLineMesh = function(nHistoryID,aPoints,aIndices,aCounts) {
            const args = {
                TestAPI: "WSM.APICreateLineMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints,
    aIndices: aIndices,
    aCounts: aCounts
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetLineMeshDataReadOnly = function(nHistoryID,nLineMeshID) {
            const args = {
                TestAPI: "WSM.APIGetLineMeshDataReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID
            };
            return callAsyncAPI(args);
        };

        WSM.APILineMeshContainsPointReadOnly = function(nHistoryID,nLineMeshID,point) {
            const args = {
                TestAPI: "WSM.APILineMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nLineMeshID,aPlanes,line3dPickRay,dTol) {
            const args = {
                TestAPI: "WSM.APILineMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nLineMeshID: nLineMeshID,
    aPlanes: aPlanes,
    line3dPickRay: line3dPickRay,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        WSM.APICreatePointMesh = function(nHistoryID,aPoints) {
            const args = {
                TestAPI: "WSM.APICreatePointMesh",
nHistoryID: nHistoryID,
    aPoints: aPoints
            };
            return callAsyncAPI(args);
        };

        WSM.APIGetPointMeshDataReadOnly = function(nHistoryID,nPointMeshID) {
            const args = {
                TestAPI: "WSM.APIGetPointMeshDataReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID
            };
            return callAsyncAPI(args);
        };

        WSM.APIPointMeshContainsPointReadOnly = function(nHistoryID,nPointMeshID,point) {
            const args = {
                TestAPI: "WSM.APIPointMeshContainsPointReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    point: point
            };
            return callAsyncAPI(args);
        };

        WSM.APIIsMeshManifoldReadOnly = function(nHistoryID,nMeshID) {
            const args = {
                TestAPI: "WSM.APIIsMeshManifoldReadOnly",
nHistoryID: nHistoryID,
    nMeshID: nMeshID
            };
            return callAsyncAPI(args);
        };

        WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly = function(nHistoryID,nPointMeshID,aPlanes,dTol) {
            const args = {
                TestAPI: "WSM.APIPointMeshGetPointsOnNegativeSideOfPlanesReadOnly",
nHistoryID: nHistoryID,
    nPointMeshID: nPointMeshID,
    aPlanes: aPlanes,
    dTol: dTol
            };
            return callAsyncAPI(args);
        };

        WSM.APIPushMirrorTransformationsOntoGeometry = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APIPushMirrorTransformationsOntoGeometry",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.APICheckMassesCollideReadOnly = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.APICheckMassesCollideReadOnly",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };
WSM.InferenceEngine = {};

        WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
            const args = {
                TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.Reset = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.Reset"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.Reset = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.Reset"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.FindInputPoint = function(pickRay,previousInputPoint) {
            const args = {
                TestAPI: "WSM.InferenceEngine.FindInputPoint",
pickRay: pickRay,
        previousInputPoint: previousInputPoint
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.InputPointsAreEqual = function(inputPoint1,inputPoint2) {
            const args = {
                TestAPI: "WSM.InferenceEngine.InputPointsAreEqual",
inputPoint1: inputPoint1,
        inputPoint2: inputPoint2
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.DisableHoveredInferences = function(disable) {
            const args = {
                TestAPI: "WSM.InferenceEngine.DisableHoveredInferences",
disable: disable
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.PushHoveredLineInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.PushHoveredLineInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.PushHoveredPointInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.PushHoveredPointInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.AddPointInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.AddPointInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.AddLineInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.AddLineInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.AddPlaneInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.AddPlaneInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.LockInference = function(inference) {
            const args = {
                TestAPI: "WSM.InferenceEngine.LockInference",
inference: inference
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.ReleaseLockedInference = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.ReleaseLockedInference"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.HaveLockedInference = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.HaveLockedInference"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.SetVertexSnappingOnSplines = function(snap) {
            const args = {
                TestAPI: "WSM.InferenceEngine.SetVertexSnappingOnSplines",
snap: snap
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.SetUseExternalInputPointFinder = function(use) {
            const args = {
                TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinder",
use: use
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting = function(use) {
            const args = {
                TestAPI: "WSM.InferenceEngine.SetUseExternalInputPointFinderForTesting",
use: use
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.IgnoreObject = function(nObjectID,andChildren) {
            const args = {
                TestAPI: "WSM.InferenceEngine.IgnoreObject",
nObjectID: nObjectID,
        andChildren: andChildren
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.ClearIgnoreObjects = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.ClearIgnoreObjects"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.UseAsObscuringObject = function(nObjectID,andChildren) {
            const args = {
                TestAPI: "WSM.InferenceEngine.UseAsObscuringObject",
nObjectID: nObjectID,
        andChildren: andChildren
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.LineInference = function(line3d,lineInferenceType) {
            const args = {
                TestAPI: "WSM.InferenceEngine.LineInference",
line3d: line3d,
        lineInferenceType: lineInferenceType
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.PointInference = function(point3d) {
            const args = {
                TestAPI: "WSM.InferenceEngine.PointInference",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.InputPoint = function(point3d) {
            const args = {
                TestAPI: "WSM.InferenceEngine.InputPoint",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.AddLineInferencesForObject = function(groupInstancePath) {
            const args = {
                TestAPI: "WSM.InferenceEngine.AddLineInferencesForObject",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.SetHoveredInferencesEnabled = function(enabled) {
            const args = {
                TestAPI: "WSM.InferenceEngine.SetHoveredInferencesEnabled",
enabled: enabled
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.ClearCustomPointInferences = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomPointInferences"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.ClearCustomLineInferences = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomLineInferences"
            };
            return callAsyncAPI(args);
        };

        WSM.InferenceEngine.ClearCustomPlaneInference = function() {
            const args = {
                TestAPI: "WSM.InferenceEngine.ClearCustomPlaneInference"
            };
            return callAsyncAPI(args);
        };
WSM.Geom = {};

        WSM.Geom.Interval3d = function(minPoint3d,maxPoint3d) {
            const args = {
                TestAPI: "WSM.Geom.Interval3d",
minPoint3d: minPoint3d,
        maxPoint3d: maxPoint3d
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Interval3dAreEqual = function(interval3d1,interval3d2) {
            const args = {
                TestAPI: "WSM.Geom.Interval3dAreEqual",
interval3d1: interval3d1,
        interval3d2: interval3d2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.MakeRotationTransform = function(axis,angle) {
            const args = {
                TestAPI: "WSM.Geom.MakeRotationTransform",
axis: axis,
        angle: angle
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.MakeScalingTransform = function(scaleCenter,factorVec) {
            const args = {
                TestAPI: "WSM.Geom.MakeScalingTransform",
scaleCenter: scaleCenter,
        factorVec: factorVec
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.MakeRigidTransform = function(origin,xDir,yDir,zDir) {
            const args = {
                TestAPI: "WSM.Geom.MakeRigidTransform",
origin: origin,
        xDir: xDir,
        yDir: yDir,
        zDir: zDir
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.TranslateTransform = function(trans,moveVec) {
            const args = {
                TestAPI: "WSM.Geom.TranslateTransform",
trans: trans,
        moveVec: moveVec
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Transf3d = function() {
            const args = {
                TestAPI: "WSM.Geom.Transf3d"
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.InvertTransform = function(trans) {
            const args = {
                TestAPI: "WSM.Geom.InvertTransform",
trans: trans
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsIdentityTransform = function(trans) {
            const args = {
                TestAPI: "WSM.Geom.IsIdentityTransform",
trans: trans
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Transf3dAreEqual = function(trans1,trans2) {
            const args = {
                TestAPI: "WSM.Geom.Transf3dAreEqual",
trans1: trans1,
        trans2: trans2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Point2d = function(x,y) {
            const args = {
                TestAPI: "WSM.Geom.Point2d",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Point2dAreEqual = function(pt1,pt2) {
            const args = {
                TestAPI: "WSM.Geom.Point2dAreEqual",
pt1: pt1,
        pt2: pt2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Point3d = function(x,y,z) {
            const args = {
                TestAPI: "WSM.Geom.Point3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Point3dAreEqual = function(pt1,pt2) {
            const args = {
                TestAPI: "WSM.Geom.Point3dAreEqual",
pt1: pt1,
        pt2: pt2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Line3d = function(point3d) {
            const args = {
                TestAPI: "WSM.Geom.Line3d",
point3d: point3d
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Line3dAreEqual = function(line1,line2) {
            const args = {
                TestAPI: "WSM.Geom.Line3dAreEqual",
line1: line1,
        line2: line2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Vector3d = function(x,y,z) {
            const args = {
                TestAPI: "WSM.Geom.Vector3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Vector3dAreEqual = function(v1,v2) {
            const args = {
                TestAPI: "WSM.Geom.Vector3dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.UnitVector3d = function(x,y,z) {
            const args = {
                TestAPI: "WSM.Geom.UnitVector3d",
x: x,
        y: y,
        z: z
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.UnitVector3dAreEqual = function(v1,v2) {
            const args = {
                TestAPI: "WSM.Geom.UnitVector3dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Plane = function(pt,normal) {
            const args = {
                TestAPI: "WSM.Geom.Plane",
pt: pt,
        normal: normal
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.PlaneAreEqual = function(plane1,plane2) {
            const args = {
                TestAPI: "WSM.Geom.PlaneAreEqual",
plane1: plane1,
        plane2: plane2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Vector2d = function(x,y) {
            const args = {
                TestAPI: "WSM.Geom.Vector2d",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.Vector2dAreEqual = function(v1,v2) {
            const args = {
                TestAPI: "WSM.Geom.Vector2dAreEqual",
v1: v1,
        v2: v2
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsPoint3d = function() {
            const args = {
                TestAPI: "WSM.Geom.IsPoint3d"
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsVector3d = function() {
            const args = {
                TestAPI: "WSM.Geom.IsVector3d"
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsTransf3d = function() {
            const args = {
                TestAPI: "WSM.Geom.IsTransf3d"
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsLine3d = function() {
            const args = {
                TestAPI: "WSM.Geom.IsLine3d"
            };
            return callAsyncAPI(args);
        };

        WSM.Geom.IsPlane = function() {
            const args = {
                TestAPI: "WSM.Geom.IsPlane"
            };
            return callAsyncAPI(args);
        };
WSM.Utils = {};

        WSM.Utils.AngleFullCircleInRadians = function(normal,vecA,vecB,returnPositive) {
            const args = {
                TestAPI: "WSM.Utils.AngleFullCircleInRadians",
normal: normal,
        vecA: vecA,
        vecB: vecB,
        returnPositive: returnPositive
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.AppendSelectionToGroupInstancePathArray = function(aInput,aOutput) {
            const args = {
                TestAPI: "WSM.Utils.AppendSelectionToGroupInstancePathArray",
aInput: aInput,
        aOutput: aOutput
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.AppendToGroupInstancePathArray = function(nHistoryID,aInput,aOutput) {
            const args = {
                TestAPI: "WSM.Utils.AppendToGroupInstancePathArray",
nHistoryID: nHistoryID,
        aInput: aInput,
        aOutput: aOutput
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ComputeFaceCentroid = function(historyID,faceID) {
            const args = {
                TestAPI: "WSM.Utils.ComputeFaceCentroid",
historyID: historyID,
        faceID: faceID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ComputeFaceNormal = function(historyID,faceID) {
            const args = {
                TestAPI: "WSM.Utils.ComputeFaceNormal",
historyID: historyID,
        faceID: faceID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ConvertToFaces = function(aPaths) {
            const args = {
                TestAPI: "WSM.Utils.ConvertToFaces",
aPaths: aPaths
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ConvertToTopLevel = function(nHistoryID,aObjectIDs,bAllowInstances,bAllowOwnedFaces) {
            const args = {
                TestAPI: "WSM.Utils.ConvertToTopLevel",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ConvertToTopLevelPaths = function(aPaths,bAllowInstances,bAllowOwnedFaces) {
            const args = {
                TestAPI: "WSM.Utils.ConvertToTopLevelPaths",
aPaths: aPaths,
        bAllowInstances: bAllowInstances,
        bAllowOwnedFaces: bAllowOwnedFaces
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.DeleteObjectsIncludeSmoothAttachments = function(nHistoryID,toDelete) {
            const args = {
                TestAPI: "WSM.Utils.DeleteObjectsIncludeSmoothAttachments",
nHistoryID: nHistoryID,
        toDelete: toDelete
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ExpandSelection = function(path,selectionlevel,filter,bCanExpandInstances) {
            const args = {
                TestAPI: "WSM.Utils.ExpandSelection",
path: path,
        selectionlevel: selectionlevel,
        filter: filter,
        bCanExpandInstances: bCanExpandInstances
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetAllNonOwnedGeometricObjects = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.Utils.GetAllNonOwnedGeometricObjects",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetAxisAlignedBoundingBox = function(aObjectIDs,CS) {
            const args = {
                TestAPI: "WSM.Utils.GetAxisAlignedBoundingBox",
aObjectIDs: aObjectIDs,
        CS: CS
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetCoedgePoints = function(nHistoryID,coedgeID) {
            const args = {
                TestAPI: "WSM.Utils.GetCoedgePoints",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetEdgeCurveType = function(nHistoryID,edgeId) {
            const args = {
                TestAPI: "WSM.Utils.GetEdgeCurveType",
nHistoryID: nHistoryID,
        edgeId: edgeId
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetEdgeIDFromCoedge = function(nHistoryID,coedgeID) {
            const args = {
                TestAPI: "WSM.Utils.GetEdgeIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetEdgeLine = function(nHistoryID,edge) {
            const args = {
                TestAPI: "WSM.Utils.GetEdgeLine",
nHistoryID: nHistoryID,
        edge: edge
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetFaceIDFromCoedge = function(nHistoryID,coedgeID) {
            const args = {
                TestAPI: "WSM.Utils.GetFaceIDFromCoedge",
nHistoryID: nHistoryID,
        coedgeID: coedgeID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetFacePoints = function(facePath) {
            const args = {
                TestAPI: "WSM.Utils.GetFacePoints",
facePath: facePath
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects = function(instance) {
            const args = {
                TestAPI: "WSM.Utils.GetGroupInstanceNonOwnedGeometricObjects",
instance: instance
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetMemoryInfo = function(nHistoryID) {
            const args = {
                TestAPI: "WSM.Utils.GetMemoryInfo",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetVertexCurveAttributes = function(historyID,vertexID) {
            const args = {
                TestAPI: "WSM.Utils.GetVertexCurveAttributes",
historyID: historyID,
        vertexID: vertexID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.HasSmoothEdge = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.HasSmoothEdge",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsBackFace = function(path,cameraPos,cameraDir,perspectiveView) {
            const args = {
                TestAPI: "WSM.Utils.IsBackFace",
path: path,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsLayerHidden = function(nHistoryID,id) {
            const args = {
                TestAPI: "WSM.Utils.IsLayerHidden",
nHistoryID: nHistoryID,
        id: id
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsObjectHidden = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.IsObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsObjectHiddenByPath = function(path) {
            const args = {
                TestAPI: "WSM.Utils.IsObjectHiddenByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsLayerNotPickable = function(nHistoryID,id) {
            const args = {
                TestAPI: "WSM.Utils.IsLayerNotPickable",
nHistoryID: nHistoryID,
        id: id
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsObjectNotPickable = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.IsObjectNotPickable",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsObjectNotPickableByPath = function(path) {
            const args = {
                TestAPI: "WSM.Utils.IsObjectNotPickableByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsObjectType = function(path,nObjectTypes) {
            const args = {
                TestAPI: "WSM.Utils.IsObjectType",
path: path,
        nObjectTypes: nObjectTypes
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsOnCurveJunction = function(nHistoryID,nVertexID,bInferencing) {
            const args = {
                TestAPI: "WSM.Utils.IsOnCurveJunction",
nHistoryID: nHistoryID,
        nVertexID: nVertexID,
        bInferencing: bInferencing
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsSelectAllConnected = function(nHistoryID,selectedObjectIDs) {
            const args = {
                TestAPI: "WSM.Utils.IsSelectAllConnected",
nHistoryID: nHistoryID,
        selectedObjectIDs: selectedObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsSilhouetteEdge = function(nHistoryID,edgeId,cameraPos,cameraDir,perspectiveView) {
            const args = {
                TestAPI: "WSM.Utils.IsSilhouetteEdge",
nHistoryID: nHistoryID,
        edgeId: edgeId,
        cameraPos: cameraPos,
        cameraDir: cameraDir,
        perspectiveView: perspectiveView
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsSmooth = function(path) {
            const args = {
                TestAPI: "WSM.Utils.IsSmooth",
path: path
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsTopLevelObjectHidden = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.IsTopLevelObjectHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsTopLevelObjectHiddenByPath = function(path) {
            const args = {
                TestAPI: "WSM.Utils.IsTopLevelObjectHiddenByPath",
path: path
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsVertexEditable = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.IsVertexEditable",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.IsVertexOnCurve = function(historyID,vertexID) {
            const args = {
                TestAPI: "WSM.Utils.IsVertexOnCurve",
historyID: historyID,
        vertexID: vertexID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.MakePickRayFromWindow = function(firstWindowSelectPoint,secondWindowSelectPoint) {
            const args = {
                TestAPI: "WSM.Utils.MakePickRayFromWindow",
firstWindowSelectPoint: firstWindowSelectPoint,
        secondWindowSelectPoint: secondWindowSelectPoint
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.MatchesSelectionType = function(selectedObjectIDs,aNewSelectedObjects,bSelectAll) {
            const args = {
                TestAPI: "WSM.Utils.MatchesSelectionType",
selectedObjectIDs: selectedObjectIDs,
        aNewSelectedObjects: aNewSelectedObjects,
        bSelectAll: bSelectAll
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectCanBeHidden = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.ObjectCanBeHidden",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickBody = function(pickray) {
            const args = {
                TestAPI: "WSM.Utils.PickBody",
pickray: pickray
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickGeometry = function(pickray,pickFilter,bAllowAdjustRayRadius) {
            const args = {
                TestAPI: "WSM.Utils.PickGeometry",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickObjectsWithFilter = function(pickray,filter,currentSelectionLevel) {
            const args = {
                TestAPI: "WSM.Utils.PickObjectsWithFilter",
pickray: pickray,
        filter: filter,
        currentSelectionLevel: currentSelectionLevel
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickObjectsWithRay = function(pickray,pickFilter,bAllowAdjustRayRadius,bIgnoreInContext) {
            const args = {
                TestAPI: "WSM.Utils.PickObjectsWithRay",
pickray: pickray,
        pickFilter: pickFilter,
        bAllowAdjustRayRadius: bAllowAdjustRayRadius,
        bIgnoreInContext: bIgnoreInContext
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.RayFireWithObjects = function(objectIds,ray) {
            const args = {
                TestAPI: "WSM.Utils.RayFireWithObjects",
objectIds: objectIds,
        ray: ray
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.RemoveHiddenObjects = function(nHistoryID,aObjectIDs,aObjectsInGroupsVec) {
            const args = {
                TestAPI: "WSM.Utils.RemoveHiddenObjects",
nHistoryID: nHistoryID,
        aObjectIDs: aObjectIDs,
        aObjectsInGroupsVec: aObjectsInGroupsVec
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.SelectionFromGroupInstancePathArray = function(aInput) {
            const args = {
                TestAPI: "WSM.Utils.SelectionFromGroupInstancePathArray",
aInput: aInput
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.SelectionToGroupInstancePath = function(nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.SelectionToGroupInstancePath",
nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.SelectionToGroupInstancePathArray = function(aInput) {
            const args = {
                TestAPI: "WSM.Utils.SelectionToGroupInstancePathArray",
aInput: aInput
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.SetToOwnerBody = function(path) {
            const args = {
                TestAPI: "WSM.Utils.SetToOwnerBody",
path: path
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.TestPickImages = function(nHistoryID,imageIds,pickRay) {
            const args = {
                TestAPI: "WSM.Utils.TestPickImages",
nHistoryID: nHistoryID,
        imageIds: imageIds,
        pickRay: pickRay
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectIDsAreEqual = function(id1,id2) {
            const args = {
                TestAPI: "WSM.Utils.ObjectIDsAreEqual",
id1: id1,
        id2: id2
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GroupInstancePathsAreEqual = function(path1,path2) {
            const args = {
                TestAPI: "WSM.Utils.GroupInstancePathsAreEqual",
path1: path1,
        path2: path2
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickRay = function(pickrayLine,planes,screenPickRayRadius,perspectiveScaleFactor,baseRadius,normalizedScreenPoint) {
            const args = {
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

        WSM.Utils.PickRayFromLine = function(pickrayLine) {
            const args = {
                TestAPI: "WSM.Utils.PickRayFromLine",
pickrayLine: pickrayLine
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.PickRayFromNormalizedScreenPoint = function(ptX,ptY,yUp) {
            const args = {
                TestAPI: "WSM.Utils.PickRayFromNormalizedScreenPoint",
ptX: ptX,
        ptY: ptY,
        yUp: yUp
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GroupInstancePathArray = function() {
            const args = {
                TestAPI: "WSM.Utils.GroupInstancePathArray"
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetGroupInstancePathFinalObjectHistoryID = function(ObjectIDs) {
            const args = {
                TestAPI: "WSM.Utils.GetGroupInstancePathFinalObjectHistoryID",
ObjectIDs: ObjectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectHistoryIDArray = function() {
            const args = {
                TestAPI: "WSM.Utils.ObjectHistoryIDArray"
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectIDArray = function(objectIDs) {
            const args = {
                TestAPI: "WSM.Utils.ObjectIDArray",
objectIDs: objectIDs
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.SetOrCreateStringAttributeForObject = function(nHistoryID,nObjectID,key,value,nCB,bIsSharedOnSplit) {
            const args = {
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

        WSM.Utils.GetStringAttributeForObject = function(nHistoryID,nObjectID,key) {
            const args = {
                TestAPI: "WSM.Utils.GetStringAttributeForObject",
nHistoryID: nHistoryID,
        nObjectID: nObjectID,
        key: key
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectTypeFilter = function() {
            const args = {
                TestAPI: "WSM.Utils.ObjectTypeFilter"
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.ObjectHistoryID = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "WSM.Utils.ObjectHistoryID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };
WSM.AppHelper = {};

        WSM.AppHelper.Initialize = function() {
            const args = {
                TestAPI: "WSM.AppHelper.Initialize"
            };
            return callAsyncAPI(args);
        };

        WSM.AppHelper.GetHistoryID = function() {
            const args = {
                TestAPI: "WSM.AppHelper.GetHistoryID"
            };
            return callAsyncAPI(args);
        };

        WSM.AppHelper.GetDisplayHistoryID = function() {
            const args = {
                TestAPI: "WSM.AppHelper.GetDisplayHistoryID"
            };
            return callAsyncAPI(args);
        };

        WSM.AppHelper.NewModel = function() {
            const args = {
                TestAPI: "WSM.AppHelper.NewModel"
            };
            return callAsyncAPI(args);
        };
WSM.Atf = {};

        WSM.Atf.APITestAtfLoopBack = function(nFromHistoryID,nToHistoryID,defaultColorVec,aNonOwnedObjectIDs,aExcludedObjects,bWantPolygonMeshFromBrep,aLayerDisplayedNegateVec) {
            const args = {
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

        WSM.Atf.APILoadWithATF = function(nHistoryID,sFilePath,eFileType,nOptions,nUnits) {
            const args = {
                TestAPI: "WSM.Atf.APILoadWithATF",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        nOptions: nOptions,
        nUnits: nUnits
            };
            return callAsyncAPI(args);
        };

        WSM.Atf.APIWriteWithATF = function(nHistoryID,sFilePath,eFileType,aNonOwnedObjectIDs,aExcludedObjects,defaultColorVec,cameraVec,aLayerDisplayedNegateVec) {
            const args = {
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
WSM.RenderHelper = {};

        WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly = function(historyID,objectID) {
            const args = {
                TestAPI: "WSM.RenderHelper.APIGetObjectFacesRenderDataReadOnly",
historyID: historyID,
        objectID: objectID
            };
            return callAsyncAPI(args);
        };

        WSM.RenderHelper.APIGetFacesRenderDataReadOnly = function(historyID,faceIDs) {
            const args = {
                TestAPI: "WSM.RenderHelper.APIGetFacesRenderDataReadOnly",
historyID: historyID,
        faceIDs: faceIDs
            };
            return callAsyncAPI(args);
        };

        WSM.RenderHelper.APIGetEdgesRenderDataReadOnly = function(historyID,edgeIDs,includeSmooth) {
            const args = {
                TestAPI: "WSM.RenderHelper.APIGetEdgesRenderDataReadOnly",
historyID: historyID,
        edgeIDs: edgeIDs,
        includeSmooth: includeSmooth
            };
            return callAsyncAPI(args);
        };
WSM.Sat = {};

        WSM.Sat.APILoadSatFile = function(nHistoryID,sFilePath) {
            const args = {
                TestAPI: "WSM.Sat.APILoadSatFile",
nHistoryID: nHistoryID,
        sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };
WSM.GroupInstancePath = {};

        WSM.GroupInstancePath.IsValid = function(groupInstancePath) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.IsValid",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePath.GetFinalObjectHistoryID = function(groupInstancePath) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.GetFinalObjectHistoryID",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePath.GetTopObjectHistoryID = function(groupInstancePath) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.GetTopObjectHistoryID",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePath.AppendObjectHistoryID = function(groupInstancePath,nObjectID) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.AppendObjectHistoryID",
groupInstancePath: groupInstancePath,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePath.GetObjectTransform = function(groupInstancePath) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.GetObjectTransform",
groupInstancePath: groupInstancePath
            };
            return callAsyncAPI(args);
        };

        WSM.GroupInstancePath.IsPrefixOf = function(path1,path2) {
            const args = {
                TestAPI: "WSM.GroupInstancePath.IsPrefixOf",
path1: path1,
        path2: path2
            };
            return callAsyncAPI(args);
        };
WSM.Test = {};

        WSM.Test.AnyDictionaryRoundTrip = function(dict) {
            const args = {
                TestAPI: "WSM.Test.AnyDictionaryRoundTrip",
dict: dict
            };
            return callAsyncAPI(args);
        };
WSM.Skup = {};

        WSM.Skup.APIReadSketchupFile = function(nHistoryID,filename) {
            const args = {
                TestAPI: "WSM.Skup.APIReadSketchupFile",
nHistoryID: nHistoryID,
        filename: filename
            };
            return callAsyncAPI(args);
        };
WSM.Tools = {};

        WSM.Tools.CompareOutputFiles = function(sGoodFile,sResultFile) {
            const args = {
                TestAPI: "WSM.Tools.CompareOutputFiles",
sGoodFile: sGoodFile,
        sResultFile: sResultFile
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIReset = function() {
            const args = {
                TestAPI: "WSM.Tools.APIReset"
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APICreateTool = function(nType,toolArgs) {
            const args = {
                TestAPI: "WSM.Tools.APICreateTool",
nType: nType,
        toolArgs: toolArgs
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIDestroyTool = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIDestroyTool",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetAllLiveToolsReadOnly = function() {
            const args = {
                TestAPI: "WSM.Tools.APIGetAllLiveToolsReadOnly"
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetToolTypeReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIGetToolTypeReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetResultDescriptionReadOnly = function(nResult) {
            const args = {
                TestAPI: "WSM.Tools.APIGetResultDescriptionReadOnly",
nResult: nResult
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetToolStateReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIGetToolStateReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIResetTool = function(nToolID,nReason) {
            const args = {
                TestAPI: "WSM.Tools.APIResetTool",
nToolID: nToolID,
        nReason: nReason
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIResetToolModelChange = function(nToolID,data) {
            const args = {
                TestAPI: "WSM.Tools.APIResetToolModelChange",
nToolID: nToolID,
        data: data
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIUpdateCurrentPoint = function(nToolID,pickray) {
            const args = {
                TestAPI: "WSM.Tools.APIUpdateCurrentPoint",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIUpdatePointPick = function(nToolID,nPointIndex,pickray,bFinal) {
            const args = {
                TestAPI: "WSM.Tools.APIUpdatePointPick",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pickray: pickray,
        bFinal: bFinal
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIUpdatePoint = function(nToolID,nPointIndex,pInputPoint,bFinal) {
            const args = {
                TestAPI: "WSM.Tools.APIUpdatePoint",
nToolID: nToolID,
        nPointIndex: nPointIndex,
        pInputPoint: pInputPoint,
        bFinal: bFinal
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APILockInference = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APILockInference",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIUnlockInference = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIUnlockInference",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIPickAndPlacePoint = function(nToolID,pickray) {
            const args = {
                TestAPI: "WSM.Tools.APIPickAndPlacePoint",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIPlacePoint = function(nToolID,pInputPoint) {
            const args = {
                TestAPI: "WSM.Tools.APIPlacePoint",
nToolID: nToolID,
        pInputPoint: pInputPoint
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIFinalize = function(nToolID,pickray) {
            const args = {
                TestAPI: "WSM.Tools.APIFinalize",
nToolID: nToolID,
        pickray: pickray
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetCurrentPointReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIGetCurrentPointReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIGetPointReadOnly = function(nToolID,nPointIndex) {
            const args = {
                TestAPI: "WSM.Tools.APIGetPointReadOnly",
nToolID: nToolID,
        nPointIndex: nPointIndex
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APISetOperationMode = function(nToolID,nMode) {
            const args = {
                TestAPI: "WSM.Tools.APISetOperationMode",
nToolID: nToolID,
        nMode: nMode
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIResetCurrentPoint = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIResetCurrentPoint",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APISetDefaultPoints = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APISetDefaultPoints",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APISetEditingMode = function(nToolID,bEditingMode) {
            const args = {
                TestAPI: "WSM.Tools.APISetEditingMode",
nToolID: nToolID,
        bEditingMode: bEditingMode
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APICreateGeometry = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APICreateGeometry",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModResetModel = function(nToolID,bDeleteRedo) {
            const args = {
                TestAPI: "WSM.Tools.APIModResetModel",
nToolID: nToolID,
        bDeleteRedo: bDeleteRedo
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModSetObjectsToModify = function(nToolID,aObjectsToModify) {
            const args = {
                TestAPI: "WSM.Tools.APIModSetObjectsToModify",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModSetObjectsToModifyGroupInstancePath = function(nToolID,aObjectsToModify) {
            const args = {
                TestAPI: "WSM.Tools.APIModSetObjectsToModifyGroupInstancePath",
nToolID: nToolID,
        aObjectsToModify: aObjectsToModify
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModIsInteractiveReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIModIsInteractiveReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModFiltersInitialSelectionReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIModFiltersInitialSelectionReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModDoModification = function(nToolID,bEndOfContinuous) {
            const args = {
                TestAPI: "WSM.Tools.APIModDoModification",
nToolID: nToolID,
        bEndOfContinuous: bEndOfContinuous
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APIModGetFinishMessageReadOnly = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APIModGetFinishMessageReadOnly",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };

        WSM.Tools.APICameraChanged = function(nToolID) {
            const args = {
                TestAPI: "WSM.Tools.APICameraChanged",
nToolID: nToolID
            };
            return callAsyncAPI(args);
        };
const FormIt = {};

        FormIt.GetSnap = function() {
            const args = {
                TestAPI: "FormIt.GetSnap"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetSnap = function(bSnap) {
            const args = {
                TestAPI: "FormIt.SetSnap",
bSnap: bSnap
            };
            return callAsyncAPI(args);
        };

        FormIt.GetTouchEnabled = function() {
            const args = {
                TestAPI: "FormIt.GetTouchEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetTouchEnabled = function(bTouchEnabled) {
            const args = {
                TestAPI: "FormIt.SetTouchEnabled",
bTouchEnabled: bTouchEnabled
            };
            return callAsyncAPI(args);
        };

        FormIt.ImportFile = function(sFileName,bGroupImport,nHistoryID) {
            const args = {
                TestAPI: "FormIt.ImportFile",
sFileName: sFileName,
    bGroupImport: bGroupImport,
    nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.OpenFile = function(sFileName) {
            const args = {
                TestAPI: "FormIt.OpenFile",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.LoadPreviewImage = function(sFileName) {
            const args = {
                TestAPI: "FormIt.LoadPreviewImage",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.OpenFile = function(sFileName) {
            const args = {
                TestAPI: "FormIt.OpenFile",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.SaveFile = function(sFileName,saveOptions,previewImage,forSave) {
            const args = {
                TestAPI: "FormIt.SaveFile",
sFileName: sFileName,
    saveOptions: saveOptions,
    previewImage: previewImage,
    forSave: forSave
            };
            return callAsyncAPI(args);
        };

        FormIt.SaveFileForEnergyAnalysis = function(sFileName) {
            const args = {
                TestAPI: "FormIt.SaveFileForEnergyAnalysis",
sFileName: sFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.SetGeoLocationData = function(geodata) {
            const args = {
                TestAPI: "FormIt.SetGeoLocationData",
geodata: geodata
            };
            return callAsyncAPI(args);
        };

        FormIt.SetRenderData = function(renderdata) {
            const args = {
                TestAPI: "FormIt.SetRenderData",
renderdata: renderdata
            };
            return callAsyncAPI(args);
        };

        FormIt.GetTimeNow = function() {
            const args = {
                TestAPI: "FormIt.GetTimeNow"
            };
            return callAsyncAPI(args);
        };

        FormIt.FitToModel = function(aIncludeImage,withTransition) {
            const args = {
                TestAPI: "FormIt.FitToModel",
aIncludeImage: aIncludeImage,
    withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        FormIt.FitToSelection = function(withTransition) {
            const args = {
                TestAPI: "FormIt.FitToSelection",
withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        FormIt.HomeView3d = function(withTransition) {
            const args = {
                TestAPI: "FormIt.HomeView3d",
withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        FormIt.TopView = function() {
            const args = {
                TestAPI: "FormIt.TopView"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetViewDirection = function(type) {
            const args = {
                TestAPI: "FormIt.SetViewDirection",
type: type
            };
            return callAsyncAPI(args);
        };

        FormIt.GetViewDirection = function() {
            const args = {
                TestAPI: "FormIt.GetViewDirection"
            };
            return callAsyncAPI(args);
        };

        FormIt.NewFile = function(forced) {
            const args = {
                TestAPI: "FormIt.NewFile",
forced: forced
            };
            return callAsyncAPI(args);
        };

        FormIt.Version = function() {
            const args = {
                TestAPI: "FormIt.Version"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetCurveAccuracyOrCountDefault = function(accuracyORcount) {
            const args = {
                TestAPI: "FormIt.SetCurveAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        FormIt.GetCurveAccuracyOrCountDefault = function() {
            const args = {
                TestAPI: "FormIt.GetCurveAccuracyOrCountDefault"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetSurfaceAccuracyOrCountDefault = function(accuracyORcount) {
            const args = {
                TestAPI: "FormIt.SetSurfaceAccuracyOrCountDefault",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        FormIt.GetSurfaceAccuracyOrCountDefault = function() {
            const args = {
                TestAPI: "FormIt.GetSurfaceAccuracyOrCountDefault"
            };
            return callAsyncAPI(args);
        };

        FormIt.GetUnitTypeDefault = function() {
            const args = {
                TestAPI: "FormIt.GetUnitTypeDefault"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetUnitTypeDefault = function(unitType) {
            const args = {
                TestAPI: "FormIt.SetUnitTypeDefault",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        FormIt.IsWSRAvailable = function() {
            const args = {
                TestAPI: "FormIt.IsWSRAvailable"
            };
            return callAsyncAPI(args);
        };

        FormIt.SuspendMessaging = function(bSuppress,nTopLevelHistory) {
            const args = {
                TestAPI: "FormIt.SuspendMessaging",
bSuppress: bSuppress,
    nTopLevelHistory: nTopLevelHistory
            };
            return callAsyncAPI(args);
        };

        FormIt.ResumeMessaging = function() {
            const args = {
                TestAPI: "FormIt.ResumeMessaging"
            };
            return callAsyncAPI(args);
        };

        FormIt.ChangeTargetBuildableArea = function(value) {
            const args = {
                TestAPI: "FormIt.ChangeTargetBuildableArea",
value: value
            };
            return callAsyncAPI(args);
        };

        FormIt.GetBuildingType = function() {
            const args = {
                TestAPI: "FormIt.GetBuildingType"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetBuildingType = function(value) {
            const args = {
                TestAPI: "FormIt.SetBuildingType",
value: value
            };
            return callAsyncAPI(args);
        };

        FormIt.WriteAppDefaultContentToFile = function(id,path) {
            const args = {
                TestAPI: "FormIt.WriteAppDefaultContentToFile",
id: id,
    path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.DeleteImage = function(nHistoryID,imageID) {
            const args = {
                TestAPI: "FormIt.DeleteImage",
nHistoryID: nHistoryID,
    imageID: imageID
            };
            return callAsyncAPI(args);
        };

        FormIt.HandleHUDTextInput = function(dimensionID,inputText) {
            const args = {
                TestAPI: "FormIt.HandleHUDTextInput",
dimensionID: dimensionID,
    inputText: inputText
            };
            return callAsyncAPI(args);
        };

        FormIt.GetAppDefaultContentsWithoutAXM = function() {
            const args = {
                TestAPI: "FormIt.GetAppDefaultContentsWithoutAXM"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetKeyboardShortcutsEnabled = function(enabled) {
            const args = {
                TestAPI: "FormIt.SetKeyboardShortcutsEnabled",
enabled: enabled
            };
            return callAsyncAPI(args);
        };

        FormIt.GetShowEditableDimensions = function() {
            const args = {
                TestAPI: "FormIt.GetShowEditableDimensions"
            };
            return callAsyncAPI(args);
        };

        FormIt.SetShowEditableDimensions = function(show) {
            const args = {
                TestAPI: "FormIt.SetShowEditableDimensions",
show: show
            };
            return callAsyncAPI(args);
        };

        FormIt.GetVersion = function() {
            const args = {
                TestAPI: "FormIt.GetVersion"
            };
            return callAsyncAPI(args);
        };

        FormIt.ImportToGroup = function(sFileType,sFilePath) {
            const args = {
                TestAPI: "FormIt.ImportToGroup",
sFileType: sFileType,
    sFilePath: sFilePath
            };
            return callAsyncAPI(args);
        };

        FormIt.CallJS = function(funcName,paramsJSON) {
            const args = {
                TestAPI: "FormIt.CallJS",
funcName: funcName,
    paramsJSON: paramsJSON
            };
            return callAsyncAPI(args);
        };

        FormIt.GetContextMenuOptions = function() {
            const args = {
                TestAPI: "FormIt.GetContextMenuOptions"
            };
            return callAsyncAPI(args);
        };
FormIt.Analysis = {};
FormIt.Analysis.Solar = {};

        FormIt.Analysis.Solar.EnterAnalysisMode = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.EnterAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.ToggleAnalysisMode = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.ToggleAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.ExitAnalysisMode = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.ExitAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.ToggleFaceSelections = function(aFacePaths) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.ToggleFaceSelections",
aFacePaths: aFacePaths
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.ResetAnalysis = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.ResetAnalysis"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.SetMethod = function(bMonthlyPeak) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.SetMethod",
bMonthlyPeak: bMonthlyPeak
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.SetPeakMonth = function(month) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.SetPeakMonth",
month: month
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetPeakMonth = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetPeakMonth"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetMethod = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetMethod"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetLimits = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetLimits"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetUnitString = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetUnitString"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.IsInSolarAnalysisMode = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.IsInSolarAnalysisMode"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.IsNewAnalysisEnabled = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.IsNewAnalysisEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.IsAnalysisInProgress = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.IsAnalysisInProgress"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.CanAnalyze = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.CanAnalyze"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetWeatherDataStatus = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetWeatherDataStatus"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.SetWeatherDataStatus = function(status) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.SetWeatherDataStatus",
status: status
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetNumTooltipsToShow = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetNumTooltipsToShow"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.SetNumTooltipsToShow = function(numToolTips) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.SetNumTooltipsToShow",
numToolTips: numToolTips
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.Analyze = function(bNeedInterrupt,dInterruptTime,nPreviousStep) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.Analyze",
bNeedInterrupt: bNeedInterrupt,
            dInterruptTime: dInterruptTime,
            nPreviousStep: nPreviousStep
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.CancelAnalysis = function() {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.CancelAnalysis"
            };
            return callAsyncAPI(args);
        };

        FormIt.Analysis.Solar.GetValueFromFaceAtPoint = function(face,pt) {
            const args = {
                TestAPI: "FormIt.Analysis.Solar.GetValueFromFaceAtPoint",
face: face,
            pt: pt
            };
            return callAsyncAPI(args);
        };
FormIt.AutoSave = {};

        FormIt.AutoSave.Enable = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.Enable"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.Disable = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.Disable"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.IsEnabled = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.IsEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.SetConfig = function(config) {
            const args = {
                TestAPI: "FormIt.AutoSave.SetConfig",
config: config
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.SetConfigFromPath = function(path) {
            const args = {
                TestAPI: "FormIt.AutoSave.SetConfigFromPath",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.GetConfig = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.GetConfig"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.GetDefaultConfig = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.GetDefaultConfig"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.StartSignalThread = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.StartSignalThread"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.StopSignalThread = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.StopSignalThread"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.Save = function(force) {
            const args = {
                TestAPI: "FormIt.AutoSave.Save",
force: force
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.GetExistingBackupFile = function(path) {
            const args = {
                TestAPI: "FormIt.AutoSave.GetExistingBackupFile",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.Cleanup = function(force) {
            const args = {
                TestAPI: "FormIt.AutoSave.Cleanup",
force: force
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.AddProtectedFile = function(path) {
            const args = {
                TestAPI: "FormIt.AutoSave.AddProtectedFile",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.ClearProtectedFiles = function() {
            const args = {
                TestAPI: "FormIt.AutoSave.ClearProtectedFiles"
            };
            return callAsyncAPI(args);
        };

        FormIt.AutoSave.IsFileProtected = function(path) {
            const args = {
                TestAPI: "FormIt.AutoSave.IsFileProtected",
path: path
            };
            return callAsyncAPI(args);
        };
FormIt.Cameras = {};

        FormIt.Cameras.GetCameraData = function() {
            const args = {
                TestAPI: "FormIt.Cameras.GetCameraData"
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.GetCameraWorldForward = function() {
            const args = {
                TestAPI: "FormIt.Cameras.GetCameraWorldForward"
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.GetCameraWorldUp = function() {
            const args = {
                TestAPI: "FormIt.Cameras.GetCameraWorldUp"
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.SetCameraData = function(cameraData) {
            const args = {
                TestAPI: "FormIt.Cameras.SetCameraData",
cameraData: cameraData
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.AlignWithFace = function(facePath,withTransition) {
            const args = {
                TestAPI: "FormIt.Cameras.AlignWithFace",
facePath: facePath,
        withTransition: withTransition
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.GetViewportSize = function() {
            const args = {
                TestAPI: "FormIt.Cameras.GetViewportSize"
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.SetViewportSize = function(x,y) {
            const args = {
                TestAPI: "FormIt.Cameras.SetViewportSize",
x: x,
        y: y
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.SetProjectionType = function(projectionType) {
            const args = {
                TestAPI: "FormIt.Cameras.SetProjectionType",
projectionType: projectionType
            };
            return callAsyncAPI(args);
        };

        FormIt.Cameras.GetProjectionType = function() {
            const args = {
                TestAPI: "FormIt.Cameras.GetProjectionType"
            };
            return callAsyncAPI(args);
        };
FormIt.Clipboard = {};

        FormIt.Clipboard.GetJSONStringForClipboard = function() {
            const args = {
                TestAPI: "FormIt.Clipboard.GetJSONStringForClipboard"
            };
            return callAsyncAPI(args);
        };

        FormIt.Clipboard.SetJSONStringFromClipboard = function(str) {
            const args = {
                TestAPI: "FormIt.Clipboard.SetJSONStringFromClipboard",
str: str
            };
            return callAsyncAPI(args);
        };
FormIt.Collaboration = {};

        FormIt.Collaboration.Connect = function(sSessionLink) {
            const args = {
                TestAPI: "FormIt.Collaboration.Connect",
sSessionLink: sSessionLink
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.IsConnected = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.IsConnected"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.Disconnect = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.Disconnect"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.GetSessionId = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.GetSessionId"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.IsSessionOwner = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.IsSessionOwner"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.IsFollowingCamera = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.IsFollowingCamera"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.FollowCamera = function(sUserId) {
            const args = {
                TestAPI: "FormIt.Collaboration.FollowCamera",
sUserId: sUserId
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.GetFollowingCameraUserID = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.GetFollowingCameraUserID"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.UnFollowCamera = function() {
            const args = {
                TestAPI: "FormIt.Collaboration.UnFollowCamera"
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.ReceiveCreateRefHistory = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Collaboration.ReceiveCreateRefHistory",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.ReceiveHistory = function(nHistoryID,sBase64History,bIsOwner) {
            const args = {
                TestAPI: "FormIt.Collaboration.ReceiveHistory",
nHistoryID: nHistoryID,
        sBase64History: sBase64History,
        bIsOwner: bIsOwner
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.ReceiveDelta = function(nHistoryID,nDeltaID,sBase64Delta) {
            const args = {
                TestAPI: "FormIt.Collaboration.ReceiveDelta",
nHistoryID: nHistoryID,
        nDeltaID: nDeltaID,
        sBase64Delta: sBase64Delta
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.ReceiveUndoRedo = function(nHistoryID,nUndoValue,nBaseDeltaID,sBase64Delta) {
            const args = {
                TestAPI: "FormIt.Collaboration.ReceiveUndoRedo",
nHistoryID: nHistoryID,
        nUndoValue: nUndoValue,
        nBaseDeltaID: nBaseDeltaID,
        sBase64Delta: sBase64Delta
            };
            return callAsyncAPI(args);
        };

        FormIt.Collaboration.ReceiveDataAcceptance = function(nHistoryID,nDataType,nDeltaID,bAccepted) {
            const args = {
                TestAPI: "FormIt.Collaboration.ReceiveDataAcceptance",
nHistoryID: nHistoryID,
        nDataType: nDataType,
        nDeltaID: nDeltaID,
        bAccepted: bAccepted
            };
            return callAsyncAPI(args);
        };
FormIt.Configuration = {};

        FormIt.Configuration.GetToolGroupUUIDs = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetToolGroupUUIDs"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetContextMenuToolUUIDs = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDs"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetContextMenuToolUUIDFromActionId = function(actionId) {
            const args = {
                TestAPI: "FormIt.Configuration.GetContextMenuToolUUIDFromActionId",
actionId: actionId
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetContextMenuActionIdFromToolUUID = function(toolUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.GetContextMenuActionIdFromToolUUID",
toolUUID: toolUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetToolGroupInfo = function(toolGroupUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.GetToolGroupInfo",
toolGroupUUID: toolGroupUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetToolInfo = function(toolUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.GetToolInfo",
toolUUID: toolUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.IsPaletteConfigured = function(paletteUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.IsPaletteConfigured",
paletteUUID: paletteUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.IsProjectBarConfigured = function(projectBarUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.IsProjectBarConfigured",
projectBarUUID: projectBarUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.ConfigureFromJSON = function(configurationJSON) {
            const args = {
                TestAPI: "FormIt.Configuration.ConfigureFromJSON",
configurationJSON: configurationJSON
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllPalettes = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllPalettes"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllProjectBarItems = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllProjectBarItems"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllToolGroups = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllToolGroups"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllToolGroupTools = function(toolGroupUUID) {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllToolGroupTools",
toolGroupUUID: toolGroupUUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllContextMenuTools = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllContextMenuTools"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.GetAllImplicitTools = function() {
            const args = {
                TestAPI: "FormIt.Configuration.GetAllImplicitTools"
            };
            return callAsyncAPI(args);
        };

        FormIt.Configuration.IsShortcutCommandConfigured = function(commandName) {
            const args = {
                TestAPI: "FormIt.Configuration.IsShortcutCommandConfigured",
commandName: commandName
            };
            return callAsyncAPI(args);
        };
FormIt.Dynamo = {};

        FormIt.Dynamo.HasFormItBakeToFormItNode = function(dynFileName) {
            const args = {
                TestAPI: "FormIt.Dynamo.HasFormItBakeToFormItNode",
dynFileName: dynFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.HasFormItSelectionNodes = function(dynFileName) {
            const args = {
                TestAPI: "FormIt.Dynamo.HasFormItSelectionNodes",
dynFileName: dynFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.IsDynamoHistory = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetDynamoHistoryInPath = function(path) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetDynamoHistoryInPath",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetDynamoHistoryInCurrentContext = function() {
            const args = {
                TestAPI: "FormIt.Dynamo.GetDynamoHistoryInCurrentContext"
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetUuid = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetUuid",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetSelectedDynamoHistory = function() {
            const args = {
                TestAPI: "FormIt.Dynamo.GetSelectedDynamoHistory"
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.IsDynamoHistory = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.IsDynamoHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetDynamoFile = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetDynamoFile",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.SetDynamoFile = function(historyId,script,GUID) {
            const args = {
                TestAPI: "FormIt.Dynamo.SetDynamoFile",
historyId: historyId,
        script: script,
        GUID: GUID
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetDynamoGroupName = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetDynamoGroupName",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.WriteDYNFile = function(historyId,path) {
            const args = {
                TestAPI: "FormIt.Dynamo.WriteDYNFile",
historyId: historyId,
        path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetInputNodes = function(historyId,bIsSetAsInput) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetInputNodes",
historyId: historyId,
        bIsSetAsInput: bIsSetAsInput
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.GetDynamoFileBakeNodes = function(DYNFileName) {
            const args = {
                TestAPI: "FormIt.Dynamo.GetDynamoFileBakeNodes",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.DYNRemoveBakeNodesSATFiles = function(DYNFileName) {
            const args = {
                TestAPI: "FormIt.Dynamo.DYNRemoveBakeNodesSATFiles",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.DYNAnyBakeNodeSATFilesExist = function(DYNFileName) {
            const args = {
                TestAPI: "FormIt.Dynamo.DYNAnyBakeNodeSATFilesExist",
DYNFileName: DYNFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.DYNGetSelectionNodes = function(DYNFileName,bIsInput) {
            const args = {
                TestAPI: "FormIt.Dynamo.DYNGetSelectionNodes",
DYNFileName: DYNFileName,
        bIsInput: bIsInput
            };
            return callAsyncAPI(args);
        };

        FormIt.Dynamo.UpdateRenderer = function(historyId) {
            const args = {
                TestAPI: "FormIt.Dynamo.UpdateRenderer",
historyId: historyId
            };
            return callAsyncAPI(args);
        };
FormIt.Files = {};

        FormIt.Files.GetSupportedFilesList = function(action,type,dialogType) {
            const args = {
                TestAPI: "FormIt.Files.GetSupportedFilesList",
action: action,
        type: type,
        dialogType: dialogType
            };
            return callAsyncAPI(args);
        };

        FormIt.Files.IsFileSupported = function(extension,action,type,dialogType) {
            const args = {
                TestAPI: "FormIt.Files.IsFileSupported",
extension: extension,
        action: action,
        type: type,
        dialogType: dialogType
            };
            return callAsyncAPI(args);
        };
FormIt.FileSystem = {};

        FormIt.FileSystem.FileExists = function(path) {
            const args = {
                TestAPI: "FormIt.FileSystem.FileExists",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.FileSystem.Remove = function(path) {
            const args = {
                TestAPI: "FormIt.FileSystem.Remove",
path: path
            };
            return callAsyncAPI(args);
        };
FormIt.Forge = {};
FormIt.Forge.UI = {};

        FormIt.Forge.UI.ErrorCodeToUIMessage = function(code) {
            const args = {
                TestAPI: "FormIt.Forge.UI.ErrorCodeToUIMessage",
code: code
            };
            return callAsyncAPI(args);
        };
FormIt.GroupEdit = {};

        FormIt.GroupEdit.GetEditingHistoryID = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.GetEditingHistoryID"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.GetInContextEditingPath = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.GetInContextEditingPath"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.SetInContextEditingPath = function(path) {
            const args = {
                TestAPI: "FormIt.GroupEdit.SetInContextEditingPath",
path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.IsEditingInContext = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.IsEditingInContext"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.EndEditInContext = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.EndEditInContext"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.ExitToParentContext = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.ExitToParentContext"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.GetShowEditedGroupOnly = function() {
            const args = {
                TestAPI: "FormIt.GroupEdit.GetShowEditedGroupOnly"
            };
            return callAsyncAPI(args);
        };

        FormIt.GroupEdit.SetShowEditedGroupOnly = function(show) {
            const args = {
                TestAPI: "FormIt.GroupEdit.SetShowEditedGroupOnly",
show: show
            };
            return callAsyncAPI(args);
        };
FormIt.HUDManager = {};

        FormIt.HUDManager.GetNumWidgets = function() {
            const args = {
                TestAPI: "FormIt.HUDManager.GetNumWidgets"
            };
            return callAsyncAPI(args);
        };

        FormIt.HUDManager.WidgetTextInput = function(widgetID,text) {
            const args = {
                TestAPI: "FormIt.HUDManager.WidgetTextInput",
widgetID: widgetID,
        text: text
            };
            return callAsyncAPI(args);
        };

        FormIt.HUDManager.ResetHUD = function() {
            const args = {
                TestAPI: "FormIt.HUDManager.ResetHUD"
            };
            return callAsyncAPI(args);
        };
FormIt.ImageManager = {};

        FormIt.ImageManager.ReloadImageLayerWithImage = function(nHistoryID,nLayerID,imageFile) {
            const args = {
                TestAPI: "FormIt.ImageManager.ReloadImageLayerWithImage",
nHistoryID: nHistoryID,
        nLayerID: nLayerID,
        imageFile: imageFile
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.ReloadImageLayerWithPlaceholder = function(nHistoryID,nLayerID) {
            const args = {
                TestAPI: "FormIt.ImageManager.ReloadImageLayerWithPlaceholder",
nHistoryID: nHistoryID,
        nLayerID: nLayerID
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.GetData = function(nHistoryID,nImageID,aIncludeSatelliteData) {
            const args = {
                TestAPI: "FormIt.ImageManager.GetData",
nHistoryID: nHistoryID,
        nImageID: nImageID,
        aIncludeSatelliteData: aIncludeSatelliteData
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.GetAllImages = function(nHistoryID,nSort) {
            const args = {
                TestAPI: "FormIt.ImageManager.GetAllImages",
nHistoryID: nHistoryID,
        nSort: nSort
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.ImportImage = function(nHistoryID,fileName,pixelWidth,pixelHeight,worldWidth,worldHeight,isSatelliteImage,addToSelections) {
            const args = {
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

        FormIt.ImageManager.SetImageName = function(nHistoryID,imageID,name) {
            const args = {
                TestAPI: "FormIt.ImageManager.SetImageName",
nHistoryID: nHistoryID,
        imageID: imageID,
        name: name
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.SetImageAlpha = function(nHistoryID,imageID,fAlpha,bFinalChange) {
            const args = {
                TestAPI: "FormIt.ImageManager.SetImageAlpha",
nHistoryID: nHistoryID,
        imageID: imageID,
        fAlpha: fAlpha,
        bFinalChange: bFinalChange
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.SetImagePosition = function(nHistoryID,imageID,nPosition) {
            const args = {
                TestAPI: "FormIt.ImageManager.SetImagePosition",
nHistoryID: nHistoryID,
        imageID: imageID,
        nPosition: nPosition
            };
            return callAsyncAPI(args);
        };

        FormIt.ImageManager.ReloadTerrain = function(nHistoryID,nImageID,imageFile,nRows,nCols,elevations) {
            const args = {
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
FormIt.Layers = {};

        FormIt.Layers.GetAllLayers = function() {
            const args = {
                TestAPI: "FormIt.Layers.GetAllLayers"
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetLayerData = function(layerID) {
            const args = {
                TestAPI: "FormIt.Layers.GetLayerData",
layerID: layerID
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetAllLayerData = function() {
            const args = {
                TestAPI: "FormIt.Layers.GetAllLayerData"
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.AddLayer = function(historyID,layerName,visible) {
            const args = {
                TestAPI: "FormIt.Layers.AddLayer",
historyID: historyID,
        layerName: layerName,
        visible: visible
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.IsValid = function(layerID) {
            const args = {
                TestAPI: "FormIt.Layers.IsValid",
layerID: layerID
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.SetLayersVisibility = function(aLayersVisibility) {
            const args = {
                TestAPI: "FormIt.Layers.SetLayersVisibility",
aLayersVisibility: aLayersVisibility
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.SetLayerVisibility = function(layerName,visibility) {
            const args = {
                TestAPI: "FormIt.Layers.SetLayerVisibility",
layerName: layerName,
        visibility: visibility
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.LayerExists = function(layerName) {
            const args = {
                TestAPI: "FormIt.Layers.LayerExists",
layerName: layerName
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.DeleteLayers = function(aLayerIDs) {
            const args = {
                TestAPI: "FormIt.Layers.DeleteLayers",
aLayerIDs: aLayerIDs
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.IsValidLayerName = function(layerID,newLayerName) {
            const args = {
                TestAPI: "FormIt.Layers.IsValidLayerName",
layerID: layerID,
        newLayerName: newLayerName
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.SetLayerName = function(layerID,newLayerName) {
            const args = {
                TestAPI: "FormIt.Layers.SetLayerName",
layerID: layerID,
        newLayerName: newLayerName
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.AssignLayerToObjects = function(layerID,aObjects) {
            const args = {
                TestAPI: "FormIt.Layers.AssignLayerToObjects",
layerID: layerID,
        aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.RemoveLayersFromObjects = function(layerIDs,aObjects) {
            const args = {
                TestAPI: "FormIt.Layers.RemoveLayersFromObjects",
layerIDs: layerIDs,
        aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetAllObjectsOnLayers = function(layerIDs,allHistories) {
            const args = {
                TestAPI: "FormIt.Layers.GetAllObjectsOnLayers",
layerIDs: layerIDs,
        allHistories: allHistories
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.ChangeLayerOrder = function(layerID,newPosition) {
            const args = {
                TestAPI: "FormIt.Layers.ChangeLayerOrder",
layerID: layerID,
        newPosition: newPosition
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetObjectLayerID = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "FormIt.Layers.GetObjectLayerID",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.IsValidObjectForLayerAssignment = function(nHistoryID,nObjectID) {
            const args = {
                TestAPI: "FormIt.Layers.IsValidObjectForLayerAssignment",
nHistoryID: nHistoryID,
        nObjectID: nObjectID
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetLayerList = function() {
            const args = {
                TestAPI: "FormIt.Layers.GetLayerList"
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetObjectsLayerList = function(groupInstacePathArray,bIncludeNoLayer) {
            const args = {
                TestAPI: "FormIt.Layers.GetObjectsLayerList",
groupInstacePathArray: groupInstacePathArray,
        bIncludeNoLayer: bIncludeNoLayer
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.GetLayerID = function(layerName) {
            const args = {
                TestAPI: "FormIt.Layers.GetLayerID",
layerName: layerName
            };
            return callAsyncAPI(args);
        };

        FormIt.Layers.SetLayerPickable = function(layerID,pickable) {
            const args = {
                TestAPI: "FormIt.Layers.SetLayerPickable",
layerID: layerID,
        pickable: pickable
            };
            return callAsyncAPI(args);
        };
FormIt.Levels = {};

        FormIt.Levels.AddLevels = function(nHistoryID,numLevels,startElevation,deltaElevation) {
            const args = {
                TestAPI: "FormIt.Levels.AddLevels",
nHistoryID: nHistoryID,
        numLevels: numLevels,
        startElevation: startElevation,
        deltaElevation: deltaElevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.AutoRenameLevels = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.AutoRenameLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.ChangeLevelElevation = function(nHistoryID,levelID,newElevation) {
            const args = {
                TestAPI: "FormIt.Levels.ChangeLevelElevation",
nHistoryID: nHistoryID,
        levelID: levelID,
        newElevation: newElevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.ChangeLevelName = function(levelID,levelName) {
            const args = {
                TestAPI: "FormIt.Levels.ChangeLevelName",
levelID: levelID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.CreateDefaultLevels = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.CreateDefaultLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.DeleteLevels = function(nHistoryID,aLevelIDs) {
            const args = {
                TestAPI: "FormIt.Levels.DeleteLevels",
nHistoryID: nHistoryID,
        aLevelIDs: aLevelIDs
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetDefaultLevelHeight = function() {
            const args = {
                TestAPI: "FormIt.Levels.GetDefaultLevelHeight"
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetLevels = function(nHistoryID,sortByElevation) {
            const args = {
                TestAPI: "FormIt.Levels.GetLevels",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetLevelsVisible = function() {
            const args = {
                TestAPI: "FormIt.Levels.GetLevelsVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetNumLevels = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.GetNumLevels",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetMinLevelElevation = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.GetMinLevelElevation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetMaxLevelElevation = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.GetMaxLevelElevation",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetLevelData = function(nHistoryID,levelID) {
            const args = {
                TestAPI: "FormIt.Levels.GetLevelData",
nHistoryID: nHistoryID,
        levelID: levelID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetLevelsData = function(nHistoryID,sortByElevation) {
            const args = {
                TestAPI: "FormIt.Levels.GetLevelsData",
nHistoryID: nHistoryID,
        sortByElevation: sortByElevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetLevelIDsFromSelectedObjects = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Levels.GetLevelIDsFromSelectedObjects",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.HasLevelsInProject = function(checkVisibleOnly) {
            const args = {
                TestAPI: "FormIt.Levels.HasLevelsInProject",
checkVisibleOnly: checkVisibleOnly
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsExistingLevel = function(nHistoryID,levelName) {
            const args = {
                TestAPI: "FormIt.Levels.IsExistingLevel",
nHistoryID: nHistoryID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsExistingLevelByElevation = function(nHistoryID,elevation) {
            const args = {
                TestAPI: "FormIt.Levels.IsExistingLevelByElevation",
nHistoryID: nHistoryID,
        elevation: elevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsValidLevelDeltaElevation = function(nHistoryID,deltaElevationString,numLevels) {
            const args = {
                TestAPI: "FormIt.Levels.IsValidLevelDeltaElevation",
nHistoryID: nHistoryID,
        deltaElevationString: deltaElevationString,
        numLevels: numLevels
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsValidLevelElevation = function(nHistoryID,levelId,elevationString) {
            const args = {
                TestAPI: "FormIt.Levels.IsValidLevelElevation",
nHistoryID: nHistoryID,
        levelId: levelId,
        elevationString: elevationString
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsValidLevelName = function(levelID,levelName) {
            const args = {
                TestAPI: "FormIt.Levels.IsValidLevelName",
levelID: levelID,
        levelName: levelName
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.IsValidNumberOfLevelsToAdd = function(nHistoryID,numLevelsString,deltaElevation) {
            const args = {
                TestAPI: "FormIt.Levels.IsValidNumberOfLevelsToAdd",
nHistoryID: nHistoryID,
        numLevelsString: numLevelsString,
        deltaElevation: deltaElevation
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.SetLevelsToSelectedObjects = function(nHistoryID,aLevelList) {
            const args = {
                TestAPI: "FormIt.Levels.SetLevelsToSelectedObjects",
nHistoryID: nHistoryID,
        aLevelList: aLevelList
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.SetLevelsVisible = function(aVisible) {
            const args = {
                TestAPI: "FormIt.Levels.SetLevelsVisible",
aVisible: aVisible
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.SetReportAreaByLevelsOnSelection = function(bON) {
            const args = {
                TestAPI: "FormIt.Levels.SetReportAreaByLevelsOnSelection",
bON: bON
            };
            return callAsyncAPI(args);
        };

        FormIt.Levels.GetAreaForObjects = function(nHistoryID,aLevelId,aObjectIds) {
            const args = {
                TestAPI: "FormIt.Levels.GetAreaForObjects",
nHistoryID: nHistoryID,
        aLevelId: aLevelId,
        aObjectIds: aObjectIds
            };
            return callAsyncAPI(args);
        };
FormIt.MaterialProvider = {};

        FormIt.MaterialProvider.MaterialData = function(color,textureData,scale,useAlpha,materialName,materialIdentifier,textureName,aAdditionalRenderData,aAdditionalTextures) {
            const args = {
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

        FormIt.MaterialProvider.CreateMaterial = function(libraryType,materialData) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.CreateMaterial",
libraryType: libraryType,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.GetMaterialData = function(libraryType,materialId) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialData",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.SetMaterialData = function(libraryType,materialId,materialData) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.SetMaterialData",
libraryType: libraryType,
        materialId: materialId,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.GetMaterialName = function(libraryType,materialId) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialName",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.GetMaterials = function(libraryType) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterials",
libraryType: libraryType
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.DeleteMaterials = function(libraryType,materialIds) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.DeleteMaterials",
libraryType: libraryType,
        materialIds: materialIds
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.GetMaterialPreviewImage = function(libraryType,materialId) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.GetMaterialPreviewImage",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.IsValidMaterialName = function(libraryType,materialId,newName) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.IsValidMaterialName",
libraryType: libraryType,
        materialId: materialId,
        newName: newName
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.GetNewMaterialName = function(libraryType,baseName) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.GetNewMaterialName",
libraryType: libraryType,
        baseName: baseName
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.IsValidMaterial = function(libraryType,materialId) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.IsValidMaterial",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.MaterialProvider.CanModify = function(libraryType,materialId) {
            const args = {
                TestAPI: "FormIt.MaterialProvider.CanModify",
libraryType: libraryType,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };
FormIt.Messaging = {};

        FormIt.Messaging.GetMessages = function() {
            const args = {
                TestAPI: "FormIt.Messaging.GetMessages"
            };
            return callAsyncAPI(args);
        };
FormIt.Model = {};

        FormIt.Model.GetHistoryID = function() {
            const args = {
                TestAPI: "FormIt.Model.GetHistoryID"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetMemorySize = function(bCollapsedHistoryWithLiveObjsOnly) {
            const args = {
                TestAPI: "FormIt.Model.GetMemorySize",
bCollapsedHistoryWithLiveObjsOnly: bCollapsedHistoryWithLiveObjsOnly
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetUnitTypeCurrent = function() {
            const args = {
                TestAPI: "FormIt.Model.GetUnitTypeCurrent"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetUnitType = function() {
            const args = {
                TestAPI: "FormIt.Model.GetUnitType"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetUnitTypeCurrent = function(unitType) {
            const args = {
                TestAPI: "FormIt.Model.SetUnitTypeCurrent",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetUnitType = function(unitType) {
            const args = {
                TestAPI: "FormIt.Model.SetUnitType",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.IsImperialUnitType = function(unitType) {
            const args = {
                TestAPI: "FormIt.Model.IsImperialUnitType",
unitType: unitType
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetGroupHistoryName = function(nHistoryID) {
            const args = {
                TestAPI: "FormIt.Model.GetGroupHistoryName",
nHistoryID: nHistoryID
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetGroupHistoryName = function(nHistoryID,sHistoryName) {
            const args = {
                TestAPI: "FormIt.Model.SetGroupHistoryName",
nHistoryID: nHistoryID,
        sHistoryName: sHistoryName
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.IsModified = function() {
            const args = {
                TestAPI: "FormIt.Model.IsModified"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.ResetModified = function() {
            const args = {
                TestAPI: "FormIt.Model.ResetModified"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetCurveAccuracyOrCountCurrent = function(accuracyORcount) {
            const args = {
                TestAPI: "FormIt.Model.SetCurveAccuracyOrCountCurrent",
accuracyORcount: accuracyORcount
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetCurveAccuracyOrCountCurrent = function() {
            const args = {
                TestAPI: "FormIt.Model.GetCurveAccuracyOrCountCurrent"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetPropertiesForHistory = function(nHistoryID,editingPath) {
            const args = {
                TestAPI: "FormIt.Model.GetPropertiesForHistory",
nHistoryID: nHistoryID,
        editingPath: editingPath
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetPropertiesForSelected = function() {
            const args = {
                TestAPI: "FormIt.Model.GetPropertiesForSelected"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetObjectName = function(objectID) {
            const args = {
                TestAPI: "FormIt.Model.GetObjectName",
objectID: objectID
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetObjectName = function(objectID,name) {
            const args = {
                TestAPI: "FormIt.Model.SetObjectName",
objectID: objectID,
        name: name
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.ObjectReportsAreaByLevel = function(objectID) {
            const args = {
                TestAPI: "FormIt.Model.ObjectReportsAreaByLevel",
objectID: objectID
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetSurfaceAccuracyOrCountCurrent = function(accuracy) {
            const args = {
                TestAPI: "FormIt.Model.SetSurfaceAccuracyOrCountCurrent",
accuracy: accuracy
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetSurfaceAccuracyOrCountCurrent = function() {
            const args = {
                TestAPI: "FormIt.Model.GetSurfaceAccuracyOrCountCurrent"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetProjectSiteArea = function() {
            const args = {
                TestAPI: "FormIt.Model.GetProjectSiteArea"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.SetTotalAreaOfSite = function(area) {
            const args = {
                TestAPI: "FormIt.Model.SetTotalAreaOfSite",
area: area
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetProjectTargetArea = function() {
            const args = {
                TestAPI: "FormIt.Model.GetProjectTargetArea"
            };
            return callAsyncAPI(args);
        };

        FormIt.Model.GetTotalGrossArea = function() {
            const args = {
                TestAPI: "FormIt.Model.GetTotalGrossArea"
            };
            return callAsyncAPI(args);
        };
FormIt.Scenes = {};

        FormIt.Scenes.SceneNameExists = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.SceneNameExists",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.IsValidSceneName = function(oldSceneName,newSceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.IsValidSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetSceneName = function(oldSceneName,newSceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.SetSceneName",
oldSceneName: oldSceneName,
        newSceneName: newSceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.AddNewScene = function(afterSceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.AddNewScene",
afterSceneName: afterSceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetScene = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetScenes = function() {
            const args = {
                TestAPI: "FormIt.Scenes.GetScenes"
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetScenes = function(scenes) {
            const args = {
                TestAPI: "FormIt.Scenes.SetScenes",
scenes: scenes
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.AddScene = function(scene,afterSceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.AddScene",
scene: scene,
        afterSceneName: afterSceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.RemoveScene = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.RemoveScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.DuplicateScene = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.DuplicateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetSceneNames = function() {
            const args = {
                TestAPI: "FormIt.Scenes.GetSceneNames"
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.ScenesAreEqual = function(sceneName,scene) {
            const args = {
                TestAPI: "FormIt.Scenes.ScenesAreEqual",
sceneName: sceneName,
        scene: scene
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetPresentationMode = function(start,sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.SetPresentationMode",
start: start,
        sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.IsPresenting = function() {
            const args = {
                TestAPI: "FormIt.Scenes.IsPresenting"
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.UpdateScene = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.UpdateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetPropertiesToCapture = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetPropertiesToCapture",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetPropertiesToCapture = function(sceneName,properties) {
            const args = {
                TestAPI: "FormIt.Scenes.SetPropertiesToCapture",
sceneName: sceneName,
        properties: properties
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.ActivateScene = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.ActivateScene",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.MoveSceneUp = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.MoveSceneUp",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.MoveSceneDown = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.MoveSceneDown",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.RearrangeScenes = function(oldPos,newPos) {
            const args = {
                TestAPI: "FormIt.Scenes.RearrangeScenes",
oldPos: oldPos,
        newPos: newPos
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetNumberOfScenes = function() {
            const args = {
                TestAPI: "FormIt.Scenes.GetNumberOfScenes"
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetNumberOfScenesWithAnimation = function() {
            const args = {
                TestAPI: "FormIt.Scenes.GetNumberOfScenesWithAnimation"
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetPauseTime = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetPauseTime",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetPauseTime = function(sceneName,pauseTime) {
            const args = {
                TestAPI: "FormIt.Scenes.SetPauseTime",
sceneName: sceneName,
        pauseTime: pauseTime
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.IsValidScenePauseTime = function(pauseTimeString) {
            const args = {
                TestAPI: "FormIt.Scenes.IsValidScenePauseTime",
pauseTimeString: pauseTimeString
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.IsValidSceneTransitionTime = function(transitionTimeString) {
            const args = {
                TestAPI: "FormIt.Scenes.IsValidSceneTransitionTime",
transitionTimeString: transitionTimeString
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.IsValidSceneCameraSpeed = function(speedString) {
            const args = {
                TestAPI: "FormIt.Scenes.IsValidSceneCameraSpeed",
speedString: speedString
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetTransitionTime = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetTransitionTime",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetTransitionTime = function(sceneName,transitionTime) {
            const args = {
                TestAPI: "FormIt.Scenes.SetTransitionTime",
sceneName: sceneName,
        transitionTime: transitionTime
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetCameraSpeed = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetCameraSpeed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetCameraSpeed = function(sceneName,cameraSpeed) {
            const args = {
                TestAPI: "FormIt.Scenes.SetCameraSpeed",
sceneName: sceneName,
        cameraSpeed: cameraSpeed
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetIncludeInAnimation = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetIncludeInAnimation",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetIncludeInAnimation = function(sceneName,bIncludeInAnimation) {
            const args = {
                TestAPI: "FormIt.Scenes.SetIncludeInAnimation",
sceneName: sceneName,
        bIncludeInAnimation: bIncludeInAnimation
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetUseCameraSpeed = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetUseCameraSpeed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetUseCameraSpeed = function(sceneName,bUseCameraSpeed) {
            const args = {
                TestAPI: "FormIt.Scenes.SetUseCameraSpeed",
sceneName: sceneName,
        bUseCameraSpeed: bUseCameraSpeed
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetTransitionTimeUsed = function(sceneName) {
            const args = {
                TestAPI: "FormIt.Scenes.GetTransitionTimeUsed",
sceneName: sceneName
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.SetEditCameras = function(bEditCameras) {
            const args = {
                TestAPI: "FormIt.Scenes.SetEditCameras",
bEditCameras: bEditCameras
            };
            return callAsyncAPI(args);
        };

        FormIt.Scenes.GetEditCameras = function() {
            const args = {
                TestAPI: "FormIt.Scenes.GetEditCameras"
            };
            return callAsyncAPI(args);
        };
FormIt.StringConversion = {};

        FormIt.StringConversion.LinearValueToString = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.LinearValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        FormIt.StringConversion.StringToLinearValue = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.StringToLinearValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        FormIt.StringConversion.AreaValueToString = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.AreaValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        FormIt.StringConversion.StringToAreaValue = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.StringToAreaValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        FormIt.StringConversion.VolumeValueToString = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.VolumeValueToString",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };

        FormIt.StringConversion.StringToVolumeValue = function(val,forceFeetOrMeter) {
            const args = {
                TestAPI: "FormIt.StringConversion.StringToVolumeValue",
val: val,
        forceFeetOrMeter: forceFeetOrMeter
            };
            return callAsyncAPI(args);
        };
FormIt.SectionPlanes = {};

        FormIt.SectionPlanes.Clear = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.Clear"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetPlanes = function(planes) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetPlanes",
planes: planes
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetPlanes = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetPlanes"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetInstances = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetInstances"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetOutlineColor = function(color) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetOutlineColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetOutlineColor = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetOutlineColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetOutlineSize = function(s) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetOutlineSize",
s: s
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetOutlineSize = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetOutlineSize"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetSectionIndicatorsVisibility = function(visible) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetSectionIndicatorsVisibility",
visible: visible
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetPocheColor = function(color) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetPocheColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetPocheColor = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetPocheColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.EnablePocheColor = function(enable) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.EnablePocheColor",
enable: enable
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.IsPocheColorEnabled = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.IsPocheColorEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SectionPlaneHistoryChanged = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SectionPlaneHistoryChanged"
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.SetLastSectionRefHistory = function(historyId) {
            const args = {
                TestAPI: "FormIt.SectionPlanes.SetLastSectionRefHistory",
historyId: historyId
            };
            return callAsyncAPI(args);
        };

        FormIt.SectionPlanes.GetLastSectionRefHistory = function() {
            const args = {
                TestAPI: "FormIt.SectionPlanes.GetLastSectionRefHistory"
            };
            return callAsyncAPI(args);
        };
FormIt.Selection = {};

        FormIt.Selection.GetObjectTypeFilter = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetObjectTypeFilter"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.SetObjectTypeFilter = function(objectTypeFilter) {
            const args = {
                TestAPI: "FormIt.Selection.SetObjectTypeFilter",
objectTypeFilter: objectTypeFilter
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.ClearSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.ClearSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.AddSelections = function(aSelection) {
            const args = {
                TestAPI: "FormIt.Selection.AddSelections",
aSelection: aSelection
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.GetSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.SetSelections = function(selections) {
            const args = {
                TestAPI: "FormIt.Selection.SetSelections",
selections: selections
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.SetPreSelections = function(firstPreselection,selections) {
            const args = {
                TestAPI: "FormIt.Selection.SetPreSelections",
firstPreselection: firstPreselection,
        selections: selections
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.HasPreSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.HasPreSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.GetFirstPreSelectedObject = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetFirstPreSelectedObject"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.GetFirstSelectedObject = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetFirstSelectedObject"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.GetContextMenuObject = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetContextMenuObject"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.ClearPreSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.ClearPreSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.IsSelected = function(objPath) {
            const args = {
                TestAPI: "FormIt.Selection.IsSelected",
objPath: objPath
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.SelectAll = function() {
            const args = {
                TestAPI: "FormIt.Selection.SelectAll"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.HasSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.HasSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.GetPreSelections = function() {
            const args = {
                TestAPI: "FormIt.Selection.GetPreSelections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.CommitPreselections = function() {
            const args = {
                TestAPI: "FormIt.Selection.CommitPreselections"
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.CompareSelections = function(selection1,selection2) {
            const args = {
                TestAPI: "FormIt.Selection.CompareSelections",
selection1: selection1,
        selection2: selection2
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.ToggleObjects = function(selections) {
            const args = {
                TestAPI: "FormIt.Selection.ToggleObjects",
selections: selections
            };
            return callAsyncAPI(args);
        };

        FormIt.Selection.ApplyMaterialToSelection = function(id,backside) {
            const args = {
                TestAPI: "FormIt.Selection.ApplyMaterialToSelection",
id: id,
        backside: backside
            };
            return callAsyncAPI(args);
        };
FormIt.Shortcuts = {};

        FormIt.Shortcuts.GetShortcutKeys = function() {
            const args = {
                TestAPI: "FormIt.Shortcuts.GetShortcutKeys"
            };
            return callAsyncAPI(args);
        };

        FormIt.Shortcuts.RestoreFromJSON = function(jsonStr) {
            const args = {
                TestAPI: "FormIt.Shortcuts.RestoreFromJSON",
jsonStr: jsonStr
            };
            return callAsyncAPI(args);
        };

        FormIt.Shortcuts.GetJSON = function() {
            const args = {
                TestAPI: "FormIt.Shortcuts.GetJSON"
            };
            return callAsyncAPI(args);
        };

        FormIt.Shortcuts.GetKeycodeString = function(key,modifier) {
            const args = {
                TestAPI: "FormIt.Shortcuts.GetKeycodeString",
key: key,
        modifier: modifier
            };
            return callAsyncAPI(args);
        };
FormIt.Commands = {};

        FormIt.Commands.GetCommands = function() {
            const args = {
                TestAPI: "FormIt.Commands.GetCommands"
            };
            return callAsyncAPI(args);
        };

        FormIt.Commands.DoCommand = function(command) {
            const args = {
                TestAPI: "FormIt.Commands.DoCommand",
command: command
            };
            return callAsyncAPI(args);
        };

        FormIt.Commands.RegisterJSCommand = function(command) {
            const args = {
                TestAPI: "FormIt.Commands.RegisterJSCommand",
command: command
            };
            return callAsyncAPI(args);
        };
FormIt.SketchMaterials = {};

        FormIt.SketchMaterials.GetWSMMaterialForHistory = function(historyId,materialId) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetWSMMaterialForHistory",
historyId: historyId,
        materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial = function(historyId,wsmMaterialId) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetSketchMaterialFromWSMMaterial",
historyId: historyId,
        wsmMaterialId: wsmMaterialId
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetMaterialIDsFromObjects = function(aObjects) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialIDsFromObjects",
aObjects: aObjects
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.AssignMaterialToObjects = function(materialId,aObjects,uvTransf3d) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.AssignMaterialToObjects",
materialId: materialId,
        aObjects: aObjects,
        uvTransf3d: uvTransf3d
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.ChangeMaterialOrder = function(materialId,newPos) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.ChangeMaterialOrder",
materialId: materialId,
        newPos: newPos
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.IsMaterialUsed = function(materialId) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.IsMaterialUsed",
materialId: materialId
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetDefaultMaterialData = function(bBack) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetDefaultMaterialData",
bBack: bBack
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.SetDefaultMaterialData = function(bBack,materialData) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.SetDefaultMaterialData",
bBack: bBack,
        materialData: materialData
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetMaterialDataAttribute = function(materialData,attributeType) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.SetMaterialDataAttribute = function(materialData,attributeType,value) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.SetMaterialDataAttribute",
materialData: materialData,
        attributeType: attributeType,
        value: value
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetMaterialDataMap = function(materialData,mapType) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetMaterialDataMap",
materialData: materialData,
        mapType: mapType
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.SetMaterialDataMap = function(materialData,mapType,map) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.SetMaterialDataMap",
materialData: materialData,
        mapType: mapType,
        map: map
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.GetAllObjectsUsingMaterials = function(materialIds) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.GetAllObjectsUsingMaterials",
materialIds: materialIds
            };
            return callAsyncAPI(args);
        };

        FormIt.SketchMaterials.UpdateMaterialFromParameters = function(materialID,parameters) {
            const args = {
                TestAPI: "FormIt.SketchMaterials.UpdateMaterialFromParameters",
materialID: materialID,
        parameters: parameters
            };
            return callAsyncAPI(args);
        };
FormIt.Statistics = {};

        FormIt.Statistics.OptOutTracking = function(isOptingOut) {
            const args = {
                TestAPI: "FormIt.Statistics.OptOutTracking",
isOptingOut: isOptingOut
            };
            return callAsyncAPI(args);
        };

        FormIt.Statistics.Log = function(UITrackingType) {
            const args = {
                TestAPI: "FormIt.Statistics.Log",
UITrackingType: UITrackingType
            };
            return callAsyncAPI(args);
        };
FormIt.SunAndLocation = {};

        FormIt.SunAndLocation.AddSatelliteImage = function(centerLat,centerLon,latSpan,lonSpan,pixelWidth,pixelHeight,physicalWidth,physicalHeight,address,xOffset,yOffset) {
            const args = {
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

        FormIt.SunAndLocation.SetProjectAddress = function(address) {
            const args = {
                TestAPI: "FormIt.SunAndLocation.SetProjectAddress",
address: address
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.GetProjectAddress = function() {
            const args = {
                TestAPI: "FormIt.SunAndLocation.GetProjectAddress"
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.SetLocation = function(longitude,latitude) {
            const args = {
                TestAPI: "FormIt.SunAndLocation.SetLocation",
longitude: longitude,
        latitude: latitude
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.SetTimeOfDay = function(dTimeOfDay,bUpdateRender,bForceUpdateShadows) {
            const args = {
                TestAPI: "FormIt.SunAndLocation.SetTimeOfDay",
dTimeOfDay: dTimeOfDay,
        bUpdateRender: bUpdateRender,
        bForceUpdateShadows: bForceUpdateShadows
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.UpdateShadows = function() {
            const args = {
                TestAPI: "FormIt.SunAndLocation.UpdateShadows"
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.SetDate = function(nDay,nMonth,nYear,bUpdateRender,bForceUpdateShadows) {
            const args = {
                TestAPI: "FormIt.SunAndLocation.SetDate",
nDay: nDay,
        nMonth: nMonth,
        nYear: nYear,
        bUpdateRender: bUpdateRender,
        bForceUpdateShadows: bForceUpdateShadows
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.GetDaylightSavingTime = function() {
            const args = {
                TestAPI: "FormIt.SunAndLocation.GetDaylightSavingTime"
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.SetDaylightSavingTime = function(bEnable,bUpdateRender) {
            const args = {
                TestAPI: "FormIt.SunAndLocation.SetDaylightSavingTime",
bEnable: bEnable,
        bUpdateRender: bUpdateRender
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.GetLocationDateTime = function() {
            const args = {
                TestAPI: "FormIt.SunAndLocation.GetLocationDateTime"
            };
            return callAsyncAPI(args);
        };

        FormIt.SunAndLocation.GetSunRiseAndSet = function() {
            const args = {
                TestAPI: "FormIt.SunAndLocation.GetSunRiseAndSet"
            };
            return callAsyncAPI(args);
        };
FormIt.Tools = {};

        FormIt.Tools.ClearTools = function() {
            const args = {
                TestAPI: "FormIt.Tools.ClearTools"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.GetActiveToolType = function() {
            const args = {
                TestAPI: "FormIt.Tools.GetActiveToolType"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.GetActiveToolSubType = function() {
            const args = {
                TestAPI: "FormIt.Tools.GetActiveToolSubType"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.IsInContinuousAction = function() {
            const args = {
                TestAPI: "FormIt.Tools.IsInContinuousAction"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.StartTool = function(toolType) {
            const args = {
                TestAPI: "FormIt.Tools.StartTool",
toolType: toolType
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.BlendFacesOrEdges = function(val) {
            const args = {
                TestAPI: "FormIt.Tools.BlendFacesOrEdges",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.FlattenGroups = function() {
            const args = {
                TestAPI: "FormIt.Tools.FlattenGroups"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.OffsetBody = function(val) {
            const args = {
                TestAPI: "FormIt.Tools.OffsetBody",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.Paintbrush = function(materialID,backside) {
            const args = {
                TestAPI: "FormIt.Tools.Paintbrush",
materialID: materialID,
        backside: backside
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.ShellBodyOrFaces = function(val) {
            const args = {
                TestAPI: "FormIt.Tools.ShellBodyOrFaces",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.ClearAllInferences = function() {
            const args = {
                TestAPI: "FormIt.Tools.ClearAllInferences"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.InitToolsAPI = function() {
            const args = {
                TestAPI: "FormIt.Tools.InitToolsAPI"
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.SelectArrayTool = function(numCopies,copyDivide,groupBeforeCopy,radial) {
            const args = {
                TestAPI: "FormIt.Tools.SelectArrayTool",
numCopies: numCopies,
        copyDivide: copyDivide,
        groupBeforeCopy: groupBeforeCopy,
        radial: radial
            };
            return callAsyncAPI(args);
        };

        FormIt.Tools.GetSecondaryTool = function() {
            const args = {
                TestAPI: "FormIt.Tools.GetSecondaryTool"
            };
            return callAsyncAPI(args);
        };
FormIt.UI = {};

        FormIt.UI.LoadLangPack = function(filename) {
            const args = {
                TestAPI: "FormIt.UI.LoadLangPack",
filename: filename
            };
            return callAsyncAPI(args);
        };

        FormIt.UI.CreatePanel = function(title,url) {
            const args = {
                TestAPI: "FormIt.UI.CreatePanel",
title: title,
        url: url
            };
            return callAsyncAPI(args);
        };

        FormIt.UI.CreateToolbar = function(tbJSON,URL) {
            const args = {
                TestAPI: "FormIt.UI.CreateToolbar",
tbJSON: tbJSON,
        URL: URL
            };
            return callAsyncAPI(args);
        };

        FormIt.UI.ShowNotification = function(message,notificationType,nTimeout) {
            const args = {
                TestAPI: "FormIt.UI.ShowNotification",
message: message,
        notificationType: notificationType,
        nTimeout: nTimeout
            };
            return callAsyncAPI(args);
        };

        FormIt.UI.CloseNotification = function(notificationHandle) {
            const args = {
                TestAPI: "FormIt.UI.CloseNotification",
notificationHandle: notificationHandle
            };
            return callAsyncAPI(args);
        };
FormIt.UndoManagement = {};

        FormIt.UndoManagement.BeginState = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.BeginState"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.EndState = function(name,userName) {
            const args = {
                TestAPI: "FormIt.UndoManagement.EndState",
name: name,
        userName: userName
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.RejectState = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.RejectState"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.CanGlobalRedo = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.CanGlobalRedo"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GlobalRedo = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GlobalRedo"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GlobalUndo = function(bAndDeleteRedo) {
            const args = {
                TestAPI: "FormIt.UndoManagement.GlobalUndo",
bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.CanGlobalUndo = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.CanGlobalUndo"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.CanRedo = function(nStates) {
            const args = {
                TestAPI: "FormIt.UndoManagement.CanRedo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.CanUndo = function(nStates) {
            const args = {
                TestAPI: "FormIt.UndoManagement.CanUndo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GetCurrentState = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GetCurrentState"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GetHistoryIDs = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GetHistoryIDs"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GetHistoryStates = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GetHistoryStates"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GetStateData = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GetStateData"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.GetStateHistories = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.GetStateHistories"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.MergeCurrentStates = function(histories) {
            const args = {
                TestAPI: "FormIt.UndoManagement.MergeCurrentStates",
histories: histories
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.MergeStateRange = function() {
            const args = {
                TestAPI: "FormIt.UndoManagement.MergeStateRange"
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.MergeStates = function(states) {
            const args = {
                TestAPI: "FormIt.UndoManagement.MergeStates",
states: states
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.NoteState = function(name,aHistories) {
            const args = {
                TestAPI: "FormIt.UndoManagement.NoteState",
name: name,
        aHistories: aHistories
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.Redo = function(nStates) {
            const args = {
                TestAPI: "FormIt.UndoManagement.Redo",
nStates: nStates
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.RollTo = function(bAndDeleteRedo) {
            const args = {
                TestAPI: "FormIt.UndoManagement.RollTo",
bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.SetLastStateName = function(stateName) {
            const args = {
                TestAPI: "FormIt.UndoManagement.SetLastStateName",
stateName: stateName
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.SetStateName = function(stateName) {
            const args = {
                TestAPI: "FormIt.UndoManagement.SetStateName",
stateName: stateName
            };
            return callAsyncAPI(args);
        };

        FormIt.UndoManagement.Undo = function(nStates,bAndDeleteRedo) {
            const args = {
                TestAPI: "FormIt.UndoManagement.Undo",
nStates: nStates,
        bAndDeleteRedo: bAndDeleteRedo
            };
            return callAsyncAPI(args);
        };
FormIt.Utils = {};

        FormIt.Utils.DecodeBase64Bytes = function(decodeBytes) {
            const args = {
                TestAPI: "FormIt.Utils.DecodeBase64Bytes",
decodeBytes: decodeBytes
            };
            return callAsyncAPI(args);
        };

        FormIt.Utils.EncodeBase64Bytes = function(encodeBytes) {
            const args = {
                TestAPI: "FormIt.Utils.EncodeBase64Bytes",
encodeBytes: encodeBytes
            };
            return callAsyncAPI(args);
        };

        FormIt.Utils.NewGuid = function() {
            const args = {
                TestAPI: "FormIt.Utils.NewGuid"
            };
            return callAsyncAPI(args);
        };

        FormIt.Utils.GuidFromString = function(hexStr) {
            const args = {
                TestAPI: "FormIt.Utils.GuidFromString",
hexStr: hexStr
            };
            return callAsyncAPI(args);
        };
FormIt.VisualStyles = {};

        FormIt.VisualStyles.GetShadowsVisible = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetShadowsVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetShadowsVisible = function(val) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetShadowsVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetAlwaysDrawInstanceBoxes"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes = function(val) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetAlwaysDrawInstanceBoxes",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsGroundPlaneVisible = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsGroundPlaneVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetGroundPlaneVisible = function(val) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetGroundPlaneVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsWorkPlaneVisible = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsWorkPlaneVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetWorkPlaneVisible = function(val) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetWorkPlaneVisible",
val: val
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetNorthArrowDisplay = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetNorthArrowDisplay"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetNorthArrowDisplay = function(bOn) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetNorthArrowDisplay",
bOn: bOn
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.ToggleNorthArrowDisplay = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.ToggleNorthArrowDisplay"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsNorthArrowVisible = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsNorthArrowVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetShowAxes = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetShowAxes"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetShowAxes = function(bShow) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetShowAxes",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetShowSilhouettes = function(bShow) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetShowSilhouettes",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetShowEdges = function(bShow) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetShowEdges",
bShow: bShow
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsGridVisible = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsGridVisible"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetGridVisible = function(bVisible) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetGridVisible",
bVisible: bVisible
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetHighlightPreselect = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetHighlightPreselect"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetHighlightPreselect = function(bHighlight) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetHighlightPreselect",
bHighlight: bHighlight
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetAmbientColorIntensity = function(i) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientColorIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetAmbientColorIntensity = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetAmbientColorIntensity"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetAmbientTextureIntensity = function(i) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientTextureIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetAmbientTextureIntensity = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetAmbientTextureIntensity"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetAmbientMaterialIntensity = function(i) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetAmbientMaterialIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSunShading = function(i) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSunShading",
i: i
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetSunShading = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetSunShading"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetShadowIntensity = function(i) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetShadowIntensity",
i: i
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetShadowIntensity = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetShadowIntensity"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetAdvancedMaterialShaderType = function(type) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetAdvancedMaterialShaderType",
type: type
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetAdvancedMaterialShaderType = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetAdvancedMaterialShaderType"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsSkyRendered = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsSkyRendered"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSkyRendered = function(b) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSkyRendered",
b: b
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsFogRendered = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsFogRendered"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetFogRendered = function(b) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetFogRendered",
b: b
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSkyLowerColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSkyLowerColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetSkyLowerColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetSkyLowerColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSkyUpperColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSkyUpperColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetSkyUpperColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetSkyUpperColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetBackgroundColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetBackgroundColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetBackgroundColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetBackgroundColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetGroundPlaneColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetGroundPlaneColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetGroundPlaneColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetGroundPlaneColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetWorkPlaneColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetWorkPlaneColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetWorkPlaneColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetWorkPlaneColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSunEditorEnabled = function(bEnabled) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSunEditorEnabled",
bEnabled: bEnabled
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetSunEditorEnabled = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetSunEditorEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetEdgeWeight = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetEdgeWeight"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetEdgeWeight = function(weight) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetEdgeWeight",
weight: weight
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetEdgeColor = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetEdgeColor"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetEdgeColor = function(color) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetEdgeColor",
color: color
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.GetSilhouetteWeight = function() {
            const args = {
                TestAPI: "FormIt.VisualStyles.GetSilhouetteWeight"
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetSilhouetteWeight = function(weight) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetSilhouetteWeight",
weight: weight
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.IsRenderSettingActive = function(flag) {
            const args = {
                TestAPI: "FormIt.VisualStyles.IsRenderSettingActive",
flag: flag
            };
            return callAsyncAPI(args);
        };

        FormIt.VisualStyles.SetRenderSettingFlags = function(flag,b) {
            const args = {
                TestAPI: "FormIt.VisualStyles.SetRenderSettingFlags",
flag: flag,
        b: b
            };
            return callAsyncAPI(args);
        };
FormIt.Events = {};

        FormIt.Events.AreaSelectBegan = function(pt,mods) {
            const args = {
                TestAPI: "FormIt.Events.AreaSelectBegan",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.AreaSelectChanged = function(pt,mods) {
            const args = {
                TestAPI: "FormIt.Events.AreaSelectChanged",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.AreaSelectEnded = function(mods) {
            const args = {
                TestAPI: "FormIt.Events.AreaSelectEnded",
mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.DoubleTap = function(pt,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.DoubleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.DoubleTapTwoTouches = function(pt,mods) {
            const args = {
                TestAPI: "FormIt.Events.DoubleTapTwoTouches",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.HandleEvent = function(event) {
            const args = {
                TestAPI: "FormIt.Events.HandleEvent",
event: event
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.KeyDown = function(keyCode,mods) {
            const args = {
                TestAPI: "FormIt.Events.KeyDown",
keyCode: keyCode,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.KeyUp = function(keyCode,mods) {
            const args = {
                TestAPI: "FormIt.Events.KeyUp",
keyCode: keyCode,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.LongPress = function(pt,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.LongPress",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseDown = function(pt,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseDown",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseMove = function(pt,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseMove",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseOut = function(pt,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseOut",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseOver = function(pt,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseOver",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseUp = function(pt,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseUp",
pt: pt,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.MouseWheel = function(pt,delta,button,mods) {
            const args = {
                TestAPI: "FormIt.Events.MouseWheel",
pt: pt,
        delta: delta,
        button: button,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PanBegin = function(pt,nTouches,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.PanBegin",
pt: pt,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PanChanged = function(vec,nTouches,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.PanChanged",
vec: vec,
        nTouches: nTouches,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PanEnded = function(mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.PanEnded",
mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PinchBegan = function(pt,mods) {
            const args = {
                TestAPI: "FormIt.Events.PinchBegan",
pt: pt,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PinchChanged = function(dDelta,mods) {
            const args = {
                TestAPI: "FormIt.Events.PinchChanged",
dDelta: dDelta,
        mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.PinchEnded = function(mods) {
            const args = {
                TestAPI: "FormIt.Events.PinchEnded",
mods: mods
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.SingleTap = function(pt,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.SingleTap",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };

        FormIt.Events.TouchBegan = function(pt,mods,isStylus) {
            const args = {
                TestAPI: "FormIt.Events.TouchBegan",
pt: pt,
        mods: mods,
        isStylus: isStylus
            };
            return callAsyncAPI(args);
        };
FormIt.Testing = {};

        FormIt.Testing.DisableMessaging = function() {
            const args = {
                TestAPI: "FormIt.Testing.DisableMessaging"
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.EnableMessaging = function() {
            const args = {
                TestAPI: "FormIt.Testing.EnableMessaging"
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.IsMessagingEnabled = function() {
            const args = {
                TestAPI: "FormIt.Testing.IsMessagingEnabled"
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.IsRunning = function() {
            const args = {
                TestAPI: "FormIt.Testing.IsRunning"
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.SetIsRunning = function(running) {
            const args = {
                TestAPI: "FormIt.Testing.SetIsRunning",
running: running
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.LoadFileAndCompare = function(sTestFile,sExtension,sCompareFileName) {
            const args = {
                TestAPI: "FormIt.Testing.LoadFileAndCompare",
sTestFile: sTestFile,
        sExtension: sExtension,
        sCompareFileName: sCompareFileName
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.RunNativeTests = function() {
            const args = {
                TestAPI: "FormIt.Testing.RunNativeTests"
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.SetForgeMode = function(mode,path) {
            const args = {
                TestAPI: "FormIt.Testing.SetForgeMode",
mode: mode,
        path: path
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.DownloadFile = function(token,fileInfo) {
            const args = {
                TestAPI: "FormIt.Testing.DownloadFile",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.GetHubsWithProjects = function(token) {
            const args = {
                TestAPI: "FormIt.Testing.GetHubsWithProjects",
token: token
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.CheckEntitlements = function(token) {
            const args = {
                TestAPI: "FormIt.Testing.CheckEntitlements",
token: token
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.GetContentPermissions = function(token,projectInfo,content) {
            const args = {
                TestAPI: "FormIt.Testing.GetContentPermissions",
token: token,
        projectInfo: projectInfo,
        content: content
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.GetTopFolders = function(token,hubInfo,projectInfo) {
            const args = {
                TestAPI: "FormIt.Testing.GetTopFolders",
token: token,
        hubInfo: hubInfo,
        projectInfo: projectInfo
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.ListContents = function(token,projectInfo,folderId) {
            const args = {
                TestAPI: "FormIt.Testing.ListContents",
token: token,
        projectInfo: projectInfo,
        folderId: folderId
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.CreateRemoteFile = function(token,fileName,data,folderId,projectId) {
            const args = {
                TestAPI: "FormIt.Testing.CreateRemoteFile",
token: token,
        fileName: fileName,
        data: data,
        folderId: folderId,
        projectId: projectId
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.UpdateRemoteFile = function(token,data,fileInfo,projectId) {
            const args = {
                TestAPI: "FormIt.Testing.UpdateRemoteFile",
token: token,
        data: data,
        fileInfo: fileInfo,
        projectId: projectId
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.CreateThumbNailDerivative = function(token,fileInfo) {
            const args = {
                TestAPI: "FormIt.Testing.CreateThumbNailDerivative",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.GetThumbNail = function(token,fileInfo) {
            const args = {
                TestAPI: "FormIt.Testing.GetThumbNail",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };

        FormIt.Testing.GetRevitFamilyInfo = function(token,fileInfo) {
            const args = {
                TestAPI: "FormIt.Testing.GetRevitFamilyInfo",
token: token,
        fileInfo: fileInfo
            };
            return callAsyncAPI(args);
        };
FormIt.Settings = {};

        FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints = function(bNoInference) {
            const args = {
                TestAPI: "FormIt.Settings.SetNoInferenceSmoothEdgesAndPoints",
bNoInference: bNoInference
            };
            return callAsyncAPI(args);
        };

        FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints = function() {
            const args = {
                TestAPI: "FormIt.Settings.GetNoInferenceSmoothEdgesAndPoints"
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper = function(paths,ExcludeImages,ExcludeSectionPlanes) {
            const args = {
                TestAPI: "WSM.Utils.GetBoundsForVisibleHistoryBoundsHelper",
paths: paths,
        ExcludeImages: ExcludeImages,
        ExcludeSectionPlanes: ExcludeSectionPlanes
            };
            return callAsyncAPI(args);
        };

        WSM.Utils.GetUTCOffset = function(longitude,latitude) {
            const args = {
                TestAPI: "WSM.Utils.GetUTCOffset",
longitude: longitude,
        latitude: latitude
            };
            return callAsyncAPI(args);
        };

        WSM.Test.HistoryObjects = function(historyObjects) {
            const args = {
                TestAPI: "WSM.Test.HistoryObjects",
historyObjects: historyObjects
            };
            return callAsyncAPI(args);
        };

        WSM.Test.Size_t = function(nID,nArrayIDs) {
            const args = {
                TestAPI: "WSM.Test.Size_t",
nID: nID,
        nArrayIDs: nArrayIDs
            };
            return callAsyncAPI(args);
        };

        WSM.Test.LoadFromFileWithSuspend = function(nHistoryID,sFilePath,eFileType,dMaxDistanceFromOrigin) {
            const args = {
                TestAPI: "WSM.Test.LoadFromFileWithSuspend",
nHistoryID: nHistoryID,
        sFilePath: sFilePath,
        eFileType: eFileType,
        dMaxDistanceFromOrigin: dMaxDistanceFromOrigin
            };
            return callAsyncAPI(args);
        };

        WSM.Test.ResetActiveHistory = function() {
            const args = {
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
FormIt.NotificationType.Debug = 5;
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
FormIt.NotificationType.Debug = 5;
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
            
export { FormIt, WSM };