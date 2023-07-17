import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root',
})
export class MsgService {
  constructor(private httpClient: HttpClient ) {}

  getContent(): Observable<any> {
    return this.httpClient.get(`http://localhost:4000/warnings/`)
    //return of('You have been warned.');
  }

}
