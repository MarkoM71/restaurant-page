


// Clean up the Website, make it blank.

// Add Picture Here

// Add Content on how Great the Pizzeria is

// Hours

export function createHomePage() {
    const content = document.querySelector("#content");
    

    const pageContent = document.createElement("div");
    pageContent.textContent = "Best Pizza In Town!";
    pageContent.classList.add('page-content');
    pageContent.classList.add('homeStyle')
    content.appendChild(pageContent);
}







