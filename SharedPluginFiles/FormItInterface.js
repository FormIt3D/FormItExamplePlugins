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
    if(FormItInterface.Platform == WEB)
    {
        postRobot.send(parent, 'FormIt.PluginMsg', {'method': method, 'args': args},{ timeout: 60000 }).then(function(event) {
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

FormItInterface.CallMethodDirect = function(args, callbackMethod)
{
    if(FormItInterface.Platform == WEB)
    {
        postRobot.send(parent, 'FormIt.PluginMsgDirect', {'args': args}).then(function(event) {
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
                FormItInterface.EmitMessage = channel.objects.FormItInterface.EmitMessage;

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
                            var msgFunc = function(arg)
                            {
                                var jsonArg = JSON.parse(arg);
                                channel.objects.FormItInterface.FormItMessage[jsonArg.msg](jsonArg.payload)
                            };
                            channel.objects.FormItInterface.FormItMessage.connect(msgFunc);
                            channel.objects.FormItInterface.FormItMessage.connected = true;
                        }
                    }
                }
                FormItInterface.UnsubscribeMessage = channel.objects.FormItInterface.UnsubscribeMessage;
                FormItInterface.CallMethod = function(method, args, callbackMethod)
                {
                    var stringArgs = JSON.stringify(args);

                    if (callbackMethod == null)
                    {
                        channel.objects.FormItInterface.CallMethod(method, stringArgs);
                    }
                    else
                    {
                        channel.objects.FormItInterface.CallMethod(method, stringArgs, callbackMethod);
                    }
                }
                FormItInterface.CallMethodDirect = function(args, callbackMethod)
                {
                    var stringArgs = JSON.stringify(args);
                    channel.objects.FormItInterface.CallMethodDirect(stringArgs, callbackMethod);
                }
                window.PluginDialog = channel.objects.PluginDialog;
                if (callbackMethod)
                {
                    callbackMethod();
                }
            });
        });
    } else
    {
        // Add the post-robot script only for Web.
        const script = document.createElement('script');
        script.src = "https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/post-robot.js";
        script.type = 'text/javascript';
        script.onload = () => {
            postRobot.CONFIG.LOG_LEVEL = 'error';
            postRobot.CONFIG.ACK_TIMEOUT = 60000;
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
        };
        script.onabort = () => { throw new Error((`load '${script.src}' - aborted`)) };
        script.onerror = () => { throw new Error((`load '${script.src}' - error`)) };
        document.head.appendChild(script);

        window.PluginDialog = window.PluginDialog || {};
        window.PluginDialog.Close = function(dialogNamespace) {
            FormItInterface.CallMethod(`${dialogNamespace}.Close`, "");
        };
    }
}
