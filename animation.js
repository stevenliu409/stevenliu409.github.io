$(document).ready(function() {

  // Back-to-top button scrolling animation javascript

    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });

    $("#back-to-top a").click(function(event) {

      $('html, body').stop().animate({scrollTop:0}, 500);

      // This prevents the default action of the anchor tag to be called.
      //  Can be interchanged with event.preventDefault()
      return false;
    });


    // Navbar scrolling animation javascript
    $("#navbar a").click(function(event) {

      // else do the scroll animation
      var link = $(event.target).attr("href");
      var jumpToTag = $(link);

      $('html,body').stop().animate({scrollTop: jumpToTag.offset().top}, 500);
      return false;
    });

    $('#fullpage').fullpage({
      loopTop: true,
      loopBottom: true,
      scrollBar: true
    });
});
