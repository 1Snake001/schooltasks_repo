import Movie from "./movie.js";
import Scifi from "./scifi.js";
import Drama from "./drama.js";
import Comedy from "./comedy.js";

const moon = new Movie("Hold");
const spaceOdyssey = new Movie("2001: Űrodüsszeia");
const contact = new Movie("Kapcsolat");
const scifi = new Scifi();

const airplane = new Movie("Airplane!");
const deadpool = new Movie("Deadpool");
const waynesWorld = new Movie("Wayne's world");
const comedy = new Comedy();

const darkHour = new Movie("A Legsötétebb óra");
const bleedingOil = new Movie("Vérző olaj");
const americanBeauty = new Movie("Amerikai szépség");
const drama = new Drama();

const title = new Movie("Select a movie");

const scifies = [title, moon, spaceOdyssey, contact];
const dramas = [title, darkHour, bleedingOil, americanBeauty];
const comedys = [title, airplane, deadpool, waynesWorld];

function movieAdder(genre, genreList) {
  for (let i = 0; i < genreList.length; i++) {
    genre.addMovie(genreList[i]);
  }
  genre.addMovieName();
}

movieAdder(drama, dramas);
movieAdder(scifi, scifies);
movieAdder(comedy, comedys);

document.getElementById("genres").onchange = selectHandler;

let movieSelector = document.getElementById("movies");

function selectHandler() {
  let value = this.value;

  if (value == "drama") {
    movieSelector.innerHTML = "";
    genreSelector(dramas);
  }
  if (value == "scifi") {
    movieSelector.innerHTML = "";
    genreSelector(scifies);
  }
  if (value == "comedy") {
    movieSelector.innerHTML = "";
    genreSelector(comedys);
  }
  if (value == "Select") {
    movieSelector.innerHTML = "";
    returN();
  }
}

let select = document.getElementById("movies");

function genreSelector(genres) {
  for (let genre of genres) {
    let option = document.createElement("option");
    option.innerHTML = genre.name;
    select.appendChild(option);
  }
}

function returN() {
  let option = document.createElement("option");
  option.innerHTML = "Select a movie";
  select.appendChild(option);
}

select.addEventListener(`change`, (e) => {
  let span = document.getElementById("info");
  const select = e.target;
  const value = select.value;
  span.innerHTML = value;
  console.log(span);
});