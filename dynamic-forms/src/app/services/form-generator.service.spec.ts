/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FormGeneratorService } from './form-generator.service';

describe('Service: FormGenerator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormGeneratorService]
    });
  });

  it('should ...', inject([FormGeneratorService], (service: FormGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
