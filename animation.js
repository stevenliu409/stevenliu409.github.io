// function scrollToAnchor(aid){
//     var aTag = $("a[name='"+ aid +"']");
//     $('html,body').animate({scrollTop: aTag.offset().top},'slow');
// }

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
  });
});
