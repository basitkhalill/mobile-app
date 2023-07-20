const menuIcon = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-menu");
const nav = document.querySelector(".nav");

menuIcon.addEventListener("click", () => {
    nav.classList.add("show");
    menuIcon.style.display = "none"; // hide the menu icon
    closeIcon.style.display = "block"; // display the close icon
});

closeIcon.addEventListener("click", () => {
    nav.classList.remove("show");
    menuIcon.style.display = "block"; // display the menu icon
    closeIcon.style.display = "none"; // hide the close icon
});
