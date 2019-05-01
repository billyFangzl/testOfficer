import { TestBed } from '@angular/core/testing';

import { TestappService } from './testapp.service';

describe('TestappService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestappService = TestBed.get(TestappService);
    expect(service).toBeTruthy();
  });
});
