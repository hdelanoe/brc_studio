  // Preloader js    
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
  });

  (function ($) {
    'use strict';

    //  Search Form Open
    $('#searchOpen').on('click', function () {
      $('.search-wrapper').addClass('open');
    });
    $('#searchClose').on('click', function () {
      $('.search-wrapper').removeClass('open');
    });

    // featured post slider
    $('.featured-post-slider').slick({
      infinite: true,
      vertical: false,
      verticalSwiping: false,
      arrows: false,
      dots: false,
      autoplay: true,
      speed: 1000,
      responsive: [{
        breakpoint: 700,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }]
    });

    // venobox initialize
    $('.venobox').venobox();

  })(jQuery);