let links = document.querySelectorAll("nav a");
let sections = document.querySelectorAll(".section");
let home = document.querySelector(".home")


function showSection(el) {
    console.log(el);
    sections.forEach((section) => {
        section.classList.remove("active");
    });
    el.classList.add("active"); // Safe addition
}


links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let id = link.getAttribute("href");
        let section = document.querySelector(id);
        if (section) {
            showSection(section);
        }
    });
});

showSection(home)