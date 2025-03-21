import cookie_img from "./assets/cookie_homepage.avif"
import counter_img from "./assets/counter_homepage.webp"

export default function() {
    let content = document.getElementById("content");
    let catering = document.createElement("div");
    let cookieImg = document.createElement("img"); 
    cookieImg.setAttribute("src", cookie_img);
    let heroText = document.createElement("div"); 
    let description = document.createElement("div"); 
    let button = document.createElement("button"); 
    let text = document.createElement("div");

    description.innerText = "Transform every occasion into a sweet celebration. Just select your nearest store and schedule your order in a few clicks.";
    heroText.innerText = "Crumbl Catering";
    button.innerText = "Order Catering";
    text.append(heroText, description, button);

    heroText.classList.add("hero");
    description.classList.add("description");
    button.classList.add("button");

    text.classList.add("flex-item");
    cookieImg.classList.add("flex-item");
    text.classList.add("text"); 
    catering.append(text, cookieImg);

    catering.classList.add("catering"); 
    //

    let orderNow = document.createElement("div");
    let heroText2 = document.createElement("div");
    let description2 = document.createElement("div"); 
    let button2 = document.createElement("button"); 
    let text2 = document.createElement("div");
    let counterImg = document.createElement("img");
    counterImg.setAttribute("src", counter_img);
    let imgDiv = document.createElement("div");
    imgDiv.append(counterImg);
    
    heroText2.innerText = "Order Today, Enjoy This Week!"
    description2.innerText = "Place an order today and choose your favorite Mini or Large cookies in either a 48-Pack or 96-Pack. Enjoy your delicious treats, ready for pickup in as little as 90 minutes."
    button2.innerText = "Order Now";
    text2.append(heroText2, description2, button2);


    orderNow.classList.add("orderNow");
    button2.classList.add("button");
    imgDiv.classList.add("flex-item");
    text2.classList.add("flex-item");
    text2.classList.add("text");
    heroText2.classList.add("hero2");
    description2.classList.add("description2");
    button2.classList.add("button2");

    imgDiv.classList.add("imgDiv");

    orderNow.append(imgDiv, text2);

    content.appendChild(catering); 
    content.appendChild(orderNow);
}