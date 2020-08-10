import { FormIt } from "./FormIt.mod.js";

const FormItInterface = {};

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
    // document.write('<script type="text/javascript" src="qrc:///qtwebchannel/qwebchannel.js"></script>');
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
        if (window.CallMethodDirect) {
            window.CallMethodDirect(args, callbackMethod);
        }
    }
}

FormItInterface.PluginWindow = window;
//console.log(`---FormItInterface.AddEventListener: ${"DOMContentLoaded"}`);

if(FormItInterface.Platform == WINDOWS)
{
    const messageHandlers = new Map();
    let currMessageHandlerID = 0;
    let qtChannel = null;
    let SubscribeMessageInternal = function(msg, handler, id)
    {
        qtChannel.objects.FormItInterface.SubscribeMessage(msg);
        if (handler)
        {
            if (!messageHandlers.has(msg)) {
                messageHandlers.set(msg, new Map());
            }
            messageHandlers.get(msg).set(id, handler);
            if (!qtChannel.objects.FormItInterface.FormItMessage.connected)
            {
                var msgFunc = function(arg)
                {
                    var jsonArg = JSON.parse(arg);
                    if (messageHandlers.has(jsonArg.msg)) {
                        for (const [key, val] of messageHandlers.get(msg)) {
                            val(jsonArg.payload);
                        }
                    }
                };
                qtChannel.objects.FormItInterface.FormItMessage.connect(msgFunc);
                qtChannel.objects.FormItInterface.FormItMessage.connected = true;
            }
        }
    };

    let queuedMessageHandlers = [];
    FormItInterface.SubscribeMessage = (msg, handler) => {
        const id = currMessageHandlerID++;
        if (qtChannel) {
            SubscribeMessageInternal(msg, handler, id);
        } else {
            queuedMessageHandlers.push({
                msg: msg,
                handler: handler,
                id: id
            });
        }
        return id;
    };
    FormItInterface.EmitMessage = null;
    FormItInterface.ConsoleLog = console.log;
    FormItInterface.UnsubscribeMessage = (msg, id) => {
        if (id !== undefined && messageHandlers.get(msg) && messageHandlers.get(msg).get(id)) {
            messageHandlers.get(msg).delete(id);
        } else {
            messageHandlers.delete(msg);
            qtChannel.objects.FormItInterface.UnsubscribeMessage(msg);
        }
    };

    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "qrc:///qtwebchannel/qwebchannel.js";
    script.onload = () => {
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
            FormItInterface.CallMethod = function(method, args, callbackMethod)
            {
                var stringArgs = JSON.stringify(args);
                channel.objects.FormItInterface.CallMethod(method, stringArgs, callbackMethod);
            }
            window.CallMethodDirect = function(args, callbackMethod)
            {
                var stringArgs = JSON.stringify(args);
                channel.objects.FormItInterface.CallMethodDirect(stringArgs, callbackMethod);
            }
            window.PluginDialog = channel.objects.PluginDialog;

            qtChannel = channel;

            for (const h of queuedMessageHandlers) {
                SubscribeMessageInternal(h.msg, h.handler, h.id);
            }
        });
    };
    document.body.appendChild(script);
}
else
{
    let currMessageHandlerID = 0;
    const MessageHandlers = {};
    FormItInterface.ConsoleLog = console.log;
    let SubscribeMessageInternal = function(msg, handler, id)
    {
        // TODO need to store more information to properly "unsubscribe"
        if (!MessageHandlers[msg]) {
            MessageHandlers[msg] = {};
        }
        MessageHandlers[msg][id] = handler;

        //console.log("Subscribing to:" + msg + "\n");
        postRobot.send(parent, 'FormIt.PubSub', msg).then(function(event) {
            //console.log('Event Data: ', JSON.stringify(event.data));
            }).catch(function(err) {
                // Handle any errors that stopped our call from going through
                console.error(err);
        });
    };
    let queuedMessageHandlers = [];
    FormItInterface.SubscribeMessage = (msg, handler) => {
        const id = currMessageHandlerID++;
        if (window.postRobot) {
            SubscribeMessageInternal(msg, handler, id);
        } else {
            queuedMessageHandlers.push({
                msg: msg,
                handler: handler,
                id: id
            });
        }
    };

    FormItInterface.UnsubscribeMessage = function(msg, id) {
        if (id !== undefined && msg in MessageHandlers) {
            MessageHandlers[msg][id] = undefined;
        } else {
            MessageHandlers[msg] = undefined;
        }
    };

    // Add the post-robot script only for Web.
    if (!window.postRobot) {
        const script = document.createElement('script');
        script.src = "https://formit3d.github.io/FormItExamplePlugins/SharedPluginFiles/post-robot.js";
        script.type = 'text/javascript';
        script.onload = () => {
            postRobot.CONFIG.LOG_LEVEL = 'error';

            for (const h of queuedMessageHandlers) {
                SubscribeMessageInternal(h.msg, h.handler, h.id);
            }
            queuedMessageHandlers = [];

            if (!postRobot['FormItPluginMsgEventInitialized'])
            {
                postRobot.on('FormIt.PluginMsgEvent', event => {
                    //console.log('(Web side) msg: ', event.data);
                    var jsonMessage = JSON.parse(event.data);
                    const obj = MessageHandlers[jsonMessage.msg];
                    if (obj) {
                        for (const key in obj) {
                            if (obj[key])
                            {
                                obj[key](event.data);
                            }
                        }
                    }
                });
                postRobot.FormItPluginMsgEventInitialized = true;
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

export { FormItInterface };