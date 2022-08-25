import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetails } from '../models/rentalDetails';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private htttpClient: HttpClient) { }
  apiUrl = 'https://localhost:44379/api/Rentals/getall';

  getRental():Observable<ListResponseModel<RentalDetails>> {
    return this.htttpClient.get<ListResponseModel<RentalDetails>>(this.apiUrl)    
  }
}
