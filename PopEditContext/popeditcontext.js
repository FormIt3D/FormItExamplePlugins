var JeffsAutodeskPlugins = {};
JeffsAutodeskPlugins.PopEditContext = function()
{
    var path = FormIt.GetEditInContextPath();
    path.ids.pop();
    console.log(JSON.stringify(path.ids));
    FormIt.EditInContext(path);
}
FormIt.Commands.RegisterJSCommand("JeffsAutodeskPlugins.PopEditContext");
