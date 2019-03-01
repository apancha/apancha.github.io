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


/* FORM CONTROLS */

$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
      // https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

      var messageAlert = "alert-success";
      var messageText =
        "Your message was sent, thank you. I will get back to you soon.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});

