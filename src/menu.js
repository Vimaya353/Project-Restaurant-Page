function loadMenu() {

    const content = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";

    const item1 = document.createElement("div");

    const item1Name =  document.createElement("h2");
    item1Name.textContent = "Classic Burger";

    const item1Description = document.createElement("p");
    item1Description.textContent = "Juicy beef burger with fresh vegetables and our special sauce.";

    item1.appendChild(item1Name);
    item1.appendChild(item1Description);

    const item2 = document.createElement("div");

    const item2Name = document.createElement("h2");
    item2Name.textContent = "Creamy Pasta";

    const item2Description = document.createElement("p");
    item2Description.textContent = "Delicious pasta served with a rich and creamy sauce.";

    item2.appendChild(item2Name);
    item2.appendChild(item2Description);

    content.appendChild(heading);
    content.appendChild(item1);
    content.appendChild(item2);

}

export default loadMenu;