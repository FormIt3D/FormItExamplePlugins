if (typeof FormIt === 'undefined')
{
    FormIt = {};
}

FormIt.MessagingUtils = {};

FormIt.MessagingUtils.dipatchMessage = (channel, message) => {
    //support for Windows
    if(FormItInterface.EmitMessage){
        FormItInterface.EmitMessage(JSON.stringify(message))
    }
    //support for Web
    else{
        window.parent.postMessage({channel, message}, "*");
    }
}

FormIt.MessagingUtils.listenForMessage = (handler) => {
    //support fow Windows
    window.FormIt.MessagingUtils.ReceiveMessage = (message) => {
        if (message){
            handler(message);
        }
    }

    //support for Web
    window.addEventListener('message', (message) => {
        if (message.data){
            handler(message.data);
        }
    });
}
