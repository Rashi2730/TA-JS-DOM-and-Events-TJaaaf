let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];



let root = document.querySelector(".boxes");

numbers.forEach((num) => {
    let div = document.createElement("div");
    div.classList.add("box");
    

    div.addEventListener("click", function(){
        div.innerText = num;
    })
    root.append(div);

})