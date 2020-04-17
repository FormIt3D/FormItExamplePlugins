if (typeof FormIt === 'undefined')
{
    FormIt = {};
}

FormIt.MessagingUtils = {};

FormIt.MessagingUtils.dipatchMessage = (channel, message) => {
    window.parent.postMessage({channel, message}, "*");
}

FormIt.MessagingUtils.listenForMessage = (handler) => {
    window.addEventListener('message', (message) => {
        if (message.data){
            handler(message.data);
        }
    });
}
