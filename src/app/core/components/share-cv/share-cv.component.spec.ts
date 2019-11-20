import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCVComponent } from './share-cv.component';

describe('ShareCVComponent', () => {
  let component: ShareCVComponent;
  let fixture: ComponentFixture<ShareCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
