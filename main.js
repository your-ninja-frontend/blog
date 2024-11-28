import "/styles/index.scss";

window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const buttonMenu = header.querySelector(".button-menu");

  buttonMenu.addEventListener("click", () => {
    buttonMenu.classList.toggle("active");
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) {
      nav.classList.toggle("visible");
    } else {
      setTimeout(() => {
        nav.classList.toggle("visible");
      }, 400);
    }
  });
});
