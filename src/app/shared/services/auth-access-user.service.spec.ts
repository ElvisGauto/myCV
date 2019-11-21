import { TestBed } from '@angular/core/testing';

import { AuthAccessUserService } from './auth-access-user.service';

describe('AuthAccessUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthAccessUserService = TestBed.get(AuthAccessUserService);
    expect(service).toBeTruthy();
  });
});
