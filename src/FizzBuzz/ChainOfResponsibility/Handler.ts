export interface Handler {
  setNext(nextHandler: Handler): Handler;

  calculate(i: number): number | 'Fizz' | 'Buzz' | 'FizzBuzz';
}
