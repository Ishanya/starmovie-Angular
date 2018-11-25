import { Component, OnInit } from '@angular/core';
import { StarMovieServiceService } from '../star-movie-service.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { on } from 'cluster';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private service:StarMovieServiceService,private route:Router) { }

  ngOnInit() {
  }

title:String;
myClass:String;
itemSize=false;
divMovieList=true;
movieL:Movie[];



movieList(){
  this.itemSize = false;
  this.service.requestMovieList(this.title).subscribe(data =>{
      this.movieL=data;
  });


this.myClass="scrolling-wrapper2";


}

getYearOfMovie(movieReleaseDate) {
  return movieReleaseDate.substring(0, 4);
}

myFunction(){
  if(this.title.length>0){
   this.movieList();
    this.divMovieList = false;
  }
  else{
    this.divMovieList = true;
  }
}

inSearchBox(moviename){
  this.title = moviename;
  this.divMovieList=true;


}

setItemSize(){
  this.itemSize = true;
}

favList(){
  this.route.navigate(["/favourite"]);
}

shortDesc(desc){
  return desc.substring(0,120) + '...'
}


addToFavourite(movie) {
  this.service.requestAddFavourite(movie).subscribe(data => {
    console.log('Success');
  });
}

Login(){
  this.route.navigate(["/Login"]);
}

Signup(){
  this.route.navigate(["/Signup"]);
}

}