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
  editSwitch: number | null = null;
  selectedBrandDetails: CarsInterface | null = null;

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

  deleteCar(id: number) {
    this.service.DELETE(id).subscribe({
      next: (data) => {
        console.log('Car deleted successfully', data);
        this.getAllCars();
      },
    });
  }

  editCar(id: number) {
    this.editSwitch = id;
  }

  cancelEdit() {
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

  showBrandDetails(brandDetails: CarsInterface): void {
    this.selectedBrandDetails = brandDetails;
  }

  hideBrandDetails(): void {
    this.selectedBrandDetails = null;
  }
}
