const keys = document.querySelectorAll(".calc_keys button");
let scr = document.getElementById(`screen`);  


let screenValue = ``;

for(let key of keys) {
    key.addEventListener(`click`, (e) => {
        buttonText = e.target.innerText;
        console.log(`Button is `, buttonText);
        if(buttonText == "x" ){
            buttonText = "*";
            screenValue += buttonText;
            scr.value = screenValue;
        }
        else if (buttonText == `C`){
            screenValue = "";
            scr.value = screenValue;
        }
        else if (buttonText == `=`){
            scr.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            scr.value = screenValue;
        }
    })
}