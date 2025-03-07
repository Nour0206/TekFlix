import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';
import { MovieDetailComponentComponent } from './movie-detail-component/movie-detail-component.component';
import { FavoritesComponentComponent } from './favorites-component/favorites-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';

const routes=[
  {path:'',component:HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponentComponent,
    MovieListComponentComponent,
    MovieDetailComponentComponent,
    FavoritesComponentComponent,
    SearchComponentComponent,
    SingleMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
