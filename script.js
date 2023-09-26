
const Dark = document.getElementById("dark");
const Light = document.getElementById("light");
const Body = document.body;

Dark.addEventListener('click', () => {
    Body.classList.toggle("darkmode")
});
Light.addEventListener('click', () => {
    Body.classList.remove("darkmode")
});
