const body = document.querySelector("body");
const headerMobile = document.querySelector(".site-header__mobile");
const headerMobileItem = document.querySelectorAll(".site-header__mobile-item");
const menuBtn = document.querySelector(".site-header__menu-logo");
const closeBtn = document.querySelector(".site-header__close-logo");

menuBtn.onclick = () => {
  headerMobile.classList.add("site-header__mobile-key");
  body.style.overflowY = "hidden";
};
closeBtn.onclick = () => {
  headerMobile.classList.remove("site-header__mobile-key");
  body.style.overflowY = "scroll";
};
headerMobileItem.forEach((item) => {
  item.onclick = () => {
    headerMobile.classList.remove("site-header__mobile-key");
    body.style.overflowY = "scroll";
  };
});
