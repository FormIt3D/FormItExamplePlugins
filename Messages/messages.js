
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
    // The message handling function that will be called for the given message.
    MessagesPluginListener.MsgHandler = function(msg, payload) { console.log("(FormIt Side) msg: " + msg + " payload: " + payload); };

    // Create a Message Listener that handles calling the subscribed message handlers.
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
