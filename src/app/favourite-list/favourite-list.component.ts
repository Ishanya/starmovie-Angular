import { Component, OnInit } from '@angular/core';
import { StarMovieServiceService } from '../star-movie-service.service';
import { FavouriteMovie } from '../favourite-movie';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  favMovieList:FavouriteMovie[];

  constructor(private service:StarMovieServiceService) { }

  ngOnInit() {
    return this.service.requestFavMovieList().subscribe(data=>{
        this.favMovieList=data;
    });
  }

  deleteFavourite(movieid){
    return this.service.requestFavouriteDelete(movieid).subscribe(data=>{
      return this.service.requestFavMovieList().subscribe(data1=>{
        this.favMovieList=data1;
    })
  });
}

}
