// src/app/modules/cars/components/filter-sidebar/filter-sidebar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
  @Output() filtersChanged = new EventEmitter<any>();
  filterForm: FormGroup;

  brands = ['Toyota', 'BMW', 'Audi', 'Honda'];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      brand: [''],
      maxPrice: [null]
    });
  }

  applyFilters() {
    this.filtersChanged.emit(this.filterForm.value);
  }
}