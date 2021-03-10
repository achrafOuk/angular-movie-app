import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {

  constructor(private http:HttpClient) {
     }
  public getLink()
  {
const key:string="eaca731abdfce28a8acb8de2fd31e7d8";

let url:string="https://api.themoviedb.org/3/movie/popular?api_key="+key;
    return this.http.get(url);

  }
  public getFilm(id:any)
  {
const key:string="eaca731abdfce28a8acb8de2fd31e7d8";
    let url:string=`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`;
    return this.http.get(url);
  }
}
