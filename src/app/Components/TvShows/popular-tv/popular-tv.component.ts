import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-popular-tv',
  templateUrl: './popular-tv.component.html',
  styleUrls: ['./popular-tv.component.css']
})
export class PopularTvComponent implements OnInit {
  popularTvShows:any;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";

  constructor(private mvServ:MovieService) { }

  ngOnInit(): void {
    this.popularTvShows=this.mvServ.getPopularTvShows();
  }

popularTvSub:Subscription=this.mvServ.popularTvShowsUpdated.subscribe((res)=>{
  this.popularTvShows=res;
  console.log(res);
  console.log("sss"+this.popularTvShows);
})
}
