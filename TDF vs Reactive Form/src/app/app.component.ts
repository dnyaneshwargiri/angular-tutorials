import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  // name: any;
  // email: any;
  // message: any;
  // submitForm() {
  //   alert(`${this.name} ${this.email} ${this.message} `);
  // }

  // create a form control for the username
  nameControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(3)
  ]));
  emailControl = new FormControl('');
  messageControl = new FormControl('');

  // create a form group and add the username control
  form = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
    message: this.messageControl,
  });

  submitForm() {
     alert(this.nameControl.value)
  }
}
