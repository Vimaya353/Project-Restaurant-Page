function loadHomepage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "The Grand Table";

    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent =
        "Welcome to The Grand Table! Enjoy delicious food made with fresh ingredients.";

    const description = document.createElement("p");
    description.textContent =
        "Our restaurant is the perfect place to enjoy great food and wonderful moments.";

    content.appendChild(heading);
    content.appendChild(welcomeMessage);
    content.appendChild(description);
}

export default loadHomepage;