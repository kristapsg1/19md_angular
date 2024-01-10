import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsInterface } from '../models/cars-interface';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  GET() {
    return this.http.get<CarsInterface[]>('http://localhost:3000/cars');
  }

  POST(cars: CarsInterface) {
    return this.http.post<CarsInterface>('http://localhost:3000/cars', cars);
  }

  DELETE(id: number) {
    return this.http.delete<CarsInterface>(`http://localhost:3000/cars/${id}`);
  }

  PUT(id: number, updateCar: CarsInterface) {
    return this.http.put<CarsInterface>(
      `http://localhost:3000/cars/${id}`,
      updateCar
    );
  }

  GETbyId(id: number) {
    return this.http.get<CarsInterface>(`http://localhost:3000/cars/${id}`);
  }
}
