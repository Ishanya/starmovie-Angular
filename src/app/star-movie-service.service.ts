import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Movie } from './movie';
import { FavouriteMovie } from './favourite-movie';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class StarMovieServiceService {

  constructor(private http:HttpClient) { }

  private userUrl = 'http://localhost:8765';

  
public requestMovieList(title)
{
  return this.http.get<Movie[]>(this.userUrl+"/search-movies/searchs/"+title);
}

public requestFavMovieList()
{
  return this.http.get< FavouriteMovie[]>(this.userUrl+"/favourite-movies/favourite");
}

public requestFavouriteDelete(movieId)
{
  return this.http.put<number>(this.userUrl+"/favourite-movies/favDelete/"+movieId,movieId);
}

public requestAddFavourite(movie)
{
  return this.http.post<FavouriteMovie>(this.userUrl+"/favourite-movies/favAdd/"+movie.movieId,movie.movieId);
}

}
