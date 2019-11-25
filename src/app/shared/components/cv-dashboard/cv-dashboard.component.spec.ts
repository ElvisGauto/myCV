import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDashboardComponent } from './cv-dashboard.component';

describe('CvDashboardComponent', () => {
  let component: CvDashboardComponent;
  let fixture: ComponentFixture<CvDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
