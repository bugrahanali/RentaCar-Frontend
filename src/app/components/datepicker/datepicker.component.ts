import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  form: FormGroup;
  comparisonStart =new Date('2022-09-20');
  comparisonEnd =new Date('2022-09-21');
  constructor(  private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      daterange: new FormGroup({ 
        start: new FormControl(),
        end:new FormControl  }),
    });
  }
  

  onSubmit(){
    console.log(this.form.value) 
    
  }  
  unavailableDays(calendarDate :Date):boolean {
    return calendarDate >new Date();
  }

}
