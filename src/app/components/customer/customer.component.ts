import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from 'src/app/models/customerResponseModel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers:Customer[]=[]
  apiUrl = 'https://localhost:44379/api/customers/getall';

  constructor(private htttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.htttpClient
    
      .get<CustomerResponseModel>(this.apiUrl)
      .subscribe((response) => {
        console.log(response);
        this.customers=response.data
      });
  }

}
