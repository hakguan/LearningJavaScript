// 청기 내려
$('#btn1').on('click', blueDown);

function blueDown() {
    $('.blue').addClass('down');
    setTimeout(removeClass, 1000)
}

// 청기 내리지 말고 백기 내려
$('#btn2').on('click', whiteDown);

function whiteDown() {
    $('.white').addClass('down');
    setTimeout(removeClass, 1000)
}

// 점선 청기 내려
$('#btn3').on('click', dotBlueDown);

function dotBlueDown() {
    $('.blue.dot').addClass('down');
    setTimeout(removeClass, 1000)
}

// remove 'down' class
function removeClass() {
    $('.flag').removeClass('down');
}