import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/api/cars/cars.service';
import { CarsInterface } from '../services/api/models/cars-interface';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css'],
})
export class CardDetailsComponent implements OnInit {
  car: CarsInterface = {} as CarsInterface;
  editSwitch: number | null = null;
  originalCar: CarsInterface = {} as CarsInterface;

  constructor(private route: ActivatedRoute, private service: CarsService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const carId = +params['id'];
      this.service.GETbyId(carId).subscribe((car) => {
        this.car = { ...car };
        this.originalCar = { ...car };
      });
    });
  }

  deleteCar(id: number) {
    this.service.DELETE(id).subscribe({
      next: (data) => {
        console.log('Car deleted successfullyyy', data);
      },
    });
  }

  editCar(id: number) {
    this.editSwitch = id;
  }

  cancelEdit() {
    this.car = { ...this.originalCar };
    this.editSwitch = null;
  }

  saveChanges(updateCar: CarsInterface) {
    this.service.PUT(updateCar.id, updateCar).subscribe({
      next: (data) => {
        console.log('Car updated successfully:', data);
        this.editSwitch = null;
      },
    });
  }
}
