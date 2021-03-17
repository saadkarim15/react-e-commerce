const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
  const active = document.querySelector(".active");
  active.classList.remove("active");
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    slides[0].classList.add("active");
  }

  setTimeout(() => active.classList.remove("active"));
};

const prevSlide = () => {
  const active = document.querySelector(".active");
  active.classList.remove("active");
  if (active.nextElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    slides[slides.length - 1].classList.add("active");
  }

  setTimeout(() => active.classList.remove("active"));
};

next.addEventListener("click", () => {
  nextSlide();
});

prev.addEventListener("click", () => {
  prevSlide();
});

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
