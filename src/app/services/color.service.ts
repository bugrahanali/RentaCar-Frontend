import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44379/api/Colors/getall';
  constructor(private htttpClient: HttpClient) { }

<<<<<<< HEAD
  getColors():Observable<ListResponseModel<Color>> {
=======
  getCars():Observable<ListResponseModel<Color>> {
>>>>>>> b552ea1845d12f2ef2920fb97f64d7a71f7aed7c
    return this.htttpClient.get<ListResponseModel<Color>>(this.apiUrl)    
  }


}
