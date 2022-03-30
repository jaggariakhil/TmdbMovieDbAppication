import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-get-movie-providers',
  templateUrl: './get-movie-providers.component.html',
  styleUrls: ['./get-movie-providers.component.css']
})
export class GetMovieProvidersComponent implements OnInit {
languages=["AR","US","LV","IN","HU","GB","ES","DK","CO","BR"]
movie:any;
msg="";

  i:any;
  count?:number=1;
imagepath:string="https://image.tmdb.org/t/p/w1280";
  constructor(private movieServ:MovieService) { }

  ngOnInit(): void {
  }
  onSearch(f:NgForm){

    this.movieServ.getMovieDetails(f.value.id).subscribe((res:any)=>{
      console.log(res);
      this.movie=res;

    })

    this.movieServ.getMovieProviders(f.value.id).subscribe((res:any)=>{
      const lan=f.value.searchByLanguage;
      console.log(res);
      this.i=res.results[lan];
      
      if(!this.i){
       this.msg="No Providers Found"
       
      }

      
 

    })
    //this.count= this.i.length
    
  }

}
