import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  birthdate = new FormControl();
  ageYears = 0;
  ageDays = 0;
  ageMinutes = 0;
  myText ="a quick fox jumped over the lazy dog"
  
  calculateAge() {
    const timeDiff = Math.abs(Date.now() - this.birthdate.value.getTime());
    this.ageYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25));
    this.ageDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    this.ageMinutes = Math.floor(timeDiff / (1000 * 60));
  }

  dateChanged(event: MatDatepickerInputEvent<Date>) {
    this.calculateAge();
  }

}
