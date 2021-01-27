const menu = document.querySelector(".header-nav");
const btnMenu = document.querySelector(".btn-menu");
const closeMenu = document.querySelector(".close-menu");
const header = document.querySelector("header");
let mediaqueryList = window.matchMedia("(min-width: 426px)");
let ubcacionPrincipal = window.pageYOffset;

btnMenu.addEventListener("click", () => {
  menu.classList.add("showMenu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("showMenu");
});
if (mediaqueryList.matches) {
  window.onscroll = function () {
    let posScroll = window.pageYOffset;
    if (ubcacionPrincipal >= posScroll) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
    ubcacionPrincipal = posScroll;
  };
}
