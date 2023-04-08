import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';

@NgModule({
  declarations: [		
    AppComponent,
      UserSignupFormComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
