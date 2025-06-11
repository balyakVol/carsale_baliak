import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private apiUrl = 'http://localhost:3000/cars'; // Для JSON-server (або ваш бекенд)

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCarById(id: number): Observable<Car | undefined> {
    return this.http.get<Car[]>(this.apiUrl).pipe(
      map(cars => cars.find(car => car.id === id))
    );
  }

  filterCars(brand: string, maxPrice: number): Observable<Car[]> {
    return this.getCars().pipe(
      map(cars => cars.filter(car => 
        (brand ? car.brand === brand : true) &&
        (maxPrice ? car.price <= maxPrice : true)
      ))
    );
  }
}