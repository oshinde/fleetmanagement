import { TestBed } from '@angular/core/testing';

import { RegisteruserdataService } from './registeruserdata.service';

describe('RegisteruserdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisteruserdataService = TestBed.get(RegisteruserdataService);
    expect(service).toBeTruthy();
  });
});
