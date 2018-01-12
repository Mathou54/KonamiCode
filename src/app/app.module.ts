import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {KonamiCodeModule} from './modules/konami-code/konami-code.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KonamiCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
