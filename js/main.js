$(document).ready(function () {
  /* ************************************ Fixed Header ************************************ */
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /************************************ Menu ************************************/
  if ($(window).width() <= 991) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /* ~~~~~~~~~~~~~~~ States Counter ~~~~~~~~~~~~~~~ */
  var a = 0;
  $(window).scroll(function () {
    if (
      a == 0 &&
      $(this).scrollTop() >= $(".statistics-section").offset().top - 500
    ) {
      $(".statistic-value span").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1000,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
      a++;
    }
  });
  /************************************ Projects Sliders ************************************/
  var allProjectsSwiper = new Swiper(".all-slider .swiper", {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".all-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  var slides = document.getElementsByClassName("project-slider");
  for (var i = 0; i < slides.length; i++) {
    var projectSwiper = new Swiper(".cat" + i + "-slider .swiper", {
      loop: true,
      pagination: {
        el: ".cat" + i + "-slider .swiper-pagination",
        clickable: true,
      },
      on: {
        init: function (swiper) {
          lazyLoad();
        },
      },
    });
  }

  /************************************ Clients Slider ************************************/
  var clientsSwiper = new Swiper(".clients-cont .swiper", {
    loop: true,
    pagination: {
      el: ".clients-cont .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
        allowTouchMove: true,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
        allowTouchMove: true,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
        allowTouchMove: false,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 26,
        allowTouchMove: false,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
});
