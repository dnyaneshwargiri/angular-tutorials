import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

import {IonicModule} from '@ionic/angular'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { PaymentSuccessComponent } from './paymentSuccess/paymentSuccess.component';

@NgModule({
  declarations: [					
    AppComponent,
      ProductListComponent,
      HeaderComponent,
      CheckoutComponent,
      PageNotFoundComponent,
      PaymentSuccessComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
