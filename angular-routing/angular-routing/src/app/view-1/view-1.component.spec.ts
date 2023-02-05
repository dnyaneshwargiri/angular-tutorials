/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { View-1Component } from './view-1.component';

describe('View-1Component', () => {
  let component: View-1Component;
  let fixture: ComponentFixture<View-1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View-1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View-1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
