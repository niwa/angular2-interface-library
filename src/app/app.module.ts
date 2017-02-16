import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserModule}  from '@angular/platform-browser';

import {NiwaInterfaceModule} from '../lib/niwa-interface.module';

@NgModule({
  imports: [
    BrowserModule,
    NiwaInterfaceModule
  ],
  declarations: [
    AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
