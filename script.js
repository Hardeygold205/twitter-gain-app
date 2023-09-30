
const Dark = document.getElementById("dark");
const Light = document.getElementById("light");
const Body = document.body;

Dark.addEventListener('click', () => {
    Body.classList.toggle("darkmode")
});
Light.addEventListener('click', () => {
    Body.classList.remove("darkmode")
});

const Hamburger = document.getElementById("menu");
const SideMenu = document.getElementById("sidebar");

Hamburger.addEventListener('click', () => {
    SideMenu.classList.toggle("show")
});