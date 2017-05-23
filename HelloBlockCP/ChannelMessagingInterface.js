FormItInterface = {};

const WINDOWS = "Windows";
const WEB = "Web";
FormItInterface.Platform = WINDOWS;

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
    console.log("FormItInterface.AddEventListener: " + eventSignal);
    if(FormItInterface.Platform == WINDOWS)
    {
        document.addEventListener(eventSignal, function () {
                console.log("new QWebChannel");
                new QWebChannel(qt.webChannelTransport, function (channel) {
                    window.NewFormItInterface = channel.objects.FormItInterface;
                    window.PluginDialog = channel.objects.PluginDialog;
                    console.log("AFTER new QWebChannel");
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