import { menuPage } from "./Menu";
import { RestaurantHomePage } from "./page";
import { contactPage } from "./contact";

export function createTabs() {
    const homePageBtn = document.getElementById("homeBtn");
    const menuPageBtn = document.getElementById("menuBtn");
    const contactPageBtn = document.getElementById("contactBtn");
    const contentDiv = document.getElementById("content");

    homePageBtn.addEventListener("click", () => {
        contentDiv.replaceChildren(); 
        RestaurantHomePage();
    });

    menuPageBtn.addEventListener("click", () => {
        contentDiv.replaceChildren(); 
        menuPage();
    });

    contactPageBtn.addEventListener("click", () => {
        contentDiv.replaceChildren(); 
        contactPage();
    });
}