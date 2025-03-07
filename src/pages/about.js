//about
/*
<div class = "about-container">
    <div class = "about-text">
        <h1 id = "aboutTitle">Unprecedented flavor through<br>uncommon means</h1>
        <p id = "aboutParagraph">Started 20 hours ago, Nopic Resto was started when its founder, Somewan Aiduno Randomeibi, sought to revolutionize how simple, everyday ingredients
            can be elevated in name only, and be presented as something that everyone would gladly pay exorbitant prices for.<br><br><br>
            Right now, it is barely surviving due to its own gimmick being a rarity in today's age, showing just how hard it is to be good in this day and age.
        </p>
    </div>
</div>*/


import {divContainer} from "../index.js";


export function aboutTab() {
    const aboutContainer = document.createElement("div");
    const aboutText =  document.createElement("div");
    const aboutTitle = document.createElement("h1");
    const aboutParagraph = document.createElement("p");
    
    aboutContainer.className = "about-container";
    aboutText.className = "about-text";
    aboutTitle.id = "aboutTitle";
    aboutParagraph.id = "aboutParagraph";

    aboutTitle.innerHTML = "Unprecedented flavor through<br>uncommon means";
    aboutParagraph.innerHTML = "Started 20 hours ago, Nopic Resto was started when its founder, Somewan Aiduno Randomeibi, sought to revolutionize how simple, everyday ingredients" +
            "can be elevated in name only, and be presented as something that everyone would gladly pay exorbitant prices for.<br><br><br>" + 
            "Right now, it is barely surviving due to its own gimmick being a rarity in today's age, showing just how hard it is to be good in this day and age.";
    
    aboutText.appendChild(aboutTitle);
    aboutText.appendChild(aboutParagraph);
    aboutContainer.appendChild(aboutText);
    divContainer.appendChild(aboutContainer);
}