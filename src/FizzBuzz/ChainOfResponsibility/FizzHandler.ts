import { BaseHandler } from './BaseHandler';

export class FizzHandler extends BaseHandler {
  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (i % 3 === 0) {
      return 'Fizz';
    }

    if (!this.nextHandler) {
      throw new Error('[FizzHandler] No other handler');
    }
    
    return this.nextHandler.calculate(i);
  }
}
