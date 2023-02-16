import { AdapterFizzBuzz } from './adapterFizzBuzz';
import { OldFizzBuzz } from './oldFizzBuzz';

function calculate100FizzBuzzSuite() {
  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  const adapter = new AdapterFizzBuzz(new OldFizzBuzz());

  for (let i = 1; i <= 100; i++) {
    result.push(adapter.calculate(i));
  }

  return result;
}

export { calculate100FizzBuzzSuite };
