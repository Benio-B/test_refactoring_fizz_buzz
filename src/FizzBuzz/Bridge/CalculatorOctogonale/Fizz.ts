import { Calculator } from './type';

export class Fizz implements Calculator {
  isEqual(i: number): boolean {
    return i % 3 === 0;
  }

  render(): 'Fizz' {
    return 'Fizz';
  }
}
