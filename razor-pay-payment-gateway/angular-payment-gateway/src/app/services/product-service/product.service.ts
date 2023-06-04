import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, retry } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
 
  baseUrl = 'http://localhost:3000';
  selectedProductForCheckout!: Product;
  razorPayKeyconfig=".../../../../../assets/configs/keys.json";
  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}
  getProducts(): Observable<Product[]> {
    // Replace this with your actual product data
    return this.httpClient.get(
      `https://fakestoreapi.com/products/`
    ) as Observable<Product[]>;
  }

  getSelectedProductForCheckout() {
    return this.selectedProductForCheckout;
  }

  setSelectedProductForCheckout(product: Product) {
    this.selectedProductForCheckout = product;
  }

  createOrder(product: Product) {
    const payload = {
      productName: product.title,
      amount: product.price,
    };
    return this.httpClient.post(`${this.baseUrl}/api/createPaymentOrder`, {
      payload,
    });
  }

  verifyPaymentSignature(checkoutResponse: any, original_order_id: string) {
    const payload = {
      razorpay_signature: checkoutResponse.razorpay_signature,
      original_order_id: original_order_id,
      razorpay_payment_id: checkoutResponse.razorpay_payment_id,
    };

    return this.httpClient.post(`${this.baseUrl}/api/validatePayment`, {
      payload,
    });
  }

  get nativeWindow(): any {
    if (isPlatformBrowser(this.platformId)) {
      return _window();
    }
  }
  getRazorPayKey() {
    return this.httpClient.get(this.razorPayKeyconfig);
  }
}
function _window(): any {
  // return the global native browser window object
  return window;
}
