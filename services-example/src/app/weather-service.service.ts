import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  public getWeatherDetails(): any {
    return this.httpClient.get(
      `http://api.weatherstack.com/current?access_key=6efd30250853f914d143650aa4af8905&query=Pune`
    );
  }
}
