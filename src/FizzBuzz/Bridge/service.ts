import { MainCalculator } from './MainCalculator';
import { Fizz } from './CalculatorOctogonale/Fizz';
import { Buzz } from './CalculatorOctogonale/Buzz';
import { FizzBuzz } from './CalculatorOctogonale/FizzBuzz';

function calculate100FizzBuzzSuite() {
  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  const fizzCalculator = new MainCalculator(new Fizz());
  const buzzCalculator = new MainCalculator(new Buzz());
  const fizzBuzzCalculator = new MainCalculator(new FizzBuzz());

  for (let i = 1; i <= 100; i++) {
    result.push(fizzBuzzCalculator.calculate(i) ?? fizzCalculator.calculate(i) ?? buzzCalculator.calculate(i) ?? i);
  }

  return result;
}

export { calculate100FizzBuzzSuite };
