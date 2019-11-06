import { TestBed, async, inject } from '@angular/core/testing';

import { StaffguardGuard } from './staffguard.guard';

describe('StaffguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffguardGuard]
    });
  });

  it('should ...', inject([StaffguardGuard], (guard: StaffguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
