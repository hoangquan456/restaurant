import "./styles.css"
import homepage from "./homepage.js"
import menu from "./menu.js"

let buttonHome = document.getElementById("home");
let buttonMenu = document.getElementById("menu");
let content = document.getElementById("content");

buttonHome.addEventListener("click", ()=>{
    content.innerHTML = "";
    homepage();
})

buttonMenu.addEventListener("click", ()=>{
    content.innerHTML = "";
    menu();
})

homepage();