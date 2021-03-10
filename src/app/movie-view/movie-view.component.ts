import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  public data:any; 
  constructor( public movie:ActivatedRoute,private movies: MoviesServiceService) {
  }

  ngOnInit(): void {
    this.movie.paramMap.subscribe(param=>{
    const id=param.get('id');
    const movieData = this.movies.getFilm(id).subscribe(item=>{
      this.data =new Array();
    let key:keyof typeof item;
    this.data.push(item);
    });
    }); }

}
