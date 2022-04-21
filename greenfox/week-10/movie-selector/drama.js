class Drama {
  constructor() {
    this.name = "Dráma";
    this.movies = [];
    this.moviesName = [];
  }
  addMovie(drama) {
    this.movies.push(drama);
  }
  addMovieName() {
    for (let i = 0; i < this.movies.length; i++) {
      this.moviesName.push(this.movies[i].name);
    }
  }
}
export default Drama;