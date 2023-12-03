const headerMobile = document.querySelector(".site-header__mobile");
const headerMobileItem = document.querySelectorAll(".site-header__mobile-item");
const menuBtn = document.querySelector(".site-header__menu-logo");
const closeBtn = document.querySelector(".site-header__close-logo");

menuBtn.onclick = () => {
  headerMobile.classList.add("site-header__mobile-key");
};
closeBtn.onclick = () => {
  headerMobile.classList.remove("site-header__mobile-key");
};
headerMobileItem.forEach((item) => {
  item.onclick = () => {
    headerMobile.classList.remove("site-header__mobile-key");
  };
});

const hero_title = document.querySelector(".hero__title");
hero_title.innerHTML = `
const <span>arrowF</span> = () => { <br />
  const <span>message</span> = <p class="hero__string">"Assalomu alaykum. Trafalgar saytiga hush kelibsiz! "</p> ; <br />
  return <span>message</span> ; <br />
}; <br />
console.log( <span>arrowF()</span> ) ;
`;
