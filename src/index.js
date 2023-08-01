import { createHomePage } from "./home.js";

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
    content.appendChild(homeTab);

    const menuTab = document.createElement("div");
    menuTab.textContent = "Menu";
    content.appendChild(menuTab);

    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact";
    content.appendChild(contactTab);
}
createTabs();

// Load the Home Page Here
createHomePage();

// Add Tab Switching Functionality here.
function tabSwitch() {
    homeTab.addEventListener('click', createHomePage);
    
}

