(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {

      $(context).foundation();

      // smooth scroll for video anchor
      $('#homepage-bottom-link', context).bind('tap', function (e) {

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

    }
  };
})(jQuery, Drupal);
