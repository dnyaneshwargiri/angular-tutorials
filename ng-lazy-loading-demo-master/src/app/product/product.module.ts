import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
