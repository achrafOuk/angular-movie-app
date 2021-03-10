import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
    public data:any;
    public popular:any;
  constructor(private movies: MoviesServiceService)  {
  }
  ngOnInit(){
       this.movies.getLink().subscribe((item)=>{
        let key:keyof typeof item;
        this.popular=new Array();
        for( key in item)
        {
          if(key.toString()==="results")
          {
            this.popular.push(item[key]);
                      }
                  }
            });
  }
  

}
