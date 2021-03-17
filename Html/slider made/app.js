const plantSlider = document.querySelector(".plants-slider");
const plantSlides = document.querySelectorAll(".plant-slide");
const next = document.querySelector("#next-plant");
const prev = document.querySelector("#prev-plant");
const slideStyle = window.getComputedStyle(plantSlides[0]);
const marginNum =
  Number(slideStyle.marginLeft.replace("px", "")) +
  Number(slideStyle.marginRight.replace("px", ""));
let margin = marginNum;
let index = 0;
const size = plantSlides[0].clientWidth;
plantSlider.style.transform = `translate(${size * 1 + margin}px)`;

prev.addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

next.addEventListener("click", () => {
  nextSlide();
  resetTimer();
});
function prevSlide() {
  if (index === 0) {
    index = 0;
    margin = marginNum;
  } else {
    index--;
    index--;
    margin -= marginNum + marginNum;
    plantSlider.style.transform = `translate(${-size * index - margin}px)`;
    plantSlider.style.transition = "0.5s ease-in-out";
    index++;
    console.log(index);
    margin += marginNum;
    if (index < 1) {
      margin = marginNum;
    }
    console.log(margin);
  }
  changeSlide();
}

function nextSlide() {
  if (index == plantSlides.length - 1) {
    index = 0;
    margin = marginNum;
    plantSlider.style.transform = `translate(${size + margin}px)`;
  } else {
    plantSlider.style.transform = `translate(${-size * index}px)`;
    if (index >= 1) {
      plantSlider.style.transform = `translate(${-size * index - margin}px)`;
      margin += marginNum;
    }
    index++;
    plantSlider.style.transition = "0.5s ease-in-out";
  }
  changeSlide();
}
function changeSlide() {
  for (let i = 0; i < plantSlides.length; i++) {
    plantSlides[i].classList.remove("active");
    plantSlides[i].style.pointerEvents = "none";
  }
  plantSlides[index].classList.add("active");
  plantSlides[index].style.pointerEvents = "all";
}

function resetTimer() {
  // when click to indicator or controls button
  // stop timer
  clearInterval(timer);
  // then started again timer
  timer = setInterval(autoPlay, 8000);
}

function autoPlay() {
  nextSlide();
}

let timer = setInterval(autoPlay, 8000);

plantSlider.addEventListener("mouseover", () => {
  clearInterval(timer);
});

plantSlider.addEventListener("mouseout", () => {
  timer = setInterval(autoPlay, 8000);
});
