//SELECTORS

const movInp = document.querySelector(".todo_input");
const movBtn = document.querySelector(".todo_button");
const movList = document.querySelector(".list");


//EventListener 

movBtn.addEventListener(`click`, addMovie);
movList.addEventListener(`click`, delOrCheck);

// Fuction 

function addMovie(event){

    event.preventDefault();

    let movieCont = document.createElement("div");
    movieCont.classList.add("container");

    let checkBtn = document.createElement("input");
    checkBtn.type = "checkbox";
    checkBtn.classList.add("check");
    movieCont.appendChild(checkBtn);


    let movie = document.createElement("li");
    movie.innerText = movInp.value;
    movie.classList.add("movieli");

    movieCont.appendChild(movie);

    //buttons 
    let trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    trashBtn.classList.add("trash");
    movieCont.appendChild(trashBtn);


    movList.append(movieCont);

    movInp.value = "";

}



function delOrCheck(event) {
   const item = event.target;
    if(item.classList[0] === "trash"){
        let parent = item.parentElement;
        parent.remove();

    }

}
