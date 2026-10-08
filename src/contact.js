function loadContact() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const message = document.createElement("p");
    message.textContent =
        "We would love to hear from you. Contact us for reservations or any questions.";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +94 77 123 4567";

    const email = document.createElement("p");
    email.textContent = "Email: info@grandtable.com";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Main Street, Colombo";

    const openingHours = document.createElement("p");
    openingHours.textContent =
        "Opening Hours: Monday - Sunday, 10:00 AM - 10:00 PM";

    content.appendChild(heading);
    content.appendChild(message);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(address);
    content.appendChild(openingHours);
}

export default loadContact;