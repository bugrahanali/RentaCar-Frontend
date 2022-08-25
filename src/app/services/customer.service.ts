import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44379/api/customers/getall';
  constructor(private htttpClient: HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>> {
    return this.htttpClient.get<ListResponseModel<Customer>>(this.apiUrl)
      
  }
}
