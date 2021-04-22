import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brand:Brand[]=[]
  apiUrl = 'https://localhost:44379/api/brands/getall';



  constructor(private htttpClient: HttpClient) { }

  ngOnInit(): void {
    
  }

}
