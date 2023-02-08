import { getCalculator } from './calculateFizBuzz.service';

function calculate100FizzBuzzSuite() {
  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  for (let i = 1; i <= 100; i++) {
    const calculator = getCalculator();
    result.push(calculator.calculateFizzBuzz({ number: i }));
  }

  return result;
}

export { calculate100FizzBuzzSuite };
