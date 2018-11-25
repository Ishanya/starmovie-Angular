import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'favourite',component:FavouriteListComponent},
  {path:'**',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
