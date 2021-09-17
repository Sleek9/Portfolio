const $openMenu = document.querySelector(".openMenu"); //Abrir menu
const $closeMenu = document.querySelector(".closeMenu"); //Cerrar menu
const $menu = document.querySelector(".mainMenu"); //Menu
const $menuButtons = document.querySelectorAll(".mainMenu li a");

$openMenu.addEventListener("click", () => {
  $menu.classList.add("showMenu");
  document.querySelector("html").classList.add("isMenuOpen");
});

$closeMenu.addEventListener("click", () => {
  $menu.classList.remove("showMenu");
  document.querySelector("html").classList.remove("isMenuOpen");
});

$menuButtons.forEach((el) => {
  el.addEventListener("click", () => {
    $menu.classList.remove("showMenu");
    document.querySelector("html").classList.remove("isMenuOpen");
    return;
  });
});
