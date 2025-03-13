import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },
{ path: 'movies-list', component :MovieListComponentComponent},
{ path: 'movie-details/:id', component: MovieDetailsComponent },
{ path: 'about', component: AboutComponentComponent },
{ path: 'contact', component: ContactComponentComponent },
{path: '**', component: NotFoundComponentComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
