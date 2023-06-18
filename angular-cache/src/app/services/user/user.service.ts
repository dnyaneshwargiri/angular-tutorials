import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, publishReplay, shareReplay, tap } from 'rxjs';
import { CacheService } from '../cache.service';

@Injectable()
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private cacheService: CacheService
  ) {}

  //   // with http interceptor
  //   public getUsers(): Observable<any> {
  //     return this.httpClient.get(
  //       `https://randomuser.me/api/?results=5`
  //     ) as Observable<any>;
  //   }

  //with service level caching
  //   public getUsers() {
  //     const cachedData = this.cacheService.get('users');
  //     if (cachedData) {
  //       return of(cachedData);
  //     }
  //     return this.httpClient.get<any>(`https://randomuser.me/api/?results=5`).pipe(
  //       tap((data: any) => {
  //         this.cacheService.put('users', data);
  //       })
  //     );
  //   }

    private users$!: Observable<any>;
    //with rxjs operators sharereply publishreply
    public getUsers() {
      if (!this.users$) {
        this.users$ = this.httpClient
          .get<any>(`https://randomuser.me/api/?results=5`)
          .pipe(
            tap((data: any) => {
              console.log('Fetched user data from API');
            }),
            publishReplay(1), // Cache and replay the response
            );
      }
    }

  //with local storage and session storage
//   public getUsers() {
//     const users = JSON.parse(localStorage.getItem('users')!);
//     if (!users) {
//       console.log('cache miss');
//       return this.httpClient.get(`https://randomuser.me/api/?results=5`).pipe(
//         tap((data: any) => {
//           localStorage.setItem('users', JSON.stringify(data));
//         })
//       );
//     }
//     console.log('cache hit');
//     return of(JSON.parse(localStorage.getItem('users')!));
//   }
}
