import { BaseHandler } from './BaseHandler';

export class BuzzHandler extends BaseHandler {
  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (i % 5 === 0) {
      return 'Buzz';
    }

    return super.calculate(i);
  }
}
