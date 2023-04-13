import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-card/weather-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherService } from './weather-service.service';

@NgModule({
  declarations: [AppComponent, WeatherWidgetComponent, WeatherCardComponent],
  imports: [BrowserModule, HttpClientModule, MatCardModule, MatIconModule, BrowserAnimationsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
