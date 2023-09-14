import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  productService = inject(ProductService);
  items: Product[] = [
    { name: 'Atomic Habits', price: 10 },
    { name: 'To Kill MockingBird', price: 15 },
    { name: 'The Great Gatsby', price: 20 },
  ];

  ngOnInit(): void {}
  addItem(item: Product) {
    this.productService.productList.mutate((products) => products.push(item));
  }

  removeItem(item: Product) {
    this.productService.productList.update((products) =>
      products.filter((product) => product.name !== item.name)
    );
  }

  resetProduct(): void {
    // setting a new value, replacing the existing
    this.productService.productList.set([]);
  }
}
