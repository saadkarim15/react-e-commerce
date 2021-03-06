function animateForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if (input.type == "text" && validateForm(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type == "email" && validateEmail(input)) {
        nextSlide(parent, nextForm);
      } else if (input.type == "password" && validateForm(input)) {
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "error 0.5s ease-in-out";
      }
      parent.addEventListener("animationend", () => {
        parent.style.animation = "";
      });
    });
  });
}

function validateForm(user) {
  if (user.value.length < 5) {
    document.querySelector(".wrong").textContent = "Not enough character";
    error("#ff414d");
  } else {
    error("#91d18b");
    document.querySelector(".wrong").textContent = "";
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (validation.test(email.value)) {
    document.querySelector(".wrong").textContent = "";
    error("#91d18b");
    return true;
  } else {
    error("#ff414d");
    document.querySelector(".wrong").textContent = "Write correct email";
  }
}

function error(color) {
  document.body.style.backgroundColor = color;
}

function nextSlide(parent, nextForm) {
  parent.classList.add("complete");
  parent.classList.remove("uncompleted");
  nextForm.classList.add("uncompleted");
}

animateForm();