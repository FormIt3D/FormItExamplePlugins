FormItInterface = {};

const WINDOWS = "Windows";
const WEB = "Web";

if (window.location.href.indexOf("?Web")  > -1)
{
    FormItInterface.Platform = WEB;
    // Add the post-robot script only for Web.
    document.write('<script type="text/javascript" src="https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/post-robot.js"></script>');
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
    else
    {
        console.log("Platform has not been integrated yet!");
    }
}

//TODO(hauswij): Remove this once all the plugins are converted to use FormItInterface.Initialize.
FormItInterface.AddEventListener = function(eventSignal, callbackMethod)
{
    FormItInterface.Initialize(callbackMethod);
}

FormItInterface.Initialize = function(callbackMethod)
{
    FormItInterface.PluginWindow = window;
    //console.log(`---FormItInterface.AddEventListener: ${"DOMContentLoaded"}`);

    if(FormItInterface.Platform == WINDOWS)
    {
        document.addEventListener("DOMContentLoaded", function ()
        {
            //console.log("new QWebChannel");
            new QWebChannel(qt.webChannelTransport, function (channel)
            {
                // This will display the message in both the web debugger connected to the HTML UI
                // and the console in FormIt.
                FormItInterface.ConsoleLog = function(msg)
                {
                    console.log(msg);
                    channel.objects.FormItInterface.ConsoleLog(msg);
                }
                FormItInterface.SubscribeMessage = function(msg, handler)
                {
                    channel.objects.FormItInterface.SubscribeMessage(msg);
                    if (handler)
                    {
                        channel.objects.FormItInterface.FormItMessage[msg] = handler;
                        if (!channel.objects.FormItInterface.FormItMessage.connected)
                        {
                            channel.objects.FormItInterface.FormItMessage.connect(function(arg) {channel.objects.FormItInterface.FormItMessage[msg](arg)});
                            channel.objects.FormItInterface.FormItMessage.connected = true;
                        }
                    }
                }
                FormItInterface.UnsubscribeMessage = channel.objects.FormItInterface.UnsubscribeMessage;
                FormItInterface.CallMethod = function(method, args, callbackMethod)
                {
                    var stringArgs = JSON.stringify(args);
                    channel.objects.FormItInterface.CallMethod(method, stringArgs, callbackMethod);
                }
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
        postRobot.CONFIG.LOG_LEVEL = 'error';

        FormItInterface.ConsoleLog = console.log;

        FormItInterface.SubscribeMessage = function(msg, handler)
        {
            if (!FormItInterface.MessageHandlers)
            {
                FormItInterface.MessageHandlers = [];
            }
            FormItInterface.MessageHandlers[msg] = handler;
            //console.log("Subscribing to:" + msg + "\n");
            postRobot.send(parent, 'FormIt.PubSub', msg).then(function(event) {
                //console.log('Event Data: ', JSON.stringify(event.data));
                }).catch(function(err) {
                    // Handle any errors that stopped our call from going through
                    console.error(err);
                });
        };

        FormItInterface.UnsubscribeMessage = function(msg) { FormItInterface.MessageHandlers[msg] = undefined; };

        document.addEventListener("DOMContentLoaded", function () {

            if (!postRobot['FormItPluginMsgEventInitialized'])
                {
                    postRobot.on('FormIt.PluginMsgEvent',
                    function(event) {
                        //console.log('(Web side) msg: ', event.data);
                        var jsonMessage = JSON.parse(event.data);
                        var msgHandler = FormItInterface.MessageHandlers[jsonMessage.msg];
                        if (!!msgHandler)
                        {
                            msgHandler(event.data);
                        }
                    });
                    postRobot.FormItPluginMsgEventInitialized = true;
                }

            if (callbackMethod)
            {
                callbackMethod();
            }
        });
    }
}
