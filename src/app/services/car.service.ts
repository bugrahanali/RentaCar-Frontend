import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44379/api/Cars/getcardetaildtos';
  constructor(private htttpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>> {
    return this.htttpClient.get<ListResponseModel<CarDetails>>(this.apiUrl)    
  }
}
