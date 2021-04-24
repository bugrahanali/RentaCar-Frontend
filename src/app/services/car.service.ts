import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailsResponseModel } from '../models/carDetailsResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = 'https://localhost:44379/api/Cars/getcardetaildtos';
  constructor(private htttpClient: HttpClient) { }

  getCars():Observable<CarDetailsResponseModel> {
    return this.htttpClient.get<CarDetailsResponseModel>(this.apiUrl)    
  }
}
