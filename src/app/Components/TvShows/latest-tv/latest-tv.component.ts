import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-latest-tv',
  templateUrl: './latest-tv.component.html',
  styleUrls: ['./latest-tv.component.css']
})
export class LatestTvComponent implements OnInit {

  i:any;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";

  constructor(private mvServ:MovieService) { }

  ngOnInit(): void {
    this.i=this.mvServ.getLatestTvShows();
  }

popularTvSub:Subscription=this.mvServ.LatestTvShowsUpdated.subscribe((res)=>{
  this.i=res;
  console.log("aa"+res);
  //console.log("sss"+this.popularTvShows);
})

}
