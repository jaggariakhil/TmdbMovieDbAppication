import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  topRatedMovies:any;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";
  selected:any;
  i:any=0;
  updateSelected=new Subject<any>();
  movieProvider:any;

  currentRating = 0;
  page=0;
  collectionSize=10;
   
 
   constructor(private movieServ:MovieService) { }
 
   ngOnInit(): void {
    this.topRatedMovies=this.movieServ.getTopRatedMovies(1);
    
   }
   topRatedMoviesUpdated:Subscription =this.movieServ.topRatedMovieUpdated.subscribe((res:any)=> {
     console.log(res.results[0]);
     console.log(res);
     
     this.topRatedMovies=res.results;  
   })
   onSelect(sel:any){
    
    console.log(sel)
    this.movieServ.getMovieDetails(sel.id).subscribe((res)=>{
      this.selected=res;
      this.i=res;
      console.log(res.adult);
      this.updateSelected.next(this.selected)
    });
    this.movieServ.getMovieProviders(sel.id).subscribe((res:any)=>{
      console.log(res);
      this.movieProvider=res.results.AR;

    })
  }
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
    
   this.topRatedMovies=this.movieServ.getTopRatedMovies(p);

  }

}
