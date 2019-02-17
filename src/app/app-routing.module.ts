import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Error404PageComponent} from './shared/error404-page/error404-page.component';
import {HomePageComponent} from './shared/home-page/home-page.component';
import { AdalGuard } from 'adal-angular4';


const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full', canActivate: [AdalGuard]},
  {path: '404', component: Error404PageComponent, canActivate: [AdalGuard] },
  {path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
