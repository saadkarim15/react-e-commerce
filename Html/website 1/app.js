/* ------------------------------ LOADER START ------------------------------ */

const body = document.querySelector("body");
const loaderContainer = document.querySelector(".loader-container");

function loaderFinish() {
  loaderContainer.style.display = "none";
  body.style.overflow = "visible";
  /* ------------------------------- INTRO START ------------------------------ */

  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 1});
  tl.fromTo(".swiper-description", {scale: 0}, {scale: 1, duration: 0.5});

  /* ------------------------------ INTRO FINISH ------------------------------ */
}

/* ----------------------------- LOADER FINISH ----------------------------- */

/* ------------------------- NAVBAR ANIMATION START ------------------------ */
const navContainer = document.querySelector(".nav-container");

window.addEventListener("scroll", () => {
  navContainer.classList.toggle("sticky", window.scrollY > 50);
});

/* ------------------------ HAMBURGER ANIMATION START ----------------------- */

function theHamburger() {
  const hamburger = document.querySelector(".hamburger");
  const firstLine = document.querySelector(".firstLine");
  const secondLine = document.querySelector(".secondLine");
  const thirdLine = document.querySelector(".thirdLine");
  const ulHolder = document.querySelector(".ul-holder");

  hamburger.addEventListener("click", () => {
    firstLine.classList.toggle("animate-firstLine");
    secondLine.classList.toggle("animate-secondLine");
    thirdLine.classList.toggle("animate-thirdLine");
    hamburger.classList.toggle("fade-out-nav");
    ulHolder.classList.toggle("fade-out-nav");
  });
}

theHamburger();

/* ----------------------- HAMBURGER ANIMATION FINISH ----------------------- */

/* ------------------------- NAVBAR ANIMATION FINISH ------------------------ */

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
  direction: "horizontal",
  pagination: {
    enabled: true,
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
    bulletElement: "span",
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  navigation: {
    nextEl: ".fa-angle-right",
    prevEl: ".fa-angle-left",
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  hashNavigation: {
    replaceState: true,
  },
});

/* ---------------------- CAROUSEL TOUCH SLIDER FINISH ---------------------- */

/* --------------------------- OFFER TIMER START --------------------------- */

// Setup End Date for Countdown (getTime == Time in Milleseconds)
let launchDate = new Date("September 28, 2020 12:00:00").getTime();

// Setup Timer to tick every 1 second
let timer = setInterval(tick, 1000);

function tick() {
  // Get current time
  let now = new Date().getTime();
  // Get the difference in time to get time left until reaches 0
  let t = launchDate - now;

  // Check if time is above 0
  if (t > 0) {
    // Setup Days, hours, seconds and minutes
    // Algorithm to calculate days...
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    // prefix any number below 10 with a "0" E.g. 1 = 01
    if (days < 10) {
      days = "0" + days;
    }

    // Algorithm to calculate hours
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours < 10) {
      hours = "0" + hours;
    }

    // Algorithm to calculate minutes
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    if (mins < 10) {
      mins = "0" + mins;
    }

    // Algorithm to calc seconds
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 10) {
      secs = "0" + secs;
    }

    // Create Time String
    let time = `<span>${days}</span> : <span>${hours}</span> : <span>${mins}</span> : <span>${secs}</span>`;

    // Set time on document
    document.querySelector(".countdown").innerHTML = `<h2>${time}</h2>`;
  }
}
/* --------------------------- OFFER TIMER FINISH --------------------------- */

/* ---------------------- SHOPPING ITEMS SECTION START ---------------------- */

/* --------------------------- PRODUCT CARD START --------------------------- */

function splitScreen() {
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: "180%",
    triggerElement: ".sticky-sidebar-container",
    triggerHook: 0,
  })
    .setPin(".sticky-sidebar-container")
    .addTo(controller);
}

splitScreen();

/* --------------------------- PRODUCT CARD FINISH -------------------------- */

/* ----------------------- PRODUCT CARD CATEGORY START ---------------------- */

function productcardCategory() {
  const categories = document.querySelectorAll(".card-category-name span");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      categories.forEach((categoriyOn) =>
        categoriyOn.classList.remove("active-category")
      );
      category.classList.add("active-category");
    });
  });
}

productcardCategory();

/* ---------------------- PRODUCT CARD CATEGORY FINISH ---------------------- */

/* ---------------------- SHOPPING ITEMS SECTION FINISH --------------------- */
