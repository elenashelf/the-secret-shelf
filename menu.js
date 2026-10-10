
const menuHTML = `
<nav class="dropdown-menu">
    <button class="menu-button" type="button"
        aria-label="Apri il menu" aria-expanded="false">
        ☰
    </button>

    <div class="dropdown-content">
        <a href="index.html">Home</a>
        <a href="shelf.html">Shelf</a>
        <a href="rankings.html">The Rankings</a>
        <a href="book-talks.html">Book Talks</a>
        <a href="tbr.html">TBR List</a>
    </div>
</nav>
`;

const existingMenu = document.querySelector(".dropdown-menu");

if (existingMenu) {
    existingMenu.outerHTML = menuHTML;
} else {
    document.body.insertAdjacentHTML("afterbegin", menuHTML);
}

const menu = document.querySelector(".dropdown-menu");
const button = menu.querySelector(".menu-button");
const content = menu.querySelector(".dropdown-content");

content.style.display = "none";

button.addEventListener("click", () => {
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    button.setAttribute("aria-expanded", String(!isOpen));
});

document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) {
        content.style.display = "none";
        button.setAttribute("aria-expanded", "false");
    }
});

content.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        content.style.display = "none";
        button.setAttribute("aria-expanded", "false");
    });
});
