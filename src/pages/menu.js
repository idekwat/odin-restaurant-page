//menu
/*

        <div class="menu-container">
            <div class="menu-content">
                <div class="menu-div">
                    <ul>
                        <li>Appetizers</li>
                        <ul>
                            <li>Apps1</li><p>appdesc</p>
                            <li>Apps2</li><p>appdes</p>
                        </ul>
                        <li>Entrees</li>
                            <li>Entr1</li><p>appdesc</p>
                            <li>Entr1</li><p>appdes</p>
                        <li>Sides</li>
                            <li>Sides1</li><p>appdesc</p>
                            <li>Sides1</li><p>appdes</p>
                        <li>Desserts</li>
                            <li>Dess1</li><p>appdesc</p>
                            <li>Dess1</li><p>appdes</p>
                        <li>Beverages</li>
                            <li>Bev</li><p>appdesc</p>
                            <li>Bev</li><p>appdes</p>
                    </ul>
                </div>
            </div>
        </div>
        */

import {divContainer} from "../index.js";

export function menuTab() {
    const menuContainer = document.createElement("div");
    const menuContent = document.createElement("div");
    
    menuContainer.className = "menu-container";
    menuContent.className = "menu-content";

    menuContent.innerHTML = " <ul class = 'menu-category'>" +
                            "<li>Appetizers</li>" +
                                "<ul class = 'food-name'>" +
                                    "<li>AppetizerName1</li><p class='food-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et est consectetur, feugiat eros in, elementum quam. </p>" +
                                    "<li>AppetizerName2</li><p class='food-description'>Sed id quam mollis velit bibendum posuere. Pellentesque fringilla nunc quis quam commodo, pulvinar commodo neque vulputate.</p>" +
                                "</ul>" + 
                            "<li>Entrees</li>" +
                                "<ul class = 'food-name'>" +
                                    "<li>Entree1</li><p class='food-description'>Donec ac eros nec ligula vestibulum ornare. Suspendisse potenti. Cras et leo leo. Aliquam fermentum laoreet magna vel viverra.</p>" +
                                    "<li>Entree2</li><p class='food-description'>Suspendisse molestie, sapien ac fringilla convallis, metus enim mollis diam, vel accumsan risus augue nec elit. Maecenas euismod arcu porta, dignissim eros eget, lacinia lectus.</p>" + 
                                "</ul>" +
                            "<li>Sides</li>" +
                                "<ul class = 'food-name'>" +
                                    "<li>Sides1</li><p class='food-description'>Maecenas eget nunc tincidunt, vehicula velit a, rhoncus neque. Sed pharetra nisi in rutrum elementum.</p>" +
                                    "<li>Sides2</li><p class='food-description'>Praesent rhoncus lectus cursus venenatis viverra. Nunc id metus id ante pulvinar interdum.</p>" +
                                "</ul>" +
                            "<li>Desserts</li>" +
                                "<ul class = 'food-name'>" +    
                                    "<li>Dessert1</li><p class='food-description'>Proin gravida urna nec dolor facilisis maximus. Nunc ultricies pharetra orci, ac volutpat quam condimentum ut.</p>" +
                                    "<li>Desser2</li><p class='food-description'>Ut finibus interdum ipsum, facilisis condimentum turpis cursus quis. Ut dui dolor, posuere ac massa sed, porttitor tincidunt nisl.</p>" +
                                "</ul>" +
                            "<li>Beverages</li>" +
                                "<ul class = 'food-name'>" +
                                    "<li>Beverage1</li><p class='food-description'>Etiam fringilla dignissim convallis. Aliquam tristique nibh justo, a maximus ante dignissim sit amet.</p>" +
                                    "<li>Beverage2</li><p class='food-description'>Pellentesque lectus odio, faucibus sit amet nisi vitae, sollicitudin pretium odio. Etiam sit amet elementum metus.</p>" +
                                "</ul>" +
                            "</ul>"
    
    menuContainer.appendChild(menuContent);
    divContainer.appendChild(menuContainer);
}