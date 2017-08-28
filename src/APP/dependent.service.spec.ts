import { TestBed, inject, async } from '@angular/core/testing';

import { DependentService, FakeTeaService } from './dependent.service';
import { TeaService } from './tea.service';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

describe('DependentService with Angular TestBed with Actual Dependency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependentService, TeaService]
    });
  });

  it('should be created', inject([DependentService], (service: DependentService) => {
    expect(service).toBeTruthy();
  }));

  it('delayAddTen should return real value by calling the real TeaService',
    async(inject([DependentService], (service: DependentService) => {
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(40);
    });
  })));

});

describe('DependentService with Angular TestBed with Fake Dependency Object', () => {
  beforeEach(() => {
    const fake =  {
        textValue : 'im a fake value',
        add: (): any => {},
        delayAdd : (): any => {},
        delayTimeoutAdd : (): any => {},
        getObservableAdd : (): any => {},
        getObservableDelayAdd : (): any => Observable.of(400)
     };
    TestBed.configureTestingModule({
      providers: [DependentService, {provide: TeaService, useValue: fake }]
    });
  });

  it('should return fake value by calling the TeaService fake object', () => {
    // getting the service from the app module
    const dependentService = TestBed.get(DependentService);
    expect(dependentService.getTeaValue()).toEqual('im a fake value');
  });


  it('delayAddTen should return fake observable by calling the TeaService fake object',
    async(inject([DependentService], (service: DependentService) => {
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(400);
    });
  })));

});

describe('DependentService with Angular TestBed with Fake Dependency Class', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependentService, {provide: TeaService, useClass: FakeTeaService }]
    });
  });

  it('should return fake value by calling the TeaService fake Class', () => {
    // getting the service from the app module
    const dependentService = TestBed.get(DependentService);
    expect(dependentService.getTeaValue()).toBeUndefined();
  });


  it('delayAddTen should return fake observable by calling the TeaService fake Class',
    async(inject([DependentService], (service: DependentService) => {
    service.delayAddTen(100, 200).subscribe((result) => {
      expect(result).toEqual(310);
    });
  })));

});

describe('DependentService with Angular TestBed with Actual Dependency overridden spy method', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DependentService, TeaService]
    });
  });

  it('delayAddTen should return fake value by calling the real TeaService with spy method',
    async(inject([DependentService], (service: DependentService) => {

    const spy = spyOn(TestBed.get(TeaService), 'getObservableDelayAdd').and.returnValue(Observable.of(333));
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(333);
    });
  })));

});

describe('DependentService without Angular TestBed', () => {
  let service: DependentService;
  it('#delayAddTen should return real value by calling the real TeaService', () => {
    service = new DependentService(new TeaService());
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(40);
    });
  });

  it('#delayAddTen should return fake value by calling the fake Class FakeTeaService', () => {
    service = new DependentService(new FakeTeaService());
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(40);
    });
  });

  it('#delayAddTen should return fake value by calling the fake Obj fake', () => {
    const fake =  {
        textValue : 'hi',
        add: (): any => {},
        delayAdd : (): any => {},
        delayTimeoutAdd : (): any => {},
        getObservableAdd : (): any => {},
        getObservableDelayAdd : (): any => Observable.of(40)
     };
    service = new DependentService(fake as TeaService);
    service.delayAddTen(10, 20).subscribe((result) => {
      expect(result).toEqual(40);
    });
  });

  it('#delayAddTen should return stubbed value from a TeaService spy', () => {
    const tea = new TeaService();
    const stubVal = 30;
    const spy = spyOn(tea, 'getObservableDelayAdd').and.returnValue(Observable.of(30));
    service = new DependentService(tea);
    service.delayAddTen(10, 10).subscribe((result) => {
      expect(result).toEqual(stubVal);
      expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
    });
  });

});
