import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TeaService } from './tea.service';
import { IceComponent } from './ice/ice.component';

@NgModule({
  declarations: [
    AppComponent,
    IceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TeaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
