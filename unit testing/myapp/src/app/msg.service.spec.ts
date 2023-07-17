/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, inject, tick } from '@angular/core/testing';
import { MsgService } from './msg.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('Service: Msg', () => {
  let service: MsgService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsgService],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule
    });
    service = TestBed.inject(MsgService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
  });

  it('should ...', inject([MsgService], (service: MsgService) => {
    expect(service).toBeTruthy();
  }));

  afterEach(() => {
    httpMock.verify(); // Verifies that no outstanding requests are pending
  });
  // it('should return the expected response from the API', fakeAsync(() => {
  //   const mockResponse = { data: 'You have been warned.' };
  //   spyOn(service['httpClient'], 'get').and.returnValue(of(mockResponse));
  //   let response: any;
  //   service.getContent().subscribe(res => {
  //     response = res;
  //   });
  //   tick(); // Synchronize with the asynchronous operation
  //   expect(response).toEqual(mockResponse);
  // }));

  it('should return the expected response from the API', (done) => {
    const mockResponse = { data: 'example' };
    const request = httpClient.get<any>('http://localhost:4000/warnings/'); // Replace with your actual API endpoint
    request.subscribe();   
    service.getContent().subscribe(response => {
      expect(response).toEqual(mockResponse);
      console.log(`==========================${JSON.stringify(response)}`);
      done();
    });
  });
 
});
