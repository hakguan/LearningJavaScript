// $('button').on('click', function () {
//     $('.card').removeClass('selected');

//     if (event.target.id == 'even-btn') {
//         $('.card').each(function () {
//             var cardNum = $(this).text();
//             if (cardNum % 2 === 0) {
//                 $(this).addClass('selected');
//             }
//         })
//     } else if (event.target.id == 'odd-btn') {
//         $('.card').each(function () {
//             var cardNum = $(this).text();
//             if (cardNum % 2 === 1) {
//                 $(this).addClass('selected');
//             }
//         })
//     }
// });


$('#even-btn').on('click', function () {
    $('.card').removeClass('selected');
    $('.card').each(function () {
        if (Number($(this).text()) % 2 === 0) {
            $(this).addClass('selected');
        }
    })
});

$('#odd-btn').on('click', function () {
    $('.card').removeClass('selected');
    $('.card').each(function () {
        if (Number($(this).text()) % 2 === 1) {
            $(this).addClass('selected');
        }
    })
});