import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Image } from '../models/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = 'https://localhost:44379/api/';

  constructor(private httpClient: HttpClient) { }

  getImages(): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + 'Images/getall';
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
  getImagesByCarId(carId: number): Observable<ListResponseModel<Image>> {
    let newPath = this.apiUrl + 'Images/getbycarid?id=' + carId;
    return this.httpClient.get<ListResponseModel<Image>>(newPath);
  }
}
