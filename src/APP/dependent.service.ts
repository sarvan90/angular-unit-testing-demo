import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { TeaService } from './tea.service';

@Injectable()
export class DependentService {

  constructor(private teaService: TeaService) { }

  getTeaValue() {
    return this.teaService.textValue;
  }

  delayAddTen(a: number, b: number): Observable<number> {
    return this.teaService.getObservableDelayAdd(a, b, 10);
  }

}


export class FakeTeaService {
 textValue: string;
 add (): any {}
 delayAdd (): any  {}
 delayTimeoutAdd (): any  {}
 getObservableAdd (): any  {}
 getObservableDelayAdd(a: number, b: number): Observable<number> {
    return Observable.of(a + b + 10).delay(10);
  }
}
