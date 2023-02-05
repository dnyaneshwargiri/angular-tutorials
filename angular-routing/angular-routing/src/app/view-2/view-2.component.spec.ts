/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View-2Component } from './view-2.component';

describe('View-2Component', () => {
  let component: View-2Component;
  let fixture: ComponentFixture<View-2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View-2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View-2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
