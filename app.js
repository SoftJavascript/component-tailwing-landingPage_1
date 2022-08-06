const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
const iconToggle = document.querySelector(".icon-toggle");
const toggleAndClose = document.querySelector(".toggle-close");
const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle("hidden"));

iconToggle.addEventListener("click", toggleMenu)
toggleAndClose.addEventListener("click", toggleMenu)