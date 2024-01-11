import { Component } from '@angular/core';
import { CarsInterface } from '../services/api/models/cars-interface';
import { CarsService } from '../services/api/cars/cars.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(
    private service: CarsService,
    private router: Router,
    private popUp: MatSnackBar
  ) {}

  popUpMessage(message: string, action: string) {
    this.popUp.open(message, action, {
      duration: 5000,
      verticalPosition: 'top',
    });
  }

  creatCard() {
    this.service.POST(this.addcar).subscribe({
      next: (data) => {
        console.log('car added', data);
        this.popUpMessage('Car added!', 'Close');
        this.router.navigate(['/']);
      },
    });
  }
}
