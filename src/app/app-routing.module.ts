import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'movies',
    component:MenuComponent
  },
  {
    path:'movie/:id',
    component:MovieViewComponent
  },

  {
    path:'**',
    component:NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
