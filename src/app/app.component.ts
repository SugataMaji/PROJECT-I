import { Component ,OnInit} from '@angular/core';
import { MovieService } from './movie.service';
import {FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  Movies=[];
  addMovieform: FormGroup;

  constructor(private movielist :MovieService, private router:Router,  private fb: FormBuilder){

  }
  ngOnInit(){
   this.Movies = this.movielist.getMovie();
   this.addMovieform = new FormGroup({
      ImgUrl: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      rating: new FormControl(),
      releasedate: new FormControl()
   });

   this.addMovieform = this.fb.group({
      'ImgUrl': ['', Validators.compose([Validators.required])],
      'title': ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9]*$'), Validators.required, Validators.minLength(2)])],
      'description': ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9]*$'), Validators.required, Validators.minLength(2)])],
      'rating': ['', Validators.compose([Validators.required])],
      'releasedate': ['', Validators.compose([Validators.required])],
    });
  }
resetForm() {
    this.addMovieform.reset();
  };

  addmovielist(){
    if(this.addMovieform.valid) {
      this.movielist.addMovie(this.addMovieform.value);
       this.Movies = this.movielist.getMovie();
       /**Using 3rd party library to show message. */
 //  alertify.notify('Cricketer Added Successfully', 'success', 3);
    }
  }
}
