import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars;
      this.filteredCars = cars;
    });
  }

  applyFilters(filters: any) {
    this.filteredCars = this.cars.filter(car => {
      return car.price >= filters.minPrice && car.brand === filters.brand;
    });
  }
}