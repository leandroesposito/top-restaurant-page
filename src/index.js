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

    loadContent(contentContainer, createHome);
})();