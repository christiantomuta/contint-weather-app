import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  getWeather(location: string) {
    return this.http.get(
      'http://api.weatherstack.com/current?access_key=7628a753500ccb135c5c0d33c552f02a&query=' + location
    );
  }
}
