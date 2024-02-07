export function menuPage ( ){

    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();
    
    const menuDiv = document.createElement("div");

    menuDiv.id = "menu";
    contentDiv.appendChild(menuDiv);


    const headLine = document.createElement("h1");
    headLine.textContent = "Menu Page";
    menuDiv.appendChild(headLine);


}