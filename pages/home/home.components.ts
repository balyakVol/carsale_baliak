// src/app/modules/cars/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
      this.filteredCars = cars;
    });
  }

  applyFilters(filters: any) {
    this.carsService.filterCars(filters.brand, filters.maxPrice).subscribe(cars => {
      this.filteredCars = cars;
    });
  }
}