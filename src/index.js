import "./style.css";

import loadHomepage from "./homepage.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.querySelector("#content");

const homeButton = document.querySelector("#home-button");
const menuButton = document.querySelector("#menu-button");
const contactButton = document.querySelector("#contact-button");

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

contactButton.addEvenetListener("click", ()=> {
    clearContent();
    loadContact();
});