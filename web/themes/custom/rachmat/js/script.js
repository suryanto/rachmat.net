jQuery(document).ready(function($){
      $('body').foundation();

      // smooth scroll for video anchor
      $('#homepage-bottom-link', 'body').bind('tap', function (e) {
        var $target = $($(this).attr('href'));

        $('html, body').animate({
          scrollTop: $target.offset().top
        }, 300);

        e.preventDefault();
      });


      // Stellar Parallax
      if ($.stellar != undefined) {
        $.stellar({
          horizontalScrolling: false,
          responsive: true
        });
      }

});
