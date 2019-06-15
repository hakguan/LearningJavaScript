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

    // FIXME: each
    // function scrollHandler() {
    //     var windowBottom = $(window).scrollTop() + $(window).height();

    //     $('.playlist').each(function() {
    //         var playlist = $(this);

    //         var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

    //         if (playlistHalf < windowBottom) {
    //             playlist.animate({'opacity' : '1'}, 1500);
    //         }
    //     })
    // }

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

    // FIXME: for 반복문
    // function scrollHandler() {
    //     var windowBottom = $(window).scrollTop() + $(window).height();

    //     var playlists = $('.playlist');
    //     for (var i = 0; i < playlists.length; i++) {
    //         var playlist = $(playlists[i]);
    //         var playlistHalf = playlist.position().top + playlist.outerHeight() / 2;

    //         if (playlistHalf < windowBottom) {
    //             playlist.animate({'opacity' : '1'}, 1500);
    //         }
    //     }
    // }

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