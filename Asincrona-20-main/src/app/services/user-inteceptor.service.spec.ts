import { TestBed } from '@angular/core/testing';

import { UserInteceptorService } from './user-inteceptor.service';

describe('UserInteceptorService', () => {
  let service: UserInteceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInteceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
