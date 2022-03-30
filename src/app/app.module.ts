import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UpcomingMoviesComponent } from './Components/Movies/upcoming-movies/upcoming-movies.component';
import { GetMovieDetailsComponent } from './Components/Movies/get-movie-details/get-movie-details.component';
import { GetReviewComponent } from './Components/Movies/get-review/get-review.component';
import { SelectComponent } from './Components/Selection/select/select.component';
import { PopularTvComponent } from './Components/TvShows/popular-tv/popular-tv.component';
import { LatestTvComponent } from './Components/TvShows/latest-tv/latest-tv.component';
import { TopRatedTvComponent } from './Components/TvShows/top-rated-tv/top-rated-tv.component';
import { TvShowsSelectComponent } from './Components/Selection/tv-shows-select/tv-shows-select.component';
import { MovieSelectComponent } from './Components/Selection/movie-select/movie-select.component';
import { TopRatedMoviesComponent } from './components/Movies/top-rated-movies/top-rated-movies.component';
import { PopularMoviesComponent } from './components/Movies/popular-movies/popular-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetMovieProvidersComponent } from './Components/Movies/get-movie-providers/get-movie-providers.component';
import {MatPaginatorModule} from '@angular/material/paginator';





@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    LoginComponent,
    UpcomingMoviesComponent,
    GetMovieDetailsComponent,
    GetReviewComponent,
    SelectComponent,
    PopularTvComponent,
    LatestTvComponent,
    TopRatedTvComponent,
    TvShowsSelectComponent,
    MovieSelectComponent,
    TopRatedMoviesComponent,
    PopularMoviesComponent,
    GetMovieProvidersComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  HttpClientModule,
  FormsModule,
  MatExpansionModule,
  MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  BrowserAnimationsModule,
  MatPaginatorModule,
  AppRoutingModule,
  NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
