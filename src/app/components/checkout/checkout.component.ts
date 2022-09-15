import { Image } from './../../models/image';
import { ImageService } from './../../services/image.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetails } from './../../models/carDetails';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  carDetails: CarDetails;
  images: Image[];
  path = 'https://localhost:44379/';
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarforCheckout(params['carId']);
        this.getImagesByCarId(params['carId']);
      }
    });
  }

  getCarforCheckout(carId: number) {
    this.carService.getCarDetailsByCarId(carId).subscribe((response) => {
      this.carDetails = response.data[0];
      console.log(this.carDetails);
    });
  }
  getImagesByCarId(carId: number) {
    this.imageService.getImagesByCarId(carId).subscribe((response) => {
      this.images = response.data;

      console.log(response.data);
    });
  }
  getImages(image: string) {
    if (image) {
      let newPath = this.path + image;
      return newPath;
    } else {
      let defaultPath = this.path + '\\Images\\default.jpg';
      return defaultPath;
    }
  }
}
