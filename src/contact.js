function loadContact() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "Phone: +94 77 123 4567";

    const email = document.createElement("p");
    email.textContent = "Email: info@grandtable.com";

    const address = document.createElement("p");
    address.textContent = "Address: 123 Main Street,Colombo";

    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(address);
}

export default loadContact;