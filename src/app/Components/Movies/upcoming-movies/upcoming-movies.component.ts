import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  page=0;
  collectionSize=1000;
  
  movies:any;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";
  selected:any;
  i:any=0;
 
  updateSelected=new Subject<any>();

  movieProvider:any;
  popularMovies:any;
  currentRating = 0;
   
 
   constructor(private movieServ:MovieService) { }
 
   ngOnInit(): void {
    this.movies=this.movieServ.getUpcomingMovies(this.page);
    
   }
  
   

   MoviesUpdated:Subscription =this.movieServ.moviesUpdated.subscribe((res:any)=> {
     console.log(res.results[0]);
     console.log(res);
     
     this.movies=res.results;
 
   })
   onSelect(sel:any){
    
     console.log(sel)
     this.movieServ.getMovieDetails(sel.id).subscribe((res)=>{
       this.selected=res;
       console.log(res.adult);
       this.updateSelected.next(this.selected)
     });
     this.movieServ.getMovieProviders(sel.id).subscribe((res:any)=>{
      console.log(res);
      this.movieProvider=res.results.AR;

    })
     
  }
    


   
   updateSelSub:Subscription=this.updateSelected.subscribe((res)=>{
     this.selected=res;
     this.i=res;
   })
   hovered(id:number){
    //alert("mouseover event"+this.currentRating);
    console.log("oveejej"+this.currentRating);
    if(this.currentRating==0)
    this.movieServ.deleteReview(id);
    else
    this.movieServ.addReview(id,this.currentRating);

   }
   onDeleteRating(id:number){
    this.movieServ.deleteReview(id);
    this.currentRating = 0;
   }
   
   loadPage(p:number){
     console.log
    this.movies=this.movieServ.getUpcomingMovies(p);

   }

}
