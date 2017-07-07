FormItInterface = {};

const WINDOWS = "Windows";
const WEB = "Web";

if (window.location.href.indexOf("?Web")  > -1)
{
    FormItInterface.Platform = WEB;
}
else
{
    FormItInterface.Platform = WINDOWS;
    // Add the qwebchannel script only for Windows.
    document.write('<script type="text/javascript" src="qrc:///qtwebchannel/qwebchannel.js"></script>');
}

FormItInterface.CallMethod = function(method, args, callbackMethod)
{
  var stringArgs = JSON.stringify(args);
    if(FormItInterface.Platform == WEB)
    {
        //console.log("Calling method from frame: " + method + " args: " + args);
        var fullMethod = method + "("+ stringArgs +");";
        var result = undefined;
        try
        {
            result = eval(fullMethod);
        }
        catch(e)
        {
            console.log("Error: " + e);
            result = undefined;
        }
        if (callbackMethod)
        {
            callbackMethod(result);
        }
    }
    else if(FormItInterface.Platform == WINDOWS)
    {
        window.NewFormItInterface.CallMethod(method, stringArgs, callbackMethod);
    }
    else
    {
        console.log("Platform has not been integrated yet!");
    }
}

FormItInterface.AddEventListener = function(eventSignal, callbackMethod)
{
    //console.log(`---FormItInterface.AddEventListener: ${eventSignal}`);

    if(FormItInterface.Platform == WINDOWS)
    {
        document.addEventListener(eventSignal, function () {
                //console.log("new QWebChannel");
                new QWebChannel(qt.webChannelTransport, function (channel) {
                    window.NewFormItInterface = channel.objects.FormItInterface;
                    FormItInterface.FormItMessage = window.NewFormItInterface.FormItMessage;
                    FormItInterface.ConsoleLog = window.NewFormItInterface.ConsoleLog;
                    FormItInterface.SubscribeMessage = window.NewFormItInterface.SubscribeMessage;
                    window.PluginDialog = channel.objects.PluginDialog;
                    if (callbackMethod)
                    {
                        callbackMethod();
                    }
                });
            });
    }
    else
    {
        document.addEventListener(eventSignal, function () {
            if (callbackMethod)
            {
                callbackMethod();
            }
            });
    }
}
