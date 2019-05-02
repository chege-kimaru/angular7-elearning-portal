import { TestBed } from '@angular/core/testing';

import { ChoiceService } from './choice.service';

describe('ChoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoiceService = TestBed.get(ChoiceService);
    expect(service).toBeTruthy();
  });
});
