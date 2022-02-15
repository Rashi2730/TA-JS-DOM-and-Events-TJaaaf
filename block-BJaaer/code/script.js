let form = document.querySelector(`form`);
let display = document.querySelector(`.display`);


let userInfo = {};


form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    userInfo.name = elements.name.value;
    userInfo.email= elements.email.value;
    userInfo.gender= elements.gender.value;
    userInfo.color= elements.color.value;
    userInfo.genre= elements.genre.value;
    userInfo.rate= elements.rate.value;
    userInfo.terms = elements.terms.checked;

    info(userInfo);

});


function info(data = {}){
    let names = document.createElement(`h1`);
    names.innerText = `Hello ${data.name}`;
    let email = document.createElement(`p`);
    email.innerText = `Email : ${data.email}`;
    let movie = document.createElement(`p`);
    movie.innerText = `You Love : ${data.gender}`;
    let genre = document.createElement(`p`);
    genre.innerText = `Book Genre ${data.genre}`;
    let color = document.createElement(`p`);
    color.innerText = `Color : ${data.color}`;
    let rating = document.createElement(`p`);
    rating.innerText = `Rating : ${data.rate}`;
    let message = document.createElement(`p`);
    message.innerText = data.terms ? `You have accepted the terms and conditions` : `You have not accepted the terms and conditions`;
    let btn = document.createElement(`button`);
    btn.innerText = `x`;
    btn.style.backgroundColor = "red"; 

    display.append(names, email, movie, genre, rating, message, btn );
}

