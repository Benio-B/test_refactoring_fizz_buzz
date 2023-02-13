import { OldFizzBuzz } from './oldFizzBuzz';

export class AdapterFizzBuzz {
  private oldFizzBuzz: OldFizzBuzz;

  constructor(oldFizzBuzz: OldFizzBuzz) {
    this.oldFizzBuzz = oldFizzBuzz;
  }

  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    const result = this.oldFizzBuzz.calculate(i);

    if (result !== 'Fizz' && result !== 'Buzz' && result !== 'FizzBuzz') {
      return i;
    }

    return result;
  }
}
