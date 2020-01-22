import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPollComponent } from './dash-poll.component';

describe('DashPollComponent', () => {
  let component: DashPollComponent;
  let fixture: ComponentFixture<DashPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
