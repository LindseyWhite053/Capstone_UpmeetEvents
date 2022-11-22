import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component:HomePageComponent},
  {path: 'favorites', component:FavoritesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
