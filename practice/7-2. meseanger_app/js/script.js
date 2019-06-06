$('#send').on('click', sendMessege);

function sendMessege() {
    var text = $('textarea').val();
    text = text.replace(/(?:\r\n|\r|\n)/g, '<br />')
    if (text) {
        $('.chatbox').append('<div class="my-bubble bubble"></div>');
        $('.my-bubble:last-child').html(text);
        $('textarea').val('')
    }
}