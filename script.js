const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});



ScrollReveal().reveal(".card_container h1", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});
ScrollReveal().reveal(".card_container .section_description", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".memory_image", {
    ...scrollRevealOption,
    origin: "left",
    delay: 200,
});

ScrollReveal().reveal(".memory_image p", {
    ...scrollRevealOption,
    delay: 1000,
});