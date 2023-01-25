(function ($) {
  var BannerSlider = function () {
    $(".banner-slider .owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 1000,
      nav: true,
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    });
  };
  BannerSlider();
})(jQuery);
