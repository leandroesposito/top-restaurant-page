import "./style.css";
import createHome from "./home.js";

const contentLoader = (function () {
    function loadContent(container, contentGeneratorFunction) {
        container.innerHTML = "";
        container.appendChild(contentGeneratorFunction());
    };

    const contentContainer = document.querySelector("#content");

    loadContent(contentContainer, createHome);
})();