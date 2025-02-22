import { createDiv } from "./home.js";

function createMenuItem(menuItem) {
    const container = createDiv("menu-dish");
    const nameContainer = createDiv("dish-name");
    const descriptionContainer = createDiv("dish-description");
    const priceContainer = createDiv("dish-price");

    nameContainer.textContent = menuItem.name;
    descriptionContainer.textContent = menuItem.description;
    priceContainer.textContent = menuItem.price;

    container.appendChild(nameContainer);
    container.appendChild(descriptionContainer);
    container.appendChild(priceContainer);

    return container;
}

const menuItems = [
    {
        name: "Spicy Mango Tacos",
        description: "Soft corn tortillas filled with grilled shrimp, fresh mango salsa, and a hint of jalapeño.Topped with a zesty lime crema and served with a side of tortilla chips.A tropical twist on a classic favorite!",
        price: 12.99,
    },
    {
        name: "Truffle Risotto",
        description: "Creamy Arborio rice cooked to perfection, infused with truffle oil and topped with wild mushrooms, parmesan shavings, and a sprinkle of fresh herbs.Served with a side of garlic bread for the ultimate indulgence.",
        price: 18.99,
    },
    {
        name: "Chocolate Lava Cake",
        description: "Decadent molten chocolate cake with a gooey center, served warm with a scoop of vanilla bean ice cream and a drizzle of raspberry coulis.Finished with a dusting of powdered sugar and fresh berries.",
        price: 8.99,
    },
    {
        name: "Mediterranean Quinoa Salad",
        description: "A refreshing salad featuring fluffy quinoa, cherry tomatoes, cucumber, red onion, Kalamata olives, and feta cheese, all tossed in a lemon - oregano vinaigrette.Perfect as a light lunch or a side dish.",
        price: 10.99,
    },
    {
        name: "Herb - Crusted Salmon",
        description: "Pan - seared salmon fillet coated with a blend of fresh herbs and breadcrumbs, served on a bed of sautéed spinach and garlic mashed potatoes.Drizzled with a lemon - dill sauce for a burst of flavor.",
        price: 22.99,
    },
    {
        name: "Roasted Vegetable Flatbread",
        description: "A crispy flatbread topped with a medley of roasted seasonal vegetables, goat cheese, and a balsamic glaze.Served with a side of mixed greens for a delightful vegetarian option.",
        price: 11.99,
    },
]

const sectionDescription = 'These dishes provide a variety of flavors and options for your menu, appealing to different tastes and dietary preferences while maintaining the whimsical and creative spirit of "The Whimsical Fork."';

export default function createMenu() {
    const menuFragment = document.createDocumentFragment();

    const tabHeader = createDiv("tab-header");
    const h1 = document.createElement("h1");
    h1.textContent = "A Culinary Adventure Awaits!";
    tabHeader.appendChild(h1);
    menuFragment.appendChild(tabHeader);


    const tabDescription = createDiv("tab-description");
    const h2 = document.createElement("h2");
    h2.textContent = sectionDescription;
    tabDescription.appendChild(h2);

    menuFragment.appendChild(tabDescription);

    const menuContainer = createDiv("menu-container");

    menuItems.forEach((menuItem) => {
        const itemContainer = createMenuItem(menuItem);

        menuContainer.appendChild(itemContainer);
    })

    menuFragment.appendChild(menuContainer);

    return menuFragment;
}