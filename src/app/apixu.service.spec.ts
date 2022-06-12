import { TestBed } from '@angular/core/testing';

import { ApixuService } from './apixu.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./weather/weather.component";

describe('ApixuService', () => {
  let service: ApixuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [ WeatherComponent ],
      providers: [HttpClientModule]
    })
      .compileComponents();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
