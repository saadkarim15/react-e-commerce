const paths = document.querySelectorAll(".checkbox svg path");

paths.forEach((path) => {
  console.log(path.getTotalLength());
  path.style.strokeDasharray = path.getTotalLength();
  path.style.strokeDashoffset = "0";
});
