export function RestaurantHomePage (){
    const divElm = document.getElementById("content");
    
    


    const h1 = document.createElement("h1");
    h1.textContent = "Restaurant Page";
    divElm.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Willkommen auf der Homepage!";
    divElm.appendChild(p);

    const image = document.createElement("img");
    image.src = "https://as1.ftcdn.net/v2/jpg/02/26/53/80/1000_F_226538033_C42p96JDNwkSdQs86Agxd1TtaVJsyJ71.jpg";
    divElm.appendChild(image);



}

