let main = document.querySelector('main');
let root = document.documentElement;
let add_btn  = document.getElementById("add");
let delete_btn = document.getElementById("delete");
let popup = document.querySelector('.popup');
let overlay = document.querySelector('.overlay');
let card = document.querySelector('.card');
let input_name = document.querySelector("#name");
let input_image = document.querySelector("#poster");
let input_rating = document.querySelector("#rating")
const addMovie_btn = document.getElementById("add_movie")
//popup & overlay
add_btn.addEventListener('click' , function (){
  overlay.setAttribute("style" , "visibility: visible;   background-color: rgba(0, 0, 0, 0.6);  ")
  popup.setAttribute("style" , "display: block ;   width: 40vw;height: 60vh; opacity:1;")

});
//object
class newMovie {
    constructor(name , image , rating)
    {
        this.name = name;
        this.image = image;
        this.rating = rating; 
    }
    add(name , image , rating){
        //general
        const newCard = document.createElement('div');
        newCard.classList.add("card");
        //image
        const newImg = document.createElement('img');
        newImg.setAttribute("src" , this.image);
        //transparent bg
        const newTransparent = document.createElement('div');
        newTransparent.classList.add('transparent')
        //text inside the transparent bg
        const ratingHolder = document.createElement('div');
        ratingHolder.classList.add('ratingHolder');
        const nameHolder = document.createElement('p');
        nameHolder.classList.add('nameHolder');
        nameHolder.textContent = this.name;
        const movieRating = document.createElement("p");
        movieRating.textContent = `${this.rating} /10`
        const star = document.createElement('img');
        star.setAttribute('src' , "star-icon.svg");
        star.setAttribute('width' , "24px");
        star.setAttribute('height' , "24px");
        //appending children
        main.appendChild(newCard);
        newCard.appendChild(newImg);
        newCard.appendChild(newTransparent);
        newTransparent.appendChild(ratingHolder);
        newTransparent.appendChild(nameHolder);
        ratingHolder.appendChild(movieRating);
        ratingHolder.appendChild(star);
    }
}

addMovie_btn.addEventListener('click' , (e) => {
    e.preventDefault();
    const newmovie = new newMovie(input_name.value , input_image.value , input_rating.value);
    newmovie.add();
    overlay.setAttribute("style" , "visibility: hidden;   background-color:none;  ")
    popup.setAttribute("style" , "display: none ;   width: 20vw;height: 30vh;")
  
});