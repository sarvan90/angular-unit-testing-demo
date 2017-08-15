import { Injectable } from '@angular/core';

@Injectable()
export class TeaService {

  constructor() { }

  add(a: number, b: number, c: number): number {
    return a + b + c;
  }

  delayAdd(a: number, b: number, c: number): any {
    window.setTimeout(() => {
      return a + b + c;
    }, 1000);
  }

}
