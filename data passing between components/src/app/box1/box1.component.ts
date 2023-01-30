import { Component, OnInit } from '@angular/core';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.css']
})
export class Box1Component implements OnInit {
  data = ""
  constructor(private boxService: BoxService) {
    this.boxService.currentData.subscribe(data => this.data = data);
  }

  ngOnInit() {
  }
  sendData() {
    this.boxService.changeData('Data from Box 1');
  }
}
