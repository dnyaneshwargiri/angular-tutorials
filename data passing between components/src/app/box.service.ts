import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoxService {
  private data = new BehaviorSubject<any>(null);
  currentData = this.data.asObservable();
  constructor() { }

  changeData(data: any) {
    this.data.next(data);
  }

}
