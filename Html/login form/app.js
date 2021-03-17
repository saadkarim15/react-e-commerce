const email = document.querySelector(".email");
const password = document.querySelector(".password");
const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");

email.addEventListener("focus", () => {
  emailLabel.setAttribute(
    "style",
    "transform: translateY(-100%); transition: 0.3s ease-out; color: #000"
  );
});

email.addEventListener("focusout", () => {
  if (email.value.length == 0) {
    emailLabel.setAttribute(
      "style",
      "transform: translateY(0%); transition: 0.3s ease-out"
    );
  } else {
    emailLabel.setAttribute(
      "style",
      "transform: translateY(-100%); transition: 0.3s ease-out"
    );
  }
});

password.addEventListener("focus", () => {
  passwordLabel.setAttribute(
    "style",
    "transform: translateY(-100%); transition: 0.3s ease-out; color: #000"
  );
});

password.addEventListener("focusout", () => {
    if (password.value.length == 0) {
        passwordLabel.setAttribute(
          "style",
          "transform: translateY(0%); transition: 0.3s ease-out"
        );
      } else {
        passwordLabel.setAttribute(
          "style",
          "transform: translateY(-100%); transition: 0.3s ease-out"
        );
      }
});
