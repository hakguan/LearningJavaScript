// playlist

scrollHandler()
$(window).on('scroll', scrollHandler);

function scrollHandler() {
    var bottomLine = $(window).height() + $(window).scrollTop();

    // each 반복문 사용
    $('.playlist').each(function () {
        var midLine = $(this).height() / 2 + $(this).position().top;

        if (midLine <= bottomLine) {
            $(this).animate({
                opacity: 1
            }, 1000);
        }
    })

    //for 반복문 사용

    //     for (var i = 1; i < 8; i++) {
    //         var nthChild = '.playlist:nth-child(' + i + ')';
    //         var nthChildMid = $(nthChild).height() / 2 + $(nthChild).position().top;

    //         if (bottomLine >= nthChildMid) {
    //             $(nthChild).animate({
    //                 opacity: 1
    //             });
    //         }
    //     }

    // go to top button
    if (bottomLine === $(document).height()) {
        $('.to-top-btn').fadeIn(500);
    } else {
        $('.to-top-btn').fadeOut(500);
    }

}

// go to top button 기능 추가
$('.to-top-btn').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})