import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheService } from '../services/cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cacheService: CacheService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is cacheable
    if (request.method !== 'GET') {
      return next.handle(request);
    }

    const cachedResponse = this.cacheService.get(request.url);
    if (cachedResponse) {
      // Return cached response if available
      return of(cachedResponse);
    }

    // Continue with the request and cache the response
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.Response) {
          this.cacheService.put(request.url, event);
        }
      })
    );
  }
}
