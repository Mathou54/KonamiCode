import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KonamiCodeComponent} from './konami-code.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [KonamiCodeComponent],
  exports: [KonamiCodeComponent]
})
export class KonamiCodeModule {
}
