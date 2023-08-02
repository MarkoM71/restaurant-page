

export function createMenu() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = '12" Pizza: Solely Wood Fired'
    menu.appendChild(menuTitle);

    const cheese = document.createElement('div');
    const cheeseTitle = document.createElement('h3');
    cheeseTitle.textContent = "Cheese";
    cheese.appendChild(cheeseTitle);

    const cheeseDescription = document.createElement("p");
    cheeseDescription.textContent = "sauce, mozzarella";
    cheese.appendChild(cheeseDescription);

    const cheesePrice = document.createElement("p");
    cheesePrice.textContent = "$12";
    cheese.appendChild(cheesePrice);

    menu.appendChild(cheese);

    const pepperoni = document.createElement('div');
    const pepperoniTitle = document.createElement('h3');
    pepperoniTitle.textContent = "Pepperoni";
    pepperoni.appendChild(pepperoniTitle);

    const pepperoniDescription = document.createElement("p");
    pepperoniDescription.textContent = "sauce, mozzarella, pepperoni";
    pepperoni.appendChild(pepperoniDescription);

    const pepperoniPrice = document.createElement("p");
    pepperoniPrice.textContent = "$14";
    pepperoni.appendChild(pepperoniPrice);

    menu.appendChild(pepperoni);

    const margherita = document.createElement('div');
    const margheritaTitle = document.createElement('h3');
    margheritaTitle.textContent = "Margherita";
    margherita.appendChild(margheritaTitle);

    const margheritaDescription = document.createElement("p");
    margheritaDescription.textContent = "sauce, mozzarella, basil, olive oil";
    margherita.appendChild(margheritaDescription);

    const margheritaPrice = document.createElement("p");
    margheritaPrice.textContent = "$16";
    margherita.appendChild(margheritaPrice);

    menu.appendChild(margherita);

    const tartufata = document.createElement('div');
    const tartufataTitle = document.createElement('h3');
    tartufataTitle.textContent = "Tartufata";
    tartufata.appendChild(tartufataTitle);

    const tartufataDescription = document.createElement("p");
    tartufataDescription.textContent = "mozzarella, porcini mushroom, truffle oil";
    tartufata.appendChild(tartufataDescription);

    const tartufataPrice = document.createElement("p");
    tartufataPrice.textContent = "$18";
    tartufata.appendChild(tartufataPrice);

    menu.appendChild(tartufata);

    menu.appendChild(margherita);

    const diavola = document.createElement('div');
    const diavolaTitle = document.createElement('h3');
    diavolaTitle.textContent = "Diavola";
    diavola.appendChild(diavolaTitle);

    const diavolaDescription = document.createElement("p");
    diavolaDescription.textContent = "sauce, mozzarella, spicy salami";
    diavola.appendChild(diavolaDescription);

    const diavolaPrice = document.createElement("p");
    diavolaPrice.textContent = "$18";
    diavola.appendChild(diavolaPrice);

    menu.appendChild(diavola);

    pageContent.appendChild(menu);
    content.appendChild(pageContent);
}