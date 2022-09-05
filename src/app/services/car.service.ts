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
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getcardetaildtos"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getcardetailbybrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }
  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl+"Cars/getcardetailbyColorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)    
  }
  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetails>> {
    let newPath = this.apiUrl + 'Cars/getcardetailbycarId?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  
  getImagesByCarId(carId: number): Observable<ListResponseModel<CarDetails>> {  
    let newPath = this.apiUrl + 'Cars/getbycarıd?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }
  

  

}
