

let first = document.querySelectorAll(".without li");


first.forEach((box, index) => {
    box.addEventListener(`click`, (eve) => { 
        eve.target.innerText = index + 1;

        setTimeout(() => {
            eve.target.innerText = "";
        }, 5000);
    });
});




let second = document.querySelectorAll(".with");

second.addEventListener(`click`, (eve)=> {
   let num = eve.target.dataset.text; 
   eve.target.innerText = num;

   setTimeout(() => {
       eve.target.innerText = "";
   }, 5000);
});