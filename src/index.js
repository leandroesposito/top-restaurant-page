import "./style.css";
import "./menu.css";
import createHome from "./home.js";
import createMenu from "./menu.js";

const contentLoader = (function () {
    function loadContent(container, contentGeneratorFunction) {
        container.innerHTML = "";
        container.appendChild(contentGeneratorFunction());
    };

    const contentContainer = document.querySelector("#content");
    const homeBtn = document.querySelector(".home-btn");
    const menuBtn = document.querySelector(".menu-btn");
    const aboutBtn = document.querySelector(".about-btn");

    homeBtn.addEventListener("click", () => loadContent(contentContainer, createHome));
    menuBtn.addEventListener("click", () => loadContent(contentContainer, createMenu));
    loadContent(contentContainer, createHome);
})();