/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View-3Component } from './view-3.component';

describe('View-3Component', () => {
  let component: View-3Component;
  let fixture: ComponentFixture<View-3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View-3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View-3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
