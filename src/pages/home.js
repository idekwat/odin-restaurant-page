/* 
<div class="home-container">
    <div class="home-content">
    Welcome to Nopic Resto, where there are no pictures on the menu, or anywhere else for the matter.<br><br>
    Located in the middle of somewhere, Nopic Resto is committed in bringing you an unforgettable experience through its unconventional usage of the best possible ingredients 
    and serving the best, extraordinary and downright outlandish menu that you could ever think of.<br>
    Interested? Then check our <a href="">menu.</a>
    </div>
</div>--></br> */

import {divContainer} from "../index.js";


export function homeTab() {
    const homeContainer = document.createElement("div");
    const homecontent = document.createElement("div");
    const toMenu = document.createElement("a");

    homeContainer.className = "home-container";
    homecontent.className = "home-content";

    toMenu.innerHTML = "menu.";
    homecontent.innerHTML = "Welcome to Nopic Resto, where there are no pictures on the menu, or anywhere else for the matter.<br><br>" +
                            "Located in the middle of somewhere, Nopic Resto is committed in bringing you an unforgettable experience through its unconventional usage of the best" +
                            " possible ingredientsand serving the best, extraordinary and downright outlandish menu that you could ever think of.<br>" +
                            "Interested? Then check our " + toMenu.innerText;
    homeContainer.appendChild(homecontent);
    divContainer.appendChild(homeContainer);
}