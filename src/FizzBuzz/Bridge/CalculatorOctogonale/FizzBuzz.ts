import { Calculator } from './type';

export class FizzBuzz implements Calculator {
  isEqual(i: number): boolean {
    return i % 3 === 0 && i % 5 === 0;
  }

  render(): 'FizzBuzz' {
    return 'FizzBuzz';
  }
}
