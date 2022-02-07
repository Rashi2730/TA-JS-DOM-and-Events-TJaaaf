function randomNum(max) {
    return Math.floor(Math.random() * max);
}

function randomColor() {
    let hexArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    
    let color = "#";
    for(let i =0 ; i < 6; i ++){
        let randClr = randomNum(16);
        color = color + hexArr[randClr];
    }
    return color;
}


let root = document.querySelector("body");


let contain = document.createElement("div");
contain.style.border = "2px solid black";
contain.style.width = "580px";
contain.style.display = "flex";
contain.style.flexWrap = "wrap";
contain.style.alignItems = "center";
contain.style.margin = "4rem 20rem";




for(let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.border = "1px solid black";
    div.style.width = "4rem";
    div.style.height = "4rem";

    let p = document.createElement("p"); 
    let randomNo = randomNum(500);
    p.innerText = randomNo;
    p.style.margin = "2rem 0";

    div.append(p);
    contain.append(div);
    root.append(contain);
}

let allboxes = document.querySelectorAll(".box");

function mouseMove () {
allboxes.forEach((box) => {
    box.style.backgroundColor = randomColor();
    box.querySelector("p").innerText = randomNum(500);

});
}



contain.addEventListener("mousemove", mouseMove);