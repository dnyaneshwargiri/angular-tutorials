import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    CheckoutComponent,
    ProductComponent,
  ],
  imports: [BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
