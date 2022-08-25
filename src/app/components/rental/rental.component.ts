import { Component, OnInit } from '@angular/core';
import { RentalDetails } from 'src/app/models/rentalDetails';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:RentalDetails[]=[];
  dataLoaded=false;

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getRental()

  }

  getRental(){
    this.rentalService.getRental().subscribe(response=>{
      this.rentals=response.data;
      this.dataLoaded=true;
    })
  }
}
