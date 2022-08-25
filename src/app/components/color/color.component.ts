import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  colors: Color[] = [];
  currentColor: Color;
<<<<<<< HEAD
  
=======
  dataLoaded = false;
>>>>>>> b552ea1845d12f2ef2920fb97f64d7a71f7aed7c

  constructor(private colorService: ColorService, private router: Router) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
     
=======
    this.getColor();
  }

  getColor() {
    this.colorService.getCars().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
>>>>>>> b552ea1845d12f2ef2920fb97f64d7a71f7aed7c
    });
  }
  setCurrentColor(color: Color) {
    if (this.currentColor == color) {
      this.currentColor = null;
      this.router.navigate(['/cars']);
    } else {
      this.currentColor = color;
    }
  }
  getCurrentColor(color:Color){
    if (this.currentColor === color)  {
      return "list-group-item active";
    } else {
      return "list-group-item"
    }
  }
}
