FormItInterface = {};

const WINDOWS = "Windows";
const WEB = "Web";

if (window.location.href.indexOf("?Web")  > -1)
{
    FormItInterface.Platform = WEB;
    // Add the post-robot script only for Web.
    document.write('<script type="text/javascript" src="../SharedPluginFiles/post-robot.js"></script>');
}
else
{
    FormItInterface.Platform = WINDOWS;
    // Add the qwebchannel script only for Windows.
    document.write('<script type="text/javascript" src="qrc:///qtwebchannel/qwebchannel.js"></script>');
}

FormItInterface.CallMethod = function(method, args, callbackMethod)
{
    if(FormItInterface.Platform == WEB)
    {
        postRobot.send(parent, 'FormIt.PluginMsg', {'method': method, 'args': args}).then(function(event) {
            //console.log('Event Data: ', JSON.stringify(event.data));
            if (callbackMethod)
            {
                callbackMethod(event.data);
            }
        }).catch(function(err) {
            // Handle any errors that stopped our call from going through            
            console.error(err);
        });
    }
    else if(FormItInterface.Platform == WINDOWS)
    {
        var stringArgs = JSON.stringify(args);
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
