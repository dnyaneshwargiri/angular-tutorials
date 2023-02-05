import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view-1/view-1.component';
import { View2Component } from './view-2/view-2.component';
import { View3Component } from './view-3/view-3.component';


@NgModule({
  declarations: [			
    AppComponent,
      View1Component,
      View2Component,
      View3Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
