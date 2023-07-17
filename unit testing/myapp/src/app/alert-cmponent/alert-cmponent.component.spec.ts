/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertCmponentComponent } from './alert-cmponent.component';
import { of } from 'rxjs';
import { MsgService } from '../msg.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AlertCmponentComponent', () => {
  let component: AlertCmponentComponent;
  let fixture: ComponentFixture<AlertCmponentComponent>;
  let de: DebugElement;
  let serviceStub: any;
  let service: MsgService;
  let spy: jasmine.Spy;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(async(() => {
    // (serviceStub = {
    //   getContent: () => of('You have been warned.'),
    // }),
    TestBed.configureTestingModule({
      declarations: [AlertCmponentComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule
      // providers: [{ provide: MsgService, useValue: serviceStub }],
      providers: [MsgService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    service = TestBed.inject(MsgService);
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have a message with warn', () => {
  //   expect(component.content).toContain('warned');
  // });

  it('should have numeric severity greater than 400', () => {
    expect(component.severity).toBeGreaterThan(400);
  });

  it('should have an H1 tag of `Alert Button`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  // it('should have message content defined from an observable', () => {
  //   component.content.subscribe((content) => {
  //     expect(content).toBeDefined();
  //     expect(content).toBe(`You have been warned.`);
  //   });
  // });

  // it('should call getContent one time and update the view', () => {
  //   expect(spy).toHaveBeenCalled();
  //   expect(spy.calls.all().length).toEqual(1);

  //   expect(de.query(By.css('.message-body')).nativeElement.innerText).toContain(
  //     'warn'
  //   );
  // });

 
});
