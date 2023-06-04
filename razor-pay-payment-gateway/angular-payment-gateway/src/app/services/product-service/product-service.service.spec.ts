/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductServiceService } from './product-service.service';

describe('Service: ProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductServiceService]
    });
  });

  it('should ...', inject([ProductServiceService], (service: ProductServiceService) => {
    expect(service).toBeTruthy();
  }));
});
