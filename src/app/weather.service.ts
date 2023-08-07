// weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '3f40c2955752bab42ef9f84088cae0af'; // OpenWeatherAPI key'inizi buraya ekleyin veya yönettiğiniz bir şekilde kullanın

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=tr`;
    return this.http.get(url);
  }
}

