import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car1={carId:1,carName:"BMW",brandId:1,unitPrice:62, unitsInStock:22}
  car2={carId:2,carName:"Fiat",brandId:1,unitPrice:62, unitsInStock:22}
  car3={carId:3,carName:"Mercedes",brandId:1,unitPrice:62, unitsInStock:22}
  car4={carId:4,carName:"Tesla",brandId:1,unitPrice:62, unitsInStock:22}

  cars:Car[]=[this.car1, this.car2, this.car3,this.car4]



  constructor() { }

  ngOnInit(): void {
  }

}
