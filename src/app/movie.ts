export class Movie {
movieId:number;
movieName:String;
moviePosterUrl:String;
movieReleaseDate:String;
movieDescription:String;

constructor(movieId:number,movieName:String,moviePosterUrl:String,movieReleaseDate:String,movieDescription:String){
    this.movieId=movieId;
    this.movieName=movieName;
    this.moviePosterUrl=moviePosterUrl;
    this.movieReleaseDate=movieReleaseDate;
    this.movieDescription=movieDescription;
}

}
