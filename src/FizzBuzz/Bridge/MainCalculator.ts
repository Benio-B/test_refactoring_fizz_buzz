import { Calculator } from './CalculatorOctogonale/type';

export class MainCalculator {
  private calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  calculate(i: number): null | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (this.calculator.isEqual(i)) {
      return this.calculator.render();
    }

    return null;
  }
}
