import "./style.css";
import createHome from "./home.js";

const contentLoader = (function () {
    const contentContainer = document.querySelector("#content");

    contentContainer.appendChild(createHome());
})();