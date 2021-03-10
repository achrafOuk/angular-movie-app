import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieViewComponent } from './movie-view/movie-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotFoundComponent,
    HomeComponent,
    MoviesComponent,
    MovieViewComponent

  ],
  imports: [
    BrowserModule,
AppRoutingModule,
HttpClientModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
