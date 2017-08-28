import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IceComponent } from './ice/ice.component';
import { HelloPipe } from './ice/hello.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IceComponent,
    HelloPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
