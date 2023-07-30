$(document).ready(function () {
  lazyLoad();
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
  if ($(".statistics-section").length) {
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
  }
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
  var clientsSwiper = new Swiper(".clients-slider .swiper", {
    loop: true,
    pagination: {
      el: ".clients-slider .swiper-pagination",
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
  /************************************ Team Slider ************************************/
  var teamSwiper = new Swiper(".team-slider .swiper", {
    loop: true,
    pagination: {
      el: ".team-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Testimonials Slider ************************************/
  var testimonialsSwiper = new Swiper(".testimonials-slider .swiper", {
    loop: true,
    pagination: {
      el: ".testimonials-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  /************************************ Services Slider ************************************/
  var servicesSwiper = new Swiper(".services-slider .swiper", {
    loop: true,
    pagination: {
      el: ".services-slider .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  /************************************ mixitup ************************************/
  if ($("#project-cats").length) {
    var mixer = mixitup("#project-cats", {
      animation: {
        duration: 0,
        nudge: false,
        reverseOut: false,
        effects: "scale(0.01)",
      },
    });
  }
  /************************************ Project Imgs ************************************/
  var ProjectImgSwiper = new Swiper(".project-imgs-slider .swiper", {
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".project-imgs-slider .swiper-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ Project Imgs ************************************/
  $(".copy-btn").click(function () {
    var textToCopy = $(this).data("code");
    var tempTextarea = $("<textarea>");
    var confirmEle = $(
      `<span class='copied'>${
        document.dir == "rtl" ? "تم النسخ" : "copied"
      }</span>`
    );
    $("body").append(tempTextarea);
    $(confirmEle).insertAfter(".link-holder .text");
    tempTextarea.val(textToCopy).select();
    document.execCommand("copy");
    tempTextarea.remove();
    setTimeout(function () {
      confirmEle.remove();
    }, 2000);
  });
});
