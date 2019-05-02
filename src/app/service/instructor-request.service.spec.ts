import { TestBed } from '@angular/core/testing';

import { InstructorRequestService } from './instructor-request.service';

describe('InstructorRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstructorRequestService = TestBed.get(InstructorRequestService);
    expect(service).toBeTruthy();
  });
});
