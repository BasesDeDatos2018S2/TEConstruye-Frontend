import { TestBed } from '@angular/core/testing';

import { PayrollsService } from './payrolls.service';

describe('PayrollsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayrollsService = TestBed.get(PayrollsService);
    expect(service).toBeTruthy();
  });
});
