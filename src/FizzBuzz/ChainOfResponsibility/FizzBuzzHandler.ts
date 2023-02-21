import { BaseHandler } from './BaseHandler';

export class FizzBuzzHandler extends BaseHandler {
  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'FizzBuzz';
    }

    if (!this.nextHandler) {
      throw new Error('[FizzBuzzHandler] No other handler');
    }

    return this.nextHandler.calculate(i);
  }
}
