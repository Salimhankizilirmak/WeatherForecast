import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';


  constructor(private weatherService: WeatherService,
    private activatedRoute:ActivatedRoute) {
      activatedRoute.params.subscribe(param=>{
        let city = param['city'];
        if(city){
          this.getResult(city);
        }else{
          null;
        }
      })
    }

  ngOnInit(): void {
    this.getResult('Çorum');
  }

  

  setQuery(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.getResult(this.searchQuery);
    }
  }

  getResult(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe(result => {
      this.displayResult(result);
    });
  }

  displayResult(result: any): void {

    let city = document.querySelector('.city') as HTMLElement;
    city.innerText = `${result.name}, ${result.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.date') as HTMLElement;
    date.innerText = this.dateBuilder(now);

    let hour = document.querySelector('.hour') as HTMLElement;
    hour.innerText = this.getHour(now);

    let temp = document.querySelector('.temp') as HTMLElement;
    temp.innerText = `${Math.round(result.main.temp)}°C`;

    let desc = document.querySelector('.description') as HTMLElement;
    desc.innerText = `${result.weather[0].description}`;

    let minmax = document.querySelector('.temprange') as HTMLElement;
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

    let humidity = document.querySelector('.humidity') as HTMLElement;
    humidity.innerText = `Nem : ${result.main.humidity}%`;

    let wind = document.querySelector('.wind') as HTMLElement;
    wind.innerText = `Rüzgar : ${result.wind.speed}m/s N`;
  }

  dateBuilder(d: Date): string {
    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    let days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  getHour(h: Date): string {
    let hour = h.getHours();
    let minute = h.getMinutes();

    return `${hour}:${minute}`;
  }
}
