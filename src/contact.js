

export function createContact() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');

    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add('phone-number');
    phoneNumber.textContent = "Phone: 1-212-345-67890";
    contactInfo.appendChild(phoneNumber);

    const email = document.createElement('div');
    email.classList.add('email');
    email.textContent = "Email: gomitolo-pizza@gomitolo.com";
    contactInfo.appendChild(email);

    const address = document.createElement('div');
    address.classList.add('address');
    address.textContent = "Address: 50 Main St, Sunnyside, NY 92341";
    contactInfo.appendChild(address);

    pageContent.appendChild(contactInfo);
    content.appendChild(pageContent);
}