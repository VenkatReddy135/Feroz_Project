import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSinglerowitemsComponent } from './cars-singlerowitems.component';

describe('CarsSinglerowitemsComponent', () => {
  let component: CarsSinglerowitemsComponent;
  let fixture: ComponentFixture<CarsSinglerowitemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsSinglerowitemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSinglerowitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
