$("#button-about").click(function () {
    $('html, body').animate({
        scrollTop: $("#top-about").offset().top
    }, 2000);
    return false;
});
$("#button-cv").click(function () {
    $('html, body').animate({
        scrollTop: $("#top-cv").offset().top
    }, 2000);
    return false;
});
$("#button-portfolio").click(function () {
    $('html, body').animate({
        scrollTop: $("#top-portfolio").offset().top
    }, 2000);
    return false;
});
$("#button-contact").click(function () {
    $('html, body').animate({
        scrollTop: $("#top-contact").offset().top
    }, 2000);
    return false;
});




$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function () {
    $(".scroll").click(function () {
        $("html,body").animate({
            scrollTop: $(".thetop").offset().top
        }, "1000");
        return false
    })
})
