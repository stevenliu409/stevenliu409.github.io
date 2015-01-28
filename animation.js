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
      stopScroll();

      $('html, body').animate({scrollTop:0}, 1500, continueScroll);

      // This prevents the default action of the anchor tag to be called.
      //  Can be interchanged with event.preventDefault()
      return false;

    });

    $("#navbar a").click(function(event) {
      stopScroll();

      // else do the scroll animation
      var link = $(event.target).attr("href");
      var jumpToTag = $(link);

      $('html,body').animate({scrollTop: jumpToTag.offset().top}, 800, continueScroll);
      return false;
    });
  });
});



// Helper Functions
// Taken from http://stackoverflow.com/a/18445654
function stopScroll() {
  // if user scrolls while animation, cancel the animation
  $("html, body").bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(){
    $('html, body').stop();
  });
}

function continueScroll() {
  $("html, body").unbind("scroll mousedown DOMMouseScroll mousewheel keyup");
}
