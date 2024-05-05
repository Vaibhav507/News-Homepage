const menu = document.querySelector(".menu-icon")
const off_screen = document.querySelector(".off-screen-menu")

menu.addEventListener("click", () => {
    off_screen.classList.toggle('active');
    menu.classList.toggle('active');
})