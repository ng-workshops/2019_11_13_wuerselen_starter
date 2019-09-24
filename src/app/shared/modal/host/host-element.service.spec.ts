import { TestBed } from '@angular/core/testing';

import { HostElementService } from './host-element.service';

describe('HostElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostElementService = TestBed.get(HostElementService);
    expect(service).toBeTruthy();
  });
});
