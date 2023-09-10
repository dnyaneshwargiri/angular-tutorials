/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyService } from './my.service';

describe('Service: MyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyService]
    });
  });

  it('should ...', inject([MyService], (service: MyService) => {
    expect(service).toBeTruthy();
  }));
});
