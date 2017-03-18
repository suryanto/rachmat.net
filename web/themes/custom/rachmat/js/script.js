(function ($, Drupal) {
  Drupal.behaviors.myModuleBehavior = {
    attach: function (context, settings) {
     $(context).foundation();

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
