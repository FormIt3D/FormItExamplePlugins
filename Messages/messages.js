
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

// Create a new list item when clicking on the "Add" button
function newElement(inputValue) {
  var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("FormItMessagesUL").appendChild(li);
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  //li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function LoadMessages()
{
    //FormItInterface.ConsoleLog("LoadMessages called");
    FormItInterface.CallMethod("GetMessages", "", function(messages)
    {
        //FormItInterface.ConsoleLog("Num messages " + messages.length);
        var msgs = JSON.parse(messages);
        //FormItInterface.ConsoleLog("Num msgs " + msgs.length);
        for (var i = 0; i < msgs.length; i++)
        {
            //FormItInterface.ConsoleLog("GetMessage " + i + ": " + msgs[i]);
            newElement(msgs[i]);
        }
    });
}
