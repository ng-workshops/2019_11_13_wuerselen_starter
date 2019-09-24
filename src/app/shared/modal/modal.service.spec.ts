import { TestBed } from '@angular/core/testing';
import { HostElementService } from './host/host-element.service';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ModalService, HostElementService]
    })
  );

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
