import { TestBed, inject, async } from '@angular/core/testing';

import { TeaService } from './tea.service';

describe('TeaService with Angular TestBed', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeaService]
    });
  });

  it('should be created', inject([TeaService], (service: TeaService) => {
    expect(service).toBeTruthy();
  }));

  it('should resolve promise timeout', async(inject([TeaService], (service: TeaService) => {
    service.delayTimeoutAdd(1, 2, 3).then(value => {
      expect(value).toBe(6);
    });
  })));

  it('should subscribe observable timeout', async(inject([TeaService], (service: TeaService) => {
    service.getObservableDelayAdd(11, 21, 31).subscribe(value => {
      expect(value).toBe(63);
    });
  })));

});

describe('TeaService without Angular TestBed', () => {
  let service: TeaService;
  beforeEach(() => {
    service = new TeaService();
  });

  it('should return the #textvalue', () => {
    expect(service.textValue).toBe('Hello');
  });

  it('should call the actual #add() method', () => {
    expect(service.add(1, 2, 3)).toBe(6);
  });

  it('#delayAdd() should return a promise value', (done: DoneFn) => {
    service.delayAdd(1, 2, 3).then(value => {
      expect(value).toBe(6);
      done();
    });
  });

  it('#getObservableAdd() should return observable value', (done: DoneFn) => {
    service.getObservableAdd(10, 20, 30).subscribe(value => {
      expect(value).toBe(60);
      done();
    });
  });



});


