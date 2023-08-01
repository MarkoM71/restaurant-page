


// Clean up the Website, make it blank.

// Add Picture Here

// Add Content on how Great the Pizzeria is

// Hours

export function createHomePage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
                 

    const homeImage = document.createElement("img");
    homeImage.src = `images/pizza-restaraunt.jpg`
    homeImage.alt = `Pizza on Table`
    homeImage.classList.add('home-image');
    pageContent.appendChild(homeImage);

    const caption = document.createElement('div');
    caption.textContent = "Best Pizza In Town!";
    caption.classList.add('caption');
    pageContent.appendChild(caption);

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = `<h3>Hours</h3>
                        <p>Sunday: 12pm - 10pm</p>
                        <p>Monday: 12pm - 8pm</p>
                        <p>Tuesday: 12pm - 8pm</p>
                        <p>Wednesday: 12pm - 8pm</p>
                        <p>Thursday: 12pm - 10pm</p>
                        <p>Friday: 12pm - 10pm</p>
                        <p>Saturday: 12pm - 10pm</p>
                        `;
    
    pageContent.appendChild(hours);


    // pageContent.textContent = "Best Pizza In Town!";
    
    // pageContent.classList.add('homeStyle')
    
    content.appendChild(pageContent);


}







