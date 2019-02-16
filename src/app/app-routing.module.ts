import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404PageComponent} from './shared/error404-page/error404-page.component';
import {HomePageComponent} from './shared/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: '404', component: Error404PageComponent},
  {path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
