import { FizzBuzzHandler } from './FizzBuzzHandler';
import { FizzHandler } from './FizzHandler';
import { BuzzHandler } from './BuzzHandler';

function calculate100FizzBuzzSuite() {
  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  const fizzBuzzHandler = new FizzBuzzHandler();
  const fizzHandler = new FizzHandler();
  const buzzHandler = new BuzzHandler();

  fizzBuzzHandler.setNext(fizzHandler).setNext(buzzHandler);

  for (let i = 1; i <= 100; i++) {
    result.push(fizzBuzzHandler.calculate(i));
  }

  return result;
}

export { calculate100FizzBuzzSuite };
