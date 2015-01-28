$(document).ready(function() {
  // hide #back-top first
  $("#back-to-top").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    $("#back-to-top a").click(function(event) {
      $('html, body').animate({scrollTop:0}, 1500);

      // This prevents the default action of the anchor tag to be called.
      //  Can be interchanged with event.preventDefault()
      return false;
    });

    $("#navbar a").click(function(event) {
      var link = $(event.target).attr("href");
      var jumpToTag = $(link);
      $('html,body').animate({scrollTop: jumpToTag.offset().top},800);
      return false;
    });
  });
});
