import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarDetailsResponseModel } from '../models/carDetailsResponseModel';
import { RentalDetailsResponseModel } from '../models/rentalDetailsResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private htttpClient: HttpClient) { }
  apiUrl = 'https://localhost:44379/api/Rentals/getall';

  getRental():Observable<RentalDetailsResponseModel> {
    return this.htttpClient.get<RentalDetailsResponseModel>(this.apiUrl)    
  }
}
