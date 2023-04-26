import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private auth2: any;
  public username: string="";
  public password: string="";
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }

}
