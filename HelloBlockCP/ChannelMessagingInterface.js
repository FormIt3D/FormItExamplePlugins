FormItInterface = {};

FormItInterface.Platform = "Windows";
const WINDOWS = "Windows";
const WEB = "Web";

FormItInterface.CallMethod = function(method, args, callbackMethod)
{
    if(FormItInterface.Platform == WEB)
    {
        console.log("Calling method from frame: " + method + " args: " + args);
        //window.parent.FormItInterface.CallMethodInternal(method, args);
        var fullMethod = method + "("+args+");";
        eval(fullMethod);
    }
    else if(FormItInterface.Platform == WINDOWS)
    {
        window.NewFormItInterface.CallMethod(method, args, callbackMethod);
    }
    else
    {
        console.log("Platform has not been integrated yet!");
    }
}

//This should only be used in cases with which JS must be passed from one script console to another.
FormItInterface.CallMethodInternal = function(method, args)
{
    var fullMethod = method + "("+args+");";
    eval(fullMethod);
}

FormItInterface.AddEventListener = function(eventSignal, callbackMethod)
{
    if(FormItInterface.Platform == WINDOWS)
    {
        document.addEventListener(eventSignal, function () {
                new QWebChannel(qt.webChannelTransport, function (channel) {
                    window.NewFormItInterface = channel.objects.FormItInterface;
                    window.PluginDialog = channel.objects.PluginDialog;
                    
                    var fullMethod = callbackMethod + "();";
                    eval(fullMethod);
                });
            });
    }
    else if(FormItInterface.Platform == WEB)
    {
        document.addEventListener(eventSignal, callbackMethod);
    }
    else
    {
        console.log("Platform has not been integrated yet for event listeners.");
    }
}

FormItInterface.Connect = function(callbackMethod)
{
}