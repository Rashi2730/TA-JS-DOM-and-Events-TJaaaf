let root = document.querySelector("body");
let div = document.document.createElement("div");
let box = document.createElement("div");
box.style.height = "4rem";
box.style.weight = "4rem";
box.style.border = "2px solid black";
box.style.color = "aqua";


for(let i = 0; i < 500; i++) {
    div.append(box);
    root.append(div);
}
