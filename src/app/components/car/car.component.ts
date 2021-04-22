import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { CarDTOs } from 'src/app/models/carDTOs';
import { CarDTOsResponseModul } from 'src/app/models/carDTOsResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDTOs[] = [];
  apiUrl = 'https://localhost:44379/api/cars/getall';

  constructor(private htttpClient: HttpClient) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.htttpClient

      .get<CarDTOsResponseModul>(this.apiUrl)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }
}
