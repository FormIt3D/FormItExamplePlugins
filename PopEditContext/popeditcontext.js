var JeffsAutodeskPlugins = {};
JeffsAutodeskPlugins.PopEditContext = function()
{
    var path = FormIt.GroupEdit.GetInContextEditingPath();
    path.ids.pop();
    console.log(JSON.stringify(path.ids));
    FormIt.GroupEdit.SetInContextEditingPath(path);
}
FormIt.Commands.RegisterJSCommand("JeffsAutodeskPlugins.PopEditContext");
