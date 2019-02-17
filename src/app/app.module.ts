import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { AdalService, AdalGuard } from 'adal-angular4';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AdalService, AdalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
