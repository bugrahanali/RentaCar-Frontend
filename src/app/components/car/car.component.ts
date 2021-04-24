import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDetails } from 'src/app/models/carDetails';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetails[] = [];
  dataLoaded=false;

  

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
    
  }
}
