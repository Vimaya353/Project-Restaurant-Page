import loadHomepage from "./homepage.js";
import loadMenu from "./menu.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");

function clearContent() {
    content.innerHTML = "";
}

loadHomepage();

homeButton.addEventListener("click",()=> {
    clearContent();
    loadHomepage();
});

menuButton.addEventListener("click", ()=> {
    clearContent();
    loadMenu();
});