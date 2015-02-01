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
      stopScroll();

      $('html, body').animate({scrollTop:0}, 1500, continueScroll);

      // This prevents the default action of the anchor tag to be called.
      //  Can be interchanged with event.preventDefault()
      return false;
    });


    // Navbar scrolling animation javascript
    $("#navbar a").click(function(event) {
      stopScroll();

      // else do the scroll animation
      var link = $(event.target).attr("href");
      var jumpToTag = $(link);

      $('html,body').animate({scrollTop: jumpToTag.offset().top}, 800, continueScroll);
      return false;
    });

    $('#fullpage').fullpage({
      loopTop: true,
      loopBottom: true,
      scrollBar: true
    });

});

// Helper Functions
// Taken from http://stackoverflow.com/a/18445654
function stopScroll() {
  // if user scrolls while animation, cancel the animation
  $("html, body").bind("scroll mousedown wheel keyup", function(){
    $('html, body').stop();
  });
}

function continueScroll() {
  $("html, body").unbind("scroll mousedown wheel keyup");
}
