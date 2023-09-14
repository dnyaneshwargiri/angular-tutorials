import { Component, OnInit, effect, signal } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {
    effect(() => {
      console.log(`The count is: ${this.counterSignal()}`);
    });
  }
  public counterSignal = signal<number>(0);
  ngOnInit() {
  }

  increment() {
    this.counterSignal.update((count) => count+1);
  }
}
