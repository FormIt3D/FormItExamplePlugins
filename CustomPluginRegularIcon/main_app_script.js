function CreateBlock_MAIN(args)
{
    var histID = FormIt.GroupEdit.GetEditingHistoryID();
    var pt1 = WSM.Geom.Point3d(0.0, 0.0, 0.0);
    var pt2 = WSM.Geom.Point3d(FormIt.PluginUtils.currentUnits(args.w),
                               FormIt.PluginUtils.currentUnits(args.l),
                               FormIt.PluginUtils.currentUnits(args.h));
    var blockID = WSM.APICreateBlock(histID, pt1, pt2);
}
