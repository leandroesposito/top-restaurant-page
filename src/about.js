import { createDiv } from "./home.js";

function createAboutSection(section) {
    const container = createDiv("section-container");

    const titleContainer = createDiv("title-container");
    const subtitleContainer = createDiv("subtitle-container");
    const contentContainer = createDiv("content-container");

    titleContainer.textContent = section.title;
    subtitleContainer.textContent = section.subtitle;
    contentContainer.textContent = section.content;

    container.appendChild(titleContainer);
    container.appendChild(subtitleContainer);
    container.appendChild(contentContainer);

    return container;
}

const sections = [
    // {
    //     title: "Introduction",
    //     subtitle: "Welcome to The Whimsical Fork!",
    //     content: "At The Whimsical Fork, we believe that dining is not just about food; it's an experience that engages all the senses. Our mission is to create a joyful atmosphere where creativity and flavor come together to delight our guests.",
    // },
    {
        title: "Our Story",
        subtitle: "A Journey of Flavor and Imagination",
        content: "Founded in [Year], The Whimsical Fork began as a dream of our head chef, [Chef's Name], who wanted to bring a unique culinary experience to the heart of downtown. Inspired by global cuisines and local ingredients, our menu reflects a passion for innovation and a love for food. From our humble beginnings to becoming a beloved local gem, we are proud to share our journey with you.",
    },
    {
        title: "Our Philosophy",
        subtitle: "Food as Art",
        content: "We believe that every dish is a canvas, and our chefs are the artists.At The Whimsical Fork, we prioritize fresh, locally sourced ingredients and aim to create dishes that are not only delicious but also visually stunning.Our philosophy is simple: to surprise and delight our guests with every bite, making each visit a memorable experience.",
    },
    {
        title: "Meet the Team",
        subtitle: "The Heart of The Whimsical Fork",
        content: "Our talented team is the backbone of our restaurant.From our skilled chefs who craft each dish with care to our friendly staff who ensure you feel at home, every member of our team is dedicated to providing exceptional service.Meet our head chef, [Chef's Name], and the rest of our culinary team who bring their passion and creativity to the kitchen every day.",
    },
    {
        title: "Community Involvement",
        subtitle: "Giving Back to Our Community",
        content: "At The Whimsical Fork, we believe in the importance of community.We actively participate in local events, support local farmers, and contribute to various charitable initiatives.We are committed to making a positive impact in our community and fostering connections through food.",
    },
    {
        title: "Join Us",
        subtitle: "Become Part of Our Whimsical Family",
        content: "We invite you to join us at The Whimsical Fork for a dining experience that celebrates creativity and flavor.Whether you're here for a special occasion or a casual meal, we look forward to welcoming you into our whimsical world. Come and discover the magic of food with us!",
    },
]

export default function createAbout() {
    const aboutFragment = document.createDocumentFragment();

    const tabHeader = createDiv("tab-header");
    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to The Whimsical Fork!";
    tabHeader.appendChild(h1);
    aboutFragment.appendChild(tabHeader);

    const tabDescription = createDiv("tab-description");
    const h2 = document.createElement("h2");
    h2.textContent = "At The Whimsical Fork, we believe that dining is not just about food; it's an experience that engages all the senses. Our mission is to create a joyful atmosphere where creativity and flavor come together to delight our guests.";
    tabDescription.appendChild(h2);

    aboutFragment.appendChild(tabDescription);

    const sectionsContainer = createDiv("about-container");

    sections.forEach((section) => {
        const itemContainer = createAboutSection(section);

        sectionsContainer.appendChild(itemContainer);
    })

    aboutFragment.appendChild(sectionsContainer);

    return aboutFragment;

};