import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  constructor() { }

  getMovie(){
    const movies = localStorage.getItem("movies");
    if(movies){
      return JSON.parse(movies);
    }
    return[];
  }

  addMovie(moviedetails){
    const moviesnew = localStorage.getItem("movies");
    if(moviesnew){
          let movies = JSON.parse(moviesnew);
          movies.push(moviedetails);
          localStorage.setItem("movies", JSON.stringify(movies));
    }
    else{
          localStorage.setItem("movies", JSON.stringify([]));
    }
 
  }
}
