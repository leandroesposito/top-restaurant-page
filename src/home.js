export function createDiv(...classes) {
    const newDiv = document.createElement("div");

    classes.forEach(c => newDiv.classList.add(c));

    return newDiv;
}

function createSectionTitle(title) {
    const newDiv = createDiv("section-title");
    newDiv.textContent = title;
    return newDiv;
}

function createSectionContent() {
    return createDiv("section-content");
}

function createItemContainer(containerName, field1, field2) {
    const mainContainer = createDiv(containerName);
    const field1Container = createDiv(field1.name);
    const field2Container = createDiv(field2.name);

    field1Container.textContent = field1.value;
    field2Container.textContent = field2.value;

    mainContainer.appendChild(field1Container);
    mainContainer.appendChild(field2Container);

    return mainContainer;
}

export default function createHome() {
    const homeFragment = document.createDocumentFragment();

    const contentHeader = createDiv("content-header");
    const h1 = document.createElement("h1");
    h1.textContent = "Where Creativity Meets Flavor!";
    contentHeader.appendChild(h1);
    homeFragment.appendChild(contentHeader);

    const actions = createDiv("section", "actions");
    const reserveButton = document.createElement("button");
    reserveButton.textContent = "Reserve yout table";
    actions.appendChild(reserveButton);
    const exploreButton = document.createElement("button");
    exploreButton.textContent = "Explore our Menu";
    actions.appendChild(exploreButton);

    homeFragment.appendChild(actions);

    const dishesSection = createDiv("section", "dishes");
    const dishesTitle = createSectionTitle("Chef's Specials")
    dishesSection.appendChild(dishesTitle);

    const dishesContent = createSectionContent();

    const dishes = [
        {
            name: "Spicy Mango Tacos",
            description: "Soft corn tortillas filled with grilled shrimp, fresh mango salsa, and a hint of jalapeño. Atropical twist on a classic favorite!",
        },
        {
            name: "Truffle Risotto",
            description: "Creamy Arborio rice cooked to perfection, infused with truffle oil and topped with wild mushrooms and parmesan shavings.",
        },
        {
            name: "Chocolate Lava Cake",
            description: "Decadent molten chocolate cake served with vanilla bean ice cream and a drizzle of raspberry coulis.",
        },
    ];

    dishes.forEach((dish) => {
        const dishDiv = createItemContainer(
            "dish-container",
            { name: "dish-name", value: dish.name },
            { name: "dish-description", value: dish.description }
        );
        dishesContent.appendChild(dishDiv);
    });
    dishesSection.appendChild(dishesContent);
    homeFragment.appendChild(dishesSection);

    const testimonialsSection = createDiv("section", "testimonials");
    const testimonialsTitle = createSectionTitle("What Our Guests Are Saying");
    testimonialsSection.appendChild(testimonialsTitle);

    const testimonialsContent = createSectionContent();

    const testimonials = [
        {
            content: "The Whimsical Fork is a culinary adventure! Every dish is a masterpiece.",
            name: "Sarah J.",
        },
        {
            content: "A delightful atmosphere and incredible flavors. I can't wait to come back!",
            name: "Mark T.",
        },
        {
            content: "The best brunch spot in town! The creativity in the dishes is unmatched.",
            name: "Emily R.",
        },
    ];

    testimonials.forEach((testimonial) => {
        const testimonialDiv = createItemContainer(
            "testimonial",
            { name: "testimonial-content", value: testimonial.content },
            { name: "testimonial-name", value: testimonial.name }
        );
        testimonialsContent.appendChild(testimonialDiv);
    });
    testimonialsSection.appendChild(testimonialsContent);
    homeFragment.appendChild(testimonialsSection);

    const locationSection = createDiv("section", "location");
    const locationTitle = createSectionTitle("Visit Us");
    locationSection.appendChild(locationTitle);

    const locationContent = createSectionContent();
    const addressContainer = createDiv("address");
    addressContainer.textContent = "123 Whimsy Lane, Downtown City, State, ZIP";
    locationContent.appendChild(addressContainer);

    const hoursContainer = createDiv("hours");

    const hours = [
        {
            days: "Monday - Thursday",
            hour: "11 AM - 10 PM",
        },
        {
            days: "Friday - Saturday",
            hour: "11 AM - 11 PM",
        },
        {
            days: "Sunday",
            hour: "10 AM - 9 PM",
        },
    ];

    hours.forEach((hour) => {
        const hourDiv = createItemContainer(
            "hour-container",
            { name: "days", value: hour.days },
            { name: "hour", value: hour.hour }
        );
        hoursContainer.appendChild(hourDiv);
    });
    locationContent.appendChild(hoursContainer);
    locationSection.appendChild(locationContent);
    homeFragment.appendChild(locationSection);

    return homeFragment;
}