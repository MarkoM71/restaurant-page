import { createHomePage } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

// Create Header Here
function createHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.textContent = "Gomitolo's Pizza";
    content.appendChild(header);
}
createHeader();


// Create Tabs Here
function createTabs() {
    const content = document.querySelector("#content");

    const homeTab = document.createElement("div");
    homeTab.textContent = "Home";
    homeTab.addEventListener('click', createHomePage);
    content.appendChild(homeTab);

    const menuTab = document.createElement("div");
    menuTab.textContent = "Menu";
    menuTab.addEventListener('click', createMenu);
    content.appendChild(menuTab);

    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact";
    contactTab.addEventListener('click', createContact);
    content.appendChild(contactTab);
}
createTabs();

// Load the Home Page Here
createHomePage();
