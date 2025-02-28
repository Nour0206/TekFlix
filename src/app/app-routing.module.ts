import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { MovieListComponentComponent } from './movie-list-component/movie-list-component.component';

const routes: Routes = [
{path: '', component :HomeComponent},
{ path: 'movies-list', component :MovieListComponentComponent},
{path: '**', component: NotFoundComponentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
