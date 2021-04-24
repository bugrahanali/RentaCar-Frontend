import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[]
  currentBrand : Brand;
  dataLoaded=false;



  constructor(private brandService:BrandService, private router: Router ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;
      });
  }
  setCurrentBrand(brand:Brand ){
    if (this.currentBrand == brand) {
      this.currentBrand = null;
      this.router.navigate(["/cars"])
    } else {
      this.currentBrand=brand;
    }
    
  }
  getCurrentBrand(brand:Brand){
    if (this.currentBrand === brand)  {
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }

}
