import cookie1 from "./assets/cookie1.avif"
import cookie2 from "./assets/cookie2.avif"
import cookie3 from "./assets/cookie3.avif"
import cookie4 from "./assets/cookie4.avif"

export default function() {
    let content = document.getElementById("content"); 
    
    let images = [cookie1, cookie2, cookie3, cookie4];
    let names = ["Wildberry Sugar", "Cookies & Cream Brownie", "Chocolate Mint Cake", "Semi-Sweet Chocolate Chunk"];
    let descriptions = ["A warm vanilla sugar cookie packed with strawberries and blueberries.", "A dark chocolate brownie packed with cookies & cream pieces and semi-sweet chunks, crowned with white drop buttercream, sprinkled with cookies & cream pieces, and drizzled with chocolate ganache—available all month long!", "Two layers of rich, moist dark chocolate cake stacked with semi-sweet chocolate ganache, luscious mint cream cheese frosting, and sprinkled with smooth Andes® Crème De Menthe Candy Pieces. Andes® is a registered trademark of Tootsie Roll Industries, LLC Chicago, Illinois", "Chocolate chip, but make it chunky—a delicious cookie filled with irresistible semi-sweet chocolate chunks and a sprinkle of flaky sea salt."];
    for(let i = 0; i < 4; ++i) {
        let tile = document.createElement("div");
        let cookie_name = document.createElement("div");
        cookie_name.innerText = names[i];
        let cookie_description = document.createElement("div"); 
        cookie_description.innerText = descriptions[i];
        
        let learnMore = document.createElement("button");
        let orderNow = document.createElement("button");
        learnMore.innerText = "Learn More";
        orderNow.innerText = "Order Now";
        let cookie_img = document.createElement("img");
        cookie_img.setAttribute("src", images[i]);
        
        let imgDiv = document.createElement("div"); 
        imgDiv.append(cookie_img);
        imgDiv.classList.add("imgDiv");
        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonDiv");
        buttonDiv.append(learnMore, orderNow);

        let text = document.createElement("div");
        text.append(cookie_name, cookie_description, buttonDiv);
        tile.append(imgDiv, text); 

        tile.classList.add("tile");
        cookie_name.classList.add("name");
        cookie_description.classList.add("description");
        learnMore.classList.add("learnMore");
        orderNow.classList.add("orderNow");
        text.classList.add("text"); 

        content.append(tile);
    }
    
}