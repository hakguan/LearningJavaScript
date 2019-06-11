$('#send').on('click', sendMessage);

function sendMessage() {
    var text = $('textarea').val();
    text = text.replace(/(?:\r\n|\r|\n)/g, '<br />')
    if (text) {
        $('.chatbox').append('<div class="my-bubble bubble">' + text + '</div>');
        $('textarea').val('')
    }
}