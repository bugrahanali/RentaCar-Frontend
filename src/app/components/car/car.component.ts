import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { CarDetails } from 'src/app/models/carDetails';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarDetails[] = [];
  dataLoaded = false;
  images:Image[];
  currentCar : Car;

  path="https://localhost:44379/"
  filterText:"";  

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService:CartService,
    private toastrService:ToastrService,
    private imageService:ImageService
  ) {}


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['brandId']) {
        this.getCarsDetailsByBrandId(params['brandId']);
      } 
    })
    this.activatedRoute.params.subscribe(params => {
      if (params['colorId']) {
        this.getCarsDetailsByColorId(params['colorId']);
      } 
    })
    this.getCars()
    
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(this.cars)
      
    });
  }

  getCarsDetailsByBrandId(brandId:number) {
    
    this.carService.getCarsDetailsByBrandId(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      console.log(this.cars);
    });
  }

  getCarsDetailsByColorId(colorId:number) {
    
    this.carService.getCarsDetailsByColorId(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  
  addToCart(car:CarDetails){
    this.cartService.addToCart(car)
    this.toastrService.success("Sepete eklendi", car.carName)
    console.log(car)

  }

  getImages() {
    this.imageService.getImages().subscribe((response) => {
      this.images = response.data;
    });
  }

  getImagePath(image: string) {
    if (image) {
      let newPath = this.path + image;
      return newPath;
    } else {
      let defaultPath = this.path + '\\Images\\default.jpg';
      return defaultPath;
    }
  }

  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCar(car: Car) {
   
    if (this.currentCar == car) {
      this.currentCar = null;
      this.router.navigate(['cars']);
    } else {
      this.currentCar = car;
    }
  }

}
