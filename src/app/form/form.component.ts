import { Component, inject } from '@angular/core';
import { CarsInterface } from '../services/api/models/cars-interface';
import { CarsService } from '../services/api/cars/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  addcar: CarsInterface = {
    id: 0,
    picture: '',
    brand: '',
    year: '',
    about: '',
  };

  constructor(private service: CarsService, private router: Router) {}

  creatCard() {
    this.service.POST(this.addcar).subscribe({
      next: (data) => {
        console.log('car added', data);
        this.router.navigate(['/']);
      },
    });
  }
}
