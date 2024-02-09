export function menuPage() {

    const contentDiv = document.getElementById("content");

    // div Element mit id="menu"
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";
    contentDiv.appendChild(menuDiv);

    //headline h1
    const headLine = document.createElement("h1");
    headLine.textContent = "Menu Page";
    menuDiv.appendChild(headLine);

    // p Element 
    const pElm = document.createElement("p");
    pElm.id ="pElmMenu"
    pElm.textContent = "McDonald's is one of the world's largest fast food chains, founded in 1940 in San Bernardino, California, and incorporated in Des Plaines, Illinois, in 1955.[1] Since then, McDonald's has become a household name in America, known for selling a variety of convenience food items at thousands of locations worldwide. Throughout its history, McDonald's has experimented with a number of different offerings on the menu.[2] In 2007, McDonald's had 85 items on its menu;[where?] by 2013 this number had risen to 145 items on its menu.[3]";
    menuDiv.appendChild(pElm);
}
