
const Hamburger = document.getElementById("menu");
const SideMenu = document.getElementById("sidebar");

Hamburger.addEventListener('click', () => {
    SideMenu.classList.toggle("show")
});