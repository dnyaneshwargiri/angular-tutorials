import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor() {}
  productService = inject(ProductService);
  totalPrice: any;
  selectedProductList = this.productService.productList;

  ngOnInit() {
    this.totalPrice = computed(() => {
      return this.productService
        .productList()
        .reduce((acc: number, curr: Product) => acc + curr.price, 0);
    });
  }
  checkout(): void {
    // TO-DO
    return;
  }
}
