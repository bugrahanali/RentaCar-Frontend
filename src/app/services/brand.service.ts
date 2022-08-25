import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'https://localhost:44379/api/brands/getall';

  constructor(private htttpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
<<<<<<< HEAD
    
=======
>>>>>>> b552ea1845d12f2ef2920fb97f64d7a71f7aed7c
    return this.htttpClient.get<ListResponseModel<Brand>>(this.apiUrl)
      
  }
}
