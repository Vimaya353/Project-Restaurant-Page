import restaurantImage from "./images/restaurant_img_1.jpg";

function loadHomepage() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "The Grand Table";

    const image = document.createElement("img");
    image.src = restaurantImage;
    image.alt = "Inside the Grand Table Restaurant ";

    const welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = "Welcome to The Grand Table";

    const description = document.createElement("p");
    description.textContent =
        "Enjoy delicious food made with fresh ingredients in a warm and comfortable atmosphere.";

    const restaurantInfo = document.createElement("p");
    restaurantInfo.textContent =
        "Whether you are joining us for lunch, dinner, or a special occasion, we are happy to serve you.";

    const openingHours = document.createElement("h2");
    openingHours.textContent = "Opening Hours";

    const hours = document.createElement("p");
    hours.textContent =
        "Monday - Sunday: 10:00 AM - 10:00 PM";

    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(welcomeMessage);
    content.appendChild(description);
    content.appendChild(restaurantInfo);
    content.appendChild(openingHours);
    content.appendChild(hours);
}

export default loadHomepage;