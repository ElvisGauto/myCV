import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreExperienceComponent } from './add-more-experience.component';

describe('AddMoreExperienceComponent', () => {
  let component: AddMoreExperienceComponent;
  let fixture: ComponentFixture<AddMoreExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMoreExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
