import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class TeaService {
  textValue = 'Hello';
  constructor() { }

  add(a: number, b: number, c: number): number {
    return a + b + c;
  }

  delayAdd(a: number, b: number, c: number): Promise<number> {
    return Promise.resolve(this.add(a, b , c));
  }

  delayTimeoutAdd(a: number, b: number, c: number): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => { resolve(this.add(a, b , c)); }, 10);
    });
  }

  getObservableAdd(a: number, b: number, c: number): Observable<number> {
    return Observable.of(this.add(a, b , c));
  }

  getObservableDelayAdd(a: number, b: number, c: number): Observable<number> {
    return Observable.of(this.add(a, b , c)).delay(10);
  }

}
