import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user/user.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CacheService } from './services/cache.service';
import { CachingInterceptor } from './http-interceptors/http-interceptor';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    UserService,
    CacheService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: CachingInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
