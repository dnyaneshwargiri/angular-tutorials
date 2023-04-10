import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-widgets',
  templateUrl: './material-widgets.component.html',
  styleUrls: ['./material-widgets.component.css']
})
export class MaterialWidgetsComponent implements OnInit {
  disableControl: boolean = false;
  constructor(private _snackBar: MatSnackBar, private _formBuilder: FormBuilder) { 

  }

  ngOnInit() {
  }
  hidden = false;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
