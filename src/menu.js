

// Clean up the Website, make it blank.

// 12 Pizza Header, solely wood fired


// Make the Menu out of 5 items with the Pizza, description and price.


export function createMenu() {
    const content = document.querySelector("#content");
    

    const pageContent = document.createElement("div");
    pageContent.textContent = "Menu";
    pageContent.classList.add('page-content');
    content.appendChild(pageContent);
}