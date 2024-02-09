export function contactPage() {

    const contentDiv = document.getElementById("content");

    // div Element wird erstellt, id = "contact", wird in content div hinzugefügt
    const menuDiv = document.createElement("div");
    menuDiv.id = "contact";
    contentDiv.appendChild(menuDiv);

    // h1 mit textContent = "Contact Page"
    const headLine = document.createElement("h1");
    headLine.textContent = "Contact Page";
    menuDiv.appendChild(headLine);

    //input Elm mit type ="text"
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    menuDiv.appendChild(inputElement);



    //submit button mit console.log
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";

    submitBtn.addEventListener("click", ()=>{
        const inputValue = inputElement.value;
        console.log("submitted", inputValue);
        })
    menuDiv.appendChild(submitBtn);


}