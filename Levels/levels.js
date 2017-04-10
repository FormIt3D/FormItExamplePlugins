
// ---------------------------------------------------
// The following code is used by the HTML page.

// ---------------------------------------------------
// The following code runs in FormIt.
function GetMessages()
{
    return FormIt.Messaging.GetMessages();
}

function MessagesPluginSubscribe(msg)
{
    console.log("Inside MessagesPluginSubscribe.");
    
    MessagesPluginListener = {};
    MessagesPluginListener.MsgHandler = function(msg, payload) { console.log("(FormIt Side) msg: " + msg + " payload: " + payload); };

    if(!(MessagesPluginListener.hasOwnProperty("listener")))
    {
        MessagesPluginListener.listener = FormIt.Messaging.NewMessageListener();
        console.log("Creating MessagesPluginListener.listener.");
    }

    // Assign the msg handler
    MessagesPluginListener.listener[msg] = MessagesPluginListener.MsgHandler;
    MessagesPluginListener.listener.SubscribeMessage(msg);

    console.log("FormIt Side, Subscribing to msg: " + msg);
}
