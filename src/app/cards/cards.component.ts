import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarsService } from '../services/api/cars/cars.service';
import { CarsInterface } from '../services/api/models/cars-interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  carsDataArr: CarsInterface[] = [];
  

  constructor(private service: CarsService) {}

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars() {
    this.service.GET().subscribe({
      next: (data) => {
        console.log(data);

        this.carsDataArr = data;
      },
    });
  }

}
