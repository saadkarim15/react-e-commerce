// random color generator

function getRandomColor() {
  const colors = [
    "b83b5e",
    "84a9ac",
    "3b6978",
    "ffeadb",
    "f7c5a8",
    "7fdbda",
    "ade498",
    "99b898",
    "feceab",
    "fbe2e5",
    "fabea7",
    "e0ece4",
    "f3e6e3",
    "776d8a",
    "8fc0a9",
    "faf3dd",
    "99f3bd",
    "28df99",
    "7fdbda",
    "ade498",
    "e84a5f",
    "ff847c",
    "f6efa6",
    "f6ab6c",
    "ffc7c7",
    "01a9b4",
    "bac964",
    "cfe5cf",
    "f6def6",
    "e7dfd5",
    "3b6978",
    "e0dede",
    "b6eb7a",
    "654062",
    "726a95",
    "f0a500",
    "fbc687",
    "b1b493",
    "4f8a8b",
    "efee9d",
    "d1eaa3",
    "abc2e8",
    "ff9a76",
    "ffc4a3",
    "bb596b",
    "ffcbcb",
    "aacfcf",
    "f8b24f",
    "f9c49a",
    "ad6989",
    "abf0e9",
    "fc8210",
    "fa9191",
    "fab7b7",
    "f5a8a8",
    "f1d1d1",
    "f3e1e1",
    "f1e3cb",
    "c3edea",
    "ffe0ac",
    "ffacb7",
    "ffc38b",
    "ff926b",
    "fff3cd",
    "4d3e3e",
    "888888",
    "ffe8df",
    "f0daa4",
    "eaac9d",
    "565d47",
    "af8baf",
    "16817a",
    "fdd998",
    "ffecc7",
    "543864",
    "6983aa",
  ];

  colorHash = "#";

  colorHash += colors[Math.floor(Math.random() * 77)];

  return colorHash;
}

//set the random color

const drumAreas = document.querySelectorAll(".drums div");

drumAreas.forEach((drum) => {
  drum.style.background = getRandomColor();
});

// Make the drum run
const theSounds = document.querySelectorAll("audio");

window.addEventListener("load", () => {
  drumAreas.forEach(function (drumArea, index) {
    drumArea.addEventListener("click", () => {
      theSounds[index].currentTime = "0";
        theSounds[index].play();
        console.clear();
      if (theSounds[index].play()) {
        const createDiv = document.createElement("div");
          createDiv.classList.add("ball");
          createDiv.style.background = getRandomColor();
        drumArea.appendChild(createDiv);
        createDiv.addEventListener("animationend", function () {
          drumArea.removeChild(this);
        });
      }
    });
  });
});
