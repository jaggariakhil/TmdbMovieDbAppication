import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpcomingMoviesComponent } from './Components/Movies/upcoming-movies/upcoming-movies.component';

import { LoginComponent } from './Components/login/login.component';
import { GetMovieDetailsComponent } from './Components/Movies/get-movie-details/get-movie-details.component';
import { GetReviewComponent } from './Components/Movies/get-review/get-review.component';
import { SelectComponent } from './Components/Selection/select/select.component';
import { PopularTvComponent } from './Components/TvShows/popular-tv/popular-tv.component';
import { TopRatedTvComponent } from './Components/TvShows/top-rated-tv/top-rated-tv.component';
import { LatestTvComponent } from './Components/TvShows/latest-tv/latest-tv.component';
import { MovieSelectComponent } from './Components/Selection/movie-select/movie-select.component';
import { TvShowsSelectComponent } from './Components/Selection/tv-shows-select/tv-shows-select.component';
import { TopRatedMoviesComponent } from './components/Movies/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/Movies/popular-movies/popular-movies.component';
import { GetMovieProvidersComponent } from './Components/Movies/get-movie-providers/get-movie-providers.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path:'getmovie',component:GetMovieDetailsComponent},
  {path:'getmovieproviders',component:GetMovieProvidersComponent},

    {path:'upcomingmovies',component:UpcomingMoviesComponent,canActivate:[AuthGuard]},
    {path:'upcomingmovies\:id',component:UpcomingMoviesComponent},
    {path:'topratedmovies',component:TopRatedMoviesComponent,canActivate:[AuthGuard]},
    {path:'popularmovies',component:PopularMoviesComponent,canActivate:[AuthGuard]},
    {path:'getreview',component:GetReviewComponent},
    {path:'',component:SelectComponent},
    {path:'populartv',component:PopularTvComponent,canActivate:[AuthGuard]},
    {path:'topratedtv',component:TopRatedTvComponent,canActivate:[AuthGuard]},
    {path:'latesttv',component:LatestTvComponent,canActivate:[AuthGuard]},
    {path:'movieselect',component:MovieSelectComponent},
    {path:'tvshowselect',component:TvShowsSelectComponent},

  

    {path:'login',component:LoginComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
