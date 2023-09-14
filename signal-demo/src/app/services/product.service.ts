import { Injectable, WritableSignal, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

public productList=signal<Product[]>([]);
constructor() { }

}
