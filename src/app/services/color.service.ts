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

  getColors():Observable<ListResponseModel<Color>> {
    return this.htttpClient.get<ListResponseModel<Color>>(this.apiUrl)    
  }


}
