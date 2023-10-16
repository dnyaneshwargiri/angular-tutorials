import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormGeneratorService } from 'src/app/services/form-generator.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  @Input() jsonConfig: any;
  form!: FormGroup;

  constructor(private formGeneratorService: FormGeneratorService) {}

  ngOnInit(): void {
    this.form = this.formGeneratorService.createForm(this.jsonConfig);
  }

  formatLabel(value: number): string {
    return `${value}€`;
  }
  onSubmit() {
    console.log(this.form.value);
  }
}
