/* ---------- General components start ---------- */
const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const menuClose = document.querySelector(".menu__close");
/* ---------- General components start ---------- */

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__list--open");
});

menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__list--open");
});
