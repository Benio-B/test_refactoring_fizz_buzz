import { Calculator } from './type';

export class Buzz implements Calculator {
  isEqual(i: number): boolean {
    return i % 5 === 0;
  }

  render(): 'Buzz' {
    return 'Buzz';
  }
}
