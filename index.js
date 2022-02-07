const navBtn = document.querySelector(".header__nav-btn");
const navMenu = document.querySelector(".header__nav-items");
const navItems = document.querySelectorAll(".header__nav-item");
const body = document.querySelector("body");

navBtn.addEventListener("click", () => {
  navMenu.classList.toggle("on");
  body.classList.toggle("no-scroll");
  if (navMenu.classList.contains("on")) {
    navBtn.src = "./images/icon-close.svg";
  } else {
    navBtn.src = "./images/icon-hamburger.svg";
  }

  navItems.forEach((item) => {
    item.classList.toggle("on");
  });
});
