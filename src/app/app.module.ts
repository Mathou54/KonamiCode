import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {KonamiCodeModule} from './modules/konami-code/konami-code.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KonamiCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
