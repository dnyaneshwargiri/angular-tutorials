import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModuleModule } from './material-module/material-module.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipe } from 'src/core/truncate.pipe';
import { FontTypeDirective } from 'src/core/fontType.directive';
@NgModule({
  declarations: [	
    AppComponent,
      AgeCalculatorComponent,
      TruncatePipe,
      FontTypeDirective
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    NgbModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
