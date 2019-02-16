import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page/home-page.component';
import {Error404PageComponent} from './error404-page/error404-page.component';
@NgModule({
    imports: [
    ],
    declarations: [
      HomePageComponent,
      Error404PageComponent
    ],
    exports: [
    ]
  })

  export class SharedModule {
}
