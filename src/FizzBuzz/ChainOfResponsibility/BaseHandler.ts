import { Handler } from './Handler';

export abstract class BaseHandler implements Handler {
  protected nextHandler: Handler | undefined;

  setNext(nextHandler: Handler): Handler {
    this.nextHandler = nextHandler;

    return nextHandler;
  }

  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    return i;
  }
}
