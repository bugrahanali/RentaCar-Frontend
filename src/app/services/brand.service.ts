import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44379/api/brands/getall';

  constructor(private htttpClient: HttpClient) { }

  getBrands():Observable<BrandResponseModel>  {
    return this.htttpClient.get<BrandResponseModel>(this.apiUrl)
      
  }
}
