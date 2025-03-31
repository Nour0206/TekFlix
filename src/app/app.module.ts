import { Component, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';
import { FavoritesComponentComponent } from './favorites-component/favorites-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';

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
    FavoritesComponentComponent,
    SearchComponentComponent,
    SingleMovieComponent,
    MovieDetailsComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    FormReactiveComponent,
    FavoritesComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule ,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
