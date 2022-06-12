import { TestBed } from '@angular/core/testing';

import { ApixuService } from './apixu.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from "@angular/common/http";
import {WeatherComponent} from "./weather/weather.component";

describe('ApixuService', () => {
  let service: ApixuService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
      declarations: [ WeatherComponent ],
      providers: [HttpClientModule]
    })
      .compileComponents();
  });

  it('should be created', () => {
    service = new ApixuService(httpClientSpy);
    expect(service).toBeDefined();
  });
});
