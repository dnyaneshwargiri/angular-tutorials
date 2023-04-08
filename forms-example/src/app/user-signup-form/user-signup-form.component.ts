import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup-form',
  templateUrl: './user-signup-form.component.html',
  styleUrls: ['./user-signup-form.component.css'],
})
export class UserSignupFormComponent implements OnInit {
  generalInfoForm: FormGroup;
  contactDetailsForm: FormGroup;
  titleOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' },
  ];
  streetOptions = [
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
  ];
  constructor(private fb: FormBuilder) {
    this.generalInfoForm = this.fb.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      position: ['', Validators.required],
      businessAreaCode: ['', [Validators.required, Validators.minLength(3)]],
      terms: [true, Validators.required],
      file: ['', Validators.required],
    });
    this.contactDetailsForm = this.fb.group({
      street: ['', Validators.required],
      additionalInfo: ['', Validators.required],
      zipCode: ['', Validators.required],
      place: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnInit() {}
  onSubmit() {
    console.log(this.generalInfoForm.value);
  }
  onFileChange(event: any) {
    console.log(event?.target?.files);
  }
}
