import { Component } from '@angular/core';
import { Film, FILMS } from '../models/film';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  films: Film[]=FILMS;
  constructor(private router:Router){

  }
  goToMoviesList(){
    this.router.navigate(['/movies-list']);
  }

}
