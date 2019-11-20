import { TestBed } from '@angular/core/testing';

import { ShareCVService } from './share-cv.service';

describe('ShareCVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareCVService = TestBed.get(ShareCVService);
    expect(service).toBeTruthy();
  });
});
