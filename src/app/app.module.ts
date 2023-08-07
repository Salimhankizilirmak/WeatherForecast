import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule burada eklenmeli
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { WeatherService } from './weather.service';
import { ReactiveFormsModule } from '@angular/forms'
import { BackgroundComponent } from './background/background.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent, BackgroundComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule,MatIconModule, MatInputModule,MatButtonModule, BrowserAnimationsModule],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule { }
