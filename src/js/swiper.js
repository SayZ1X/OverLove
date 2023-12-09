new Swiper(".graphic-slider", {
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  spaceBetween: 41,

  initialSlide: 2,

  slidesPerView: 1,

  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    4500: {
      slidesPerView: 1000,
    },
    1057: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

new Swiper(".products-slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,

  effect: "fade",

  fadeEffect: {
    crossFade: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
});
