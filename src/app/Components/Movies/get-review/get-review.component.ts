import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-get-review',
  templateUrl: './get-review.component.html',
  styleUrls: ['./get-review.component.css']
})
export class GetReviewComponent implements OnInit {
  reviews:any;
  msg=""
  length=0;
  imagepath:string="https://image.tmdb.org/t/p/w1280/";

  constructor(private movieServ:MovieService) { }

  ngOnInit(): void {
  }

  onReview(f:NgForm){

    this.movieServ.getReviews(f.value.id).subscribe((res:any)=>{
      console.log(res);
      this.length=res.total_results;
      this.reviews=res.results;
     if(!this.length)
     this.msg="No reviews Found"

      

    })
  }
  

}
