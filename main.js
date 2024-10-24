/* ---------- General components start ---------- */
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuClose = document.querySelector(".menu__close");
const menuShadow = document.querySelector(".menu--close");
/* ---------- General components start ---------- */

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
  menuShadow.classList.toggle("menu--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
  menuShadow.classList.remove("menu--open");
});
