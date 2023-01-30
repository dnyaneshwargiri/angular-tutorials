import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit {
  data = ""
  constructor(private boxservice: BoxService) {
    this.boxservice.currentData.subscribe(data => this.data = data);
   }
  ngOnInit() {
   }
   sendData() {
    this.boxservice.changeData('Data from Box 2');
  }
  }

