import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { Image } from 'src/app/models/image';
import { CarService } from 'src/app/services/car.service';
import { CartService } from 'src/app/services/cart.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetails;
  dataLoaded=false;
  images:Image[];
  

  constructor(private carService:CarService, 
    private imageService:ImageService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['carId']) {
        this.getCarDetailsByCarId(params['carId']);
        this.getImagesByCarId(params['carId']);
      }
    })
  }


  getCarDetailsByCarId(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetails = response.data[0];
      this.dataLoaded = true;
    });
  }
 
  getImagesByCarId(carId: number) {
    this.imageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;
      this.dataLoaded = true;
    });
  }

  addToCart(carDetails:CarDetails){
    if(carDetails.carId===1){
     
      this.toastrService.error("Hata", "bu ürün sepete eklenemez")
    }else{
      
      this.toastrService.success("Kiralanacak Arabalara Eklendi", carDetails.carName)
      this.cartService.addToCart(carDetails);
    }
    
  }
  

}
