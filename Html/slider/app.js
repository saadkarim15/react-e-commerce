const slides = document.querySelector(".slide");
const sliderImg = document.querySelectorAll(".slide img");

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

let counter = 1;
const size = sliderImg[0].clientWidth;

slides.style.transform = "translate(" + -size * counter + "px)";

next.addEventListener("click", () => {
  if (counter >= sliderImg.length - 1) return;
  slides.style.transition = "0.4s ease-in-out";
  counter++;
  slides.style.transform = "translate(" + -size * counter + "px)";
});

prev.addEventListener("click", () => {
  if (counter <= 0) return;
  slides.style.transition = "0.4s ease-in-out";
  counter--;
  slides.style.transform = "translate(" + -size * counter + "px)";
});

slides.addEventListener("transitionend", () => {
  if (sliderImg[counter].id === "lastImg") {
    slides.style.transition = "none";
    counter = sliderImg.length - 2;
    slides.style.transform = "translate(" + -size * counter + "px)";
  }
  if (sliderImg[counter].id === "firstImg") {
    slides.style.transition = "none";
    counter = sliderImg.length - counter;
    slides.style.transform = "translate(" + -size * counter + "px)";
  }
});






if (slides[counter].id === "lastImg") {
  imgSlide.style.transition = "none";
  counter = slides.length - 2;
  slides.style.transform = `translate(${-slideWidth * counter})`;
}