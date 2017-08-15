import { TestBed, inject } from '@angular/core/testing';

import { TeaService } from './tea.service';

describe('TeaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaService]
    });
  });

  it('should be created', inject([TeaService], (service: TeaService) => {
    expect(service).toBeTruthy();
  }));
});

describe('Simple Unit Test for TeaService', () => {
  let service: TeaService;
  beforeEach(() => {
    service = new TeaService();
  });
  it('should call the actual add method', () => {
    expect(service.add(1, 2, 3)).toBe(6);
  });
  xit('should call the actual delay add method', (done: DoneFn) => {
    service.delayAdd(1, 2, 3).then(value => {
      expect(value).toBe(6);
      done();
    });
  });
});


