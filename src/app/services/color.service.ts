import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ColorResponseModel } from '../models/color.ResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44379/api/Colors/getall';
  constructor(private htttpClient: HttpClient) { }

  getCars():Observable<ColorResponseModel> {
    return this.htttpClient.get<ColorResponseModel>(this.apiUrl)    
  }


}
