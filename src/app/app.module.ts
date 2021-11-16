import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { NgCastService } from './services/ng-cast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ NgCastService , {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
