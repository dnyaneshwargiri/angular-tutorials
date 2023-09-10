import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserResponse } from './models/user';
@Injectable()
export class MyService {
  constructor(private httpClient: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.httpClient.get('https://reqres.in/api/users/').pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
}
