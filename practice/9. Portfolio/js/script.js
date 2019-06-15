scrollHandler()
$(window).on('scroll', scrollHandler);

$('.menu-right button').on('click', sectionScroll)

// Section Scroll
function sectionScroll() {
    var sectionClass = $('.' + event.target.innerText.toLowerCase());
    // 클릭한 버튼에 해당되는 section class명

    $('html, body').animate({
        scrollTop: sectionClass.position().top
    }, 1000);
}

// FIXME: answer
// $('.menu-right button').on('click', function () {
//     var id = $(this).attr('id');
//     if (id == "about-btn") {
//         $('html, body').animate({
//             scrollTop: $('.about').position().top
//         }, 1000);
//     } else if (id == "contact-btn") {
//         $('html, body').animate({
//             scrollTop: $('.contact').position().top
//         }, 1000);
//     }
// })



// Scroll Handler 함수 
//(font color 변경, skill animation, section contents)
function scrollHandler() {
    var scrollPosition = $(window).scrollTop()

    //// font color 변경
    if (scrollPosition >= $('.about').position().top) {
        $('.menu-right button').css('color', '#4A4A4A');

        //// skill animation
        $('.skill').each(function () {
            var t = $(this),
                percentage = t.find('.percentage').text();

            t.find('.inner-bar').animate({
                width: percentage
            }, 1500);
        });
    } else {
        $('.menu-right button').css('color', 'white');
    }

    //// section contents
    $('section').each(function () {
        var t = $(this)
        if (scrollPosition >= t.position().top) {
            t.children('.vertical-center').animate({
                opacity: 1,
                top: '0px'
            }, 1000);
        }
    })
}