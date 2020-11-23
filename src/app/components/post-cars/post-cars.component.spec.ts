import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCarsComponent } from './post-cars.component';

describe('PostCarsComponent', () => {
  let component: PostCarsComponent;
  let fixture: ComponentFixture<PostCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
