import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44379/api/customers/getall';
  constructor(private htttpClient: HttpClient) { }

  getCustomers():Observable<CustomerResponseModel> {
    return this.htttpClient.get<CustomerResponseModel>(this.apiUrl)
      
  }
}
