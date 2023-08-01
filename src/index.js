import { createHomePage } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

// Create Header Here
function createHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    header.classList.add('header');
    header.textContent = "Gomitolo's Pizza";
    content.appendChild(header);
}
createHeader();


// Create Tabs Here
function createTabs() {
    const content = document.querySelector("#content");
    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tab-container');


    const homeTab = document.createElement("div");
    homeTab.textContent = "Home";
    tabContainer.appendChild(homeTab);
    homeTab.addEventListener('click', () => {
        clearContent();
        createHomePage()
    });
    
    const menuTab = document.createElement("div");
    menuTab.textContent = "Menu";
    tabContainer.appendChild(menuTab);
    menuTab.addEventListener('click', () => {
        clearContent();
        createMenu();
    });
    
    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact";
    tabContainer.appendChild(contactTab);
    contactTab.addEventListener('click', () => {
        clearContent();
        createContact();
    });
    content.appendChild(tabContainer);
}
createTabs();

// Load the Home Page Here
createHomePage();

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}
