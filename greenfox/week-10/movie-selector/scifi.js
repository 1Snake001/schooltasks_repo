class Scifi {
  constructor() {
    this.name = "Sci-fi";
    this.movies = [];
    this.moviesName = [];
  }
  addMovie(scifi) {
    this.movies.push(scifi);
  }
    addMovieName() {
    for (let i = 0; i < this.movies.length; i++) {
     this.moviesName.push(this.movies[i].name);
    } 
  }
}

export default Scifi;