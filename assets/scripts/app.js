let addMovie = document.getElementById("add-modal");

let addMovieButton = document.getElementById("btn");

let toggleBack = document.getElementById("backdrop");

displayModal  = () => {
    addMovie.style.display = "block";
    toggleBack.style.display = "block";
}

cancelModal = () => {
    addMovie.style.display = "none";
    toggleBack.style.display = "none";

    movieTitle.value ="";
    movieImg.value = "";
    movieRating.value = "";
}

arrayMovie = []

let movie_Title = document.getElementById("title");
let movie_Img = document.getElementById("image-url");
let movie_Rating = document.getElementById("rating");

 function moviesFunction(title, imageUrl, rating){
    this.title = title;
    this.imageUrl = imageUrl;
    this.rating = rating;
}

addMovieModal = () =>{
    let new_Movies = new moviesFunction(movie_Title.value, movie_Img.value, movie_Rating.value);

    if (((movie_Title.value === "") || (movie_Img.value === "")) || (movie_Rating.value < 1 || movie_Rating.value > 5)){
        alert("Please enter valid values and try again");
    }
    else{
        arrayMovie.push(new_Movies);
        alert("Movies has been successfully added");

        movie_Title.value ="";
        movie_Img.value = "";
        movie_Rating.value = "";
        
    } 
}


document.getElementById("delete_btn").addEventListener("click", cancelModal);
document.getElementById("backdrop").addEventListener("click", cancelModal);
document.getElementById("addMovie").addEventListener("click", addMovieModal);
addMovieButton.addEventListener("click", displayModal);
