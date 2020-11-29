const navigationBar = document.getElementById("bars");
const navLinks = document.getElementById("nav-links");
navigationBar.addEventListener("click", navFunction);

function navFunction() {
    navigationBar.classList.toggle("animation");
    navLinks.classList.toggle("show-nav-links");
}