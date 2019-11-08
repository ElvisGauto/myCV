import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCvComponent } from './dash-cv.component';

describe('DashCvComponent', () => {
  let component: DashCvComponent;
  let fixture: ComponentFixture<DashCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
