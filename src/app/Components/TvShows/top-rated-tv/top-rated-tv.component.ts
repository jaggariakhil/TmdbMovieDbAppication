import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-top-rated-tv',
  templateUrl: './top-rated-tv.component.html',
  styleUrls: ['./top-rated-tv.component.css']
})
export class TopRatedTvComponent implements OnInit {

  TopRatedShows:any;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";

  constructor(private mvServ:MovieService) { }

  ngOnInit(): void {
    this.TopRatedShows=this.mvServ.getTopRatedTvShows();
  }

TopRatedTvSub:Subscription=this.mvServ.TopRatedTvShowsUpdated.subscribe((res)=>{
  this.TopRatedShows=res;
  console.log(res);
  //console.log("sss"+this.popularTvShows);
})

}
