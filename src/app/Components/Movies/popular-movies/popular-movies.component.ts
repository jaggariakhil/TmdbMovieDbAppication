import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  page=0;
  collectionSize=1000;
  popularMovies:any;
  currentRating = 0;
  movieProvider:any;
  

  selected:any;
  i:any=0;
  updateSelected=new Subject<any>();
  imagepath:string="https://image.tmdb.org/t/p/w1280/";
   
 
   constructor(private movieServ:MovieService) { }
 
   ngOnInit(): void {
     console.log("popular mvs")
    this.popularMovies=this.movieServ.getPopularMovies(1);
    console.log(this.movieServ.getPopularMovies(1));
    this.currentRating = 0;
    
   }
   popularMoviesUpdated:Subscription =this.movieServ.popularMovieUpdated.subscribe((res:any)=> {
     console.log(res.results);
     console.log("popula mvs"+res);
     console.log(res);
     
     this.popularMovies=res.results;
 
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
    ratingHover(event:number){
     // alert("mouseover event"+event);
     }

     hovered(id:number){
      
      console.log("oveejej"+this.currentRating);
      
      
      this.movieServ.addReview(id,this.currentRating);
     // this.currentRating=0;

     }
     
     onDeleteRating(id:number){
      this.movieServ.deleteReview(id);
     this.currentRating = 0;
     }
       
   loadPage(p:number){
    console.log
   this.popularMovies=this.movieServ.getPopularMovies(p);

  }



}
