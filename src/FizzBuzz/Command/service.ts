import { FizzBuzzCommand } from './FizzBuzzCommand';

function calculate100FizzBuzzSuite() {
  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  for (let i = 1; i <= 100; i++) {
    const command = new FizzBuzzCommand(i);
    result.push(command.calculate());
  }

  return result;
}

export { calculate100FizzBuzzSuite };
