
if (typeof FormItExamplePlugins === 'undefined')
{
    FormItExamplePlugins = {};
    FormItExamplePlugins.Messages = {};
}

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
    //console.log("Inside MessagesPluginSubscribe.");

    if (typeof FormItExamplePlugins.Messages.MessagesPluginListener === 'undefined')
    {
        FormItExamplePlugins.Messages.MessagesPluginListener = {};
    }

    // Create a Message Listener that handles calling the subscribed message handlers.
    if(!(FormItExamplePlugins.Messages.MessagesPluginListener.hasOwnProperty("listener")))
    {
        FormItExamplePlugins.Messages.MessagesPluginListener.listener = FormIt.Messaging.NewMessageListener();
        //console.log("Creating FormItExamplePlugins.Messages.MessagesPluginListener.listener.");
    }

    // Assign the message handling function that will be called for the given message.
    FormItExamplePlugins.Messages.MessagesPluginListener.listener[msg] = function(msg)
    {
        console.log("(FormIt Side) msg: " + msg);
    };
    FormItExamplePlugins.Messages.MessagesPluginListener.listener.SubscribeMessage(msg);

    //console.log("FormIt Side, Subscribing to msg: " + msg);
}

function MessagesPluginUnsubscribeMessage(msg)
{
    //console.log("Inside MessagesPluginUnsubscribeMessage.");
    debugger;
    if (typeof FormItExamplePlugins.Messages.MessagesPluginListener != 'undefined' &&
        typeof FormItExamplePlugins.Messages.MessagesPluginListener.listener != 'undefined')
    {
        FormItExamplePlugins.Messages.MessagesPluginListener.listener.UnsubscribeMessage(msg);
        FormItExamplePlugins.Messages.MessagesPluginListener.listener[msg] = undefined;
    }
}


function MessagesPluginSubscribe(msg)
{
    //console.log("Inside MessagesPluginSubscribe.");

    FormItExamplePlugins.Messages.MessagesPluginListener = {};

    // Create a Message Listener that handles calling the subscribed message handlers.
    if(!(FormItExamplePlugins.Messages.MessagesPluginListener.hasOwnProperty("listener")))
    {
        FormItExamplePlugins.Messages.MessagesPluginListener.listener = FormIt.Messaging.NewMessageListener();
        //console.log("Creating FormItExamplePlugins.Messages.MessagesPluginListener.listener.");
    }

    // Assign the message handling function that will be called for the given message.
    FormItExamplePlugins.Messages.MessagesPluginListener.listener[msg] = function(msg)
    {
        console.log("(FormIt Side) msg: " + msg);
    };
    FormItExamplePlugins.Messages.MessagesPluginListener.listener.SubscribeMessage(msg);

    //console.log("FormIt Side, Subscribing to msg: " + msg);
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
