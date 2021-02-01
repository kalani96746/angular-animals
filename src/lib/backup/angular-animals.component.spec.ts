import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnimalsComponent } from './angular-animals.component';

describe('AngularAnimalsComponent', () => {
  let component: AngularAnimalsComponent;
  let fixture: ComponentFixture<AngularAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
