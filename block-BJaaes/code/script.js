let form = document.querySelector("form");
let userErr , nameErr , numErr, mailErr, pswErr, confErr = "";



function containNum(str){
    return str.split(``).some(elm => Number(elm));

}

function containAllNum(str){
    return str.split(``).every(elm => Number(elm));
}



function handleForm(event){
    event.preventDefault();
    let usernameElm = event.target.elements.username;
    if(usernameElm.value.length < 4){
        userErr = `Username can't be less than 4 characters`;
        usernameElm.classList.add('fail');
    }else{
        userErr = "";
        usernameElm.classList.add('success');
        usernameElm.classList.remove('fail');
    }
    usernameElm.nextElementSibling.innerText = userErr; 


    let nameElm = event.target.elements.name;
    if(containNum(nameElm.value)){
        nameErr = `You can't use number in the name field`;
        nameElm.classList.add('fail');
    }else {
        nameErr = "";
        nameElm.classList.add('success');
        nameElm.classList.remove('fail');
    }
    nameElm.nextElementSibling.innerText = nameErr;


    let mail = event.target.elements.email;
    if(mail.value.length < 6) {
        mailErr = `Not a valid email`;
        mail.classList.add(`fail`);
    }else if(!mail.value.includes("@")){
        mailErr = `Not a valid email`;
        mail.classList.add(`fail`);
    }else {
        mailErr = "";
        mail.classList.add(`success`);
        mail.classList.remove(`fail`);
    }
    mail.nextElementSibling.innerText = mailErr;



    let numb = event.target.elements.phone_num;
    if(!containAllNum(numb.value)){
        numErr = `Phone number can only contain numbers`;
        numb.classList.add(`fail`);
    }else if(numb.value.length < 7){
        numErr = `Length of phone number can't be less than 7`;
        numb.classList.add(`fail`);
    }
    else {
        numErr = "";
        numb.classList.add(`success`);
        numb.classList.remove(`fail`);
    }
    numb.nextElementSibling.innerText = numErr;


    let psw = event.target.elements.pass;
    let con_psw = event.target.elements.confirm_pass;
    if(psw.value !== con_psw.value){
        pswErr = `Password and confirm password must be same`;
        confErr = `Password and confirm password must be same`;
        psw.classList.add(`fail`);
        con_psw.classList.add(`fail`);
    } else {
        pswErr = "";
        confErr = "";
        psw.classList.add(`success`);
        psw.classList.remove(`fail`);
        con_psw.classList.add(`success`);
        con_psw.classList.remove(`fail`);
    }
    psw.nextElementSibling.innerText = pswErr;
    con_psw.nextElementSibling.innerText = confErr;

       
}

form.addEventListener("submit", handleForm);