import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-get-movie-details',
  templateUrl: './get-movie-details.component.html',
  styleUrls: ['./get-movie-details.component.css']
})
export class GetMovieDetailsComponent implements OnInit {
 
i:any;

msg="";
imagepath:string="https://image.tmdb.org/t/p/w1280/";
  constructor(private movieServ:MovieService) { }

  ngOnInit(): void {
  }
  onSearch(f:NgForm){
    this.msg="No Movies Found"
    

    this.movieServ.getMovieDetails(f.value.id).subscribe((res:any)=>{
      console.log(res);
      this.i=res;

    })
  }

}
