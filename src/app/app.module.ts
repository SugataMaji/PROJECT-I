import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { MovieComponent } from './movie/movie.component';
import { RatingDirective } from './rating.directive';

const route: Routes =[
  {
    path: 'movie1',
    component: MovieComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    RatingDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
