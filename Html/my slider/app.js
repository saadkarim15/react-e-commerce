const previews = document.querySelectorAll(".gallery img");
const model = document.querySelector(".model");
const bigImg = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    model.classList.add("open");

    const bigimgSrc = preview.getAttribute("data-original");
    bigImg.src = bigimgSrc;

    const altText = preview.alt;
    caption.textContent = altText
  });
});

model.addEventListener("click", (e) => {
  if (e.target.classList.contains("model")) {
    model.classList.remove("open");
  }
});
