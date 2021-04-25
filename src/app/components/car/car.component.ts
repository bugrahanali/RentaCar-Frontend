import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDetails } from 'src/app/models/carDetails';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetails[] = [];
  dataLoaded = false;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.getCarsDetailsByBrandId(params['brandId']);
      } else {
        this.getCars();
      }
    })
    this.activatedRoute.params.subscribe(params => {
      if (params['colorId']) {
        this.getCarsDetailsByColorId(params['colorId']);
      } else {
        this.getCars();
      }
    })
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByBrandId(brandId:number) {
    
    this.carService.getCarsDetailsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsDetailsByColorId(colorId:number) {
    
    this.carService.getCarsDetailsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }




}
