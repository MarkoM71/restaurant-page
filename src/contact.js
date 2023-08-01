

// Clean up the Website, make it blank.

// Add contact information here

// Phone

// Email

// Address

// Maybe a picture

export function createContact() {
    const content = document.querySelector("#content");

    const pageContent = document.createElement("div");
    pageContent.textContent = "Contact";
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);
}