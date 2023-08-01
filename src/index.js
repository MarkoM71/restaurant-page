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

// Load the Home Page Here
createHomePage();



// Add Tab Switching Functionality here.

