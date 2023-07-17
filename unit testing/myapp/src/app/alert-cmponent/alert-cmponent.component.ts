import { Component, OnInit } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-alert-cmponent',
  templateUrl: './alert-cmponent.component.html',
  styleUrls: ['./alert-cmponent.component.css']
})
export class AlertCmponentComponent implements OnInit {

 content!: Observable<{data:any}>; 

 //content     = 'you have been warned';
 hideContent = true;
 severity    = 423;

 constructor(private msgService: MsgService) { } 

 ngOnInit() {
    this.content = this.msgService.getContent()
 }

 toggle() {
   this.hideContent = !this.hideContent;
 }

 toggleAsync() {
   timer(500).subscribe(() => {
     this.toggle();
   });
 }

}
