
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = '';
  form = new FormGroup({
    city: new FormControl('çorum',Validators.required),
});
  constructor(private weatherService: WeatherService,private router:Router) { } // WeatherService'i enjekte edin

  ngOnInit(): void {
    this.onSubmit();
  }
  onSubmit(){
    let city = this.form.get('city').value;
    this.router.navigate(['city',city]);
  }

  searchWeather(event: Event): void {
    event.preventDefault(); // Sayfa yenilemesini önlemek için formun default davranışını engelle
  
    this.weatherService.getWeatherData(this.searchQuery).subscribe((result: any) => {
      console.log(result); // API yanıtını konsola yazdırabilirsiniz veya başka işlemler yapabilirsiniz
    });
  }
  
}


