export function contactPage() {

    const contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    const menuDiv = document.createElement("div");

    menuDiv.id = "contact";
    contentDiv.appendChild(menuDiv);


    const headLine = document.createElement("h1");
    headLine.textContent = "Contact Page";
    menuDiv.appendChild(headLine);
}