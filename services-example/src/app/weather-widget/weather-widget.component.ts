import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather-service.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
})
export class WeatherWidgetComponent implements OnInit {
  weatherDetails: any;
  constructor(private serviceRef: WeatherService) {}

  ngOnInit() {
    this.serviceRef.getWeatherDetails().subscribe((response: any) => {
      this.weatherDetails = response;
    });
  }
}
