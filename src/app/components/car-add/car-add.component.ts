import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm :FormGroup;
  constructor(private formBuilder:FormBuilder, private carService:CarService,private toasterService:ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm(){
    this.carAddForm=this.formBuilder.group({
      carName:["",Validators.required],
      dailyPrice:["",Validators.required],
      modelYear:["",Validators.required],
      brandId:["",Validators.required],
      colorId:["",Validators.required],
      description:["",Validators.required],
      imagePath:["",Validators.required]
    })
  }

  add(){
    try{
      let carModel = Object.assign({}, this.carAddForm.value)
      this.carService.add(carModel).subscribe(response=>{
        this.toasterService.success(response.message,"Başarılı")
      })
      
    }catch(error){
      this.toasterService.error("Lütfen eksikleri doldurunuz")

    }
    
  }
}
