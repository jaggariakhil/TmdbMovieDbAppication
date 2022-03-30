import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  popularTvShows=this.getPopularTvShows();
  popularTvShowsUpdated=new Subject<any>();

  topRatedMovies=this.getTopRatedMovies(1);
  topRatedMovieUpdated= new Subject<any>();

  popularMovies=this.getPopularMovies(1);
  popularMovieUpdated= new Subject<any>();

  TopratedTvShows=this.getPopularTvShows();
  LatestTvShows=this.getLatestTvShows();
  movies:any=this.getUpcomingMovies(1);
  
  moviesUpdated=new Subject<any>();
  //popularTvShowsUpdated=new Subject<any>();
  TopRatedTvShowsUpdated=new Subject<any>();
  LatestTvShowsUpdated=new Subject<any>();

  constructor(private http:HttpClient,private authServ:AuthService) { }

  getUpcomingMovies(i:number){
    this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=${i}`).subscribe((res)=>{
      this.movies= res;
      this.moviesUpdated.next(this.movies)
    })
return this.movies;
  }


  getTopRatedMovies(i:number):any{
    this.http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1${i}`).subscribe((res)=>{
      this.topRatedMovies= res;
      this.topRatedMovieUpdated.next(this.topRatedMovies)
    })
return this.topRatedMovies;
  }

  getPopularMovies(i:number):any{
    this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1${i}`).subscribe((res)=>{
      this.popularMovies= res;
      this.popularMovieUpdated.next(this.popularMovies)
    })
return this.popularMovies;
  }





  getMovieDetails(id:number):Observable<any>{
    console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US`)
    
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US`)

  }
  getReviews(id:number):Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1`)

  }
  

  getPopularTvShows(){
     this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1').subscribe((res:any)=>{
      this.popularTvShows=res.results;
      this.popularTvShowsUpdated.next(this.popularTvShows);
    })
  }

  getTopRatedTvShows(){
    this.http.get('https://api.themoviedb.org/3/tv/top_rated?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1').subscribe((res:any)=>{
      this.TopratedTvShows=res.results;
      this.TopRatedTvShowsUpdated.next(this.TopratedTvShows);
    })
  }

  getLatestTvShows(){
    this.http.get('https://api.themoviedb.org/3/tv/latest?api_key=b02f177c9cdab086b441e505f1ed0e38&language=en-US&page=1').subscribe((res:any)=>{
      this.LatestTvShows=res;
      console.log(res);
      this.LatestTvShowsUpdated.next(this.LatestTvShows);
    })
  }
addReview(id:number,rating:number){
  const options = { headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8') };
  const body={"value": rating}
  console.log(`https://api.themoviedb.org/3/movie/3/rating?api_key=b02f177c9cdab086b441e505f1ed0e38&session_id=${this.authServ.sessionId}`)
  this.http.post(`https://api.themoviedb.org/3/movie/3/rating?api_key=b02f177c9cdab086b441e505f1ed0e38&session_id=${this.authServ.sessionId}`,body,options)
  .subscribe((res)=>{
    console.log("review added succesfully");
  })
}
deleteReview(id:number){
  const options = { headers: new HttpHeaders().set('Content-Type', 'application/json;charset=utf-8') };
  //const body={"value": rating}
  console.log(`https://api.themoviedb.org/3/movie/3/rating?api_key=b02f177c9cdab086b441e505f1ed0e38&session_id=${this.authServ.sessionId}`)
  this.http.delete(`https://api.themoviedb.org/3/movie/3/rating?api_key=b02f177c9cdab086b441e505f1ed0e38&session_id=${this.authServ.sessionId}`,options)
  .subscribe((res)=>{
    console.log("review deleted succesfully");
  })
}
getMovieProviders(id:number):Observable<any>{
 return this.http.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=b02f177c9cdab086b441e505f1ed0e38`);
}

}
