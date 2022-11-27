window.onscroll = function () {
  const nav = document.querySelector("nav");
  const fixNav = nav.offsetTop;

  if (window.pageYOffset > fixNav) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
};

const hamburger = document.querySelector("#hamburger");
const scrollMenu = document.querySelector("#scroll-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  scrollMenu.classList.toggle("hidden");
});
const toggle = document.querySelector("#toggle");
const html = document.querySelector("html");

toggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});
