
import "./styles.css";
import {homeTab} from "./pages/home.js";
import {aboutTab} from "./pages/about.js";
import {menuTab} from "./pages/menu.js";

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");
const divContainer = document.getElementById("content");


homeTab();
homeButton.onclick = (e) => {
    divContainer.replaceChildren();
    homeTab();
}
menuButton.onclick = (e) => {
    divContainer.replaceChildren();
    menuTab();
}
aboutButton.onclick = (e) => {
    divContainer.replaceChildren();
    aboutTab();
}

console.log("Hello watpack");

export {homeButton, menuButton, aboutButton, divContainer};