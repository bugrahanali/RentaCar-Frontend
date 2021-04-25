import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44379/api/';
  constructor(private htttpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getcardetaildtos"
    return this.htttpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getCarDetailsByBrandId?brandId="+brandId
    return this.htttpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }
  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getCarDetailsByColorId?colorId="+colorId
    return this.htttpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }


}
