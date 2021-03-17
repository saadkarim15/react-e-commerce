/* ----------------------- CAROUSEL TOUCH SLIDER START ---------------------- */

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  hashNavigation: true,
  spaceBetween: 0,
  updateOnWindowResize: true,
  grabCursor: true,
  followFinger: true,
  allowTouchMove: true,
  resistance: true,
  resistanceRatio: 0.85,
  preloadImages: true,
  updateOnImagesReady: true,
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: ".fa-angle-down",
    prevEl: ".fa-angle-up",
  },
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  mousewheel: {
    invert: true,
  },

  hashNavigation: {
    replaceState: true,
  },
});

/* ---------------------- CAROUSEL TOUCH SLIDER FINISH ---------------------- */
