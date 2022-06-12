import {Component, NgModule, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApixuService} from "../apixu.service";
import {BrowserModule} from "@angular/platform-browser";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public location: FormGroup;
  public weatherData: any;
  constructor(private formBuilder: FormBuilder,
              private apixuService: ApixuService) { this.location = this.formBuilder.group({ location: [""] }); } ngOnInit(): void{

  }

  sendToAPIXU(formValues: any) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => this.weatherData = data)
    console.log(this.weatherData);
  }
}


