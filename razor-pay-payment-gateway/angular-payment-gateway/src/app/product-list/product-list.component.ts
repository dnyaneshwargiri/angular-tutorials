import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product-service/product.service';
import { Router } from '@angular/router';

declare var razorPay: any;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Product[] | undefined;

  constructor(private productService: ProductService, private router: Router) {}
  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.products = response;      
    });
  }

  addToCart(product: Product) {
    // Implement your cart logic here
    console.log('Product added to cart:', product);
  }
  buyNow(product: Product) {
    // Implement your checkout logic here
    this.productService.createOrder(product).subscribe((response: any) => {
      if (response.status == 200) {
        const paymentOrderId = response.data.id;
        this.productService.setSelectedProductForCheckout(product)
        this.router.navigateByUrl(`/checkout/${paymentOrderId}`);
      } else {
        alert('server side error cant process order');
      }
    });
  }
}
