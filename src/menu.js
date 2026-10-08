function loadMenu() {
    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const burger = document.createElement("div");

    const burgerName = document.createElement("h2");
    burgerName.textContent = "Classic Burger - Rs. 1,200";

    const burgerDescription = document.createElement("p");
    burgerDescription.textContent =
        "Juicy beef burger served with fresh vegetables, cheese, and our special sauce.";

    burger.appendChild(burgerName);
    burger.appendChild(burgerDescription);

    const pasta = document.createElement("div");

    const pastaName = document.createElement("h2");
    pastaName.textContent = "Creamy Pasta - Rs. 1,500";

    const pastaDescription = document.createElement("p");
    pastaDescription.textContent =
        "Fresh pasta served with a rich and creamy sauce and seasonal vegetables.";

    pasta.appendChild(pastaName);
    pasta.appendChild(pastaDescription);

    const pizza = document.createElement("div");

    const pizzaName = document.createElement("h2");
    pizzaName.textContent = "Garden Pizza - Rs. 1,800";

    const pizzaDescription = document.createElement("p");
    pizzaDescription.textContent =
        "Crispy pizza topped with fresh vegetables, mozzarella cheese, and herbs.";

    pizza.appendChild(pizzaName);
    pizza.appendChild(pizzaDescription);

    content.appendChild(heading);
    content.appendChild(burger);
    content.appendChild(pasta);
    content.appendChild(pizza);
}

export default loadMenu;