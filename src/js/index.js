
const btnMenu = document.querySelectorAll(".menu-btn");
const menu = document.getElementById("menu-js");

btnMenu.forEach(e => {
    e.addEventListener("click", () => {
        console.log("clixk")
        menu.classList.toggle("show");
    });
})