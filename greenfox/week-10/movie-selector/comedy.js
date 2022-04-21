class Comedy {
    constructor() {
      this.name = "Vígjáték";
      this.movies = [];
      this.moviesName = [];
    }
    addMovie(comedy) {
      this.movies.push(comedy);
    }
      addMovieName() {
      for (let i = 0; i < this.movies.length; i++) {
       this.moviesName.push(this.movies[i].name);
      } 
    }
  }
  
  export default Comedy;