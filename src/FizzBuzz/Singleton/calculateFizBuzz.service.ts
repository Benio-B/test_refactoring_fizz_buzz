import { getFizzCalculator } from './Fizz';
import { getBuzzCalculator } from './Buzz';
import { getFizzBuzzCalculator } from './FizzBuzz';

class Calculator {
  private fizzCalculator: ReturnType<typeof getFizzCalculator>;
  private buzzCalculator: ReturnType<typeof getBuzzCalculator>;
  private fizzBuzzCalculator: ReturnType<typeof getFizzBuzzCalculator>;

  constructor({
                fizzCalculator,
                buzzCalculator,
                fizzBuzzCalculator,
              }: { fizzCalculator: ReturnType<typeof getFizzCalculator>, buzzCalculator: ReturnType<typeof getBuzzCalculator>, fizzBuzzCalculator: ReturnType<typeof getFizzBuzzCalculator> }) {
    this.fizzCalculator = fizzCalculator;
    this.buzzCalculator = buzzCalculator;
    this.fizzBuzzCalculator = fizzBuzzCalculator;
  }

  calculateFizzBuzz({ number }: { number: number }): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (this.fizzBuzzCalculator.isFizzBuzz({ number })) {
      return this.fizzBuzzCalculator.getFizzBuzz();
    }

    if (this.fizzCalculator.isFizz({ number })) {
      return this.fizzCalculator.getFizz();
    }

    if (this.buzzCalculator.isBuzz({ number })) {
      return this.buzzCalculator.getBuzz();
    }

    return number;
  }
}

let instance;

function getCalculator(): Calculator {
  if (!instance) {
    console.log('New Calculator instance');
    instance = new Calculator({
      buzzCalculator: getBuzzCalculator(),
      fizzCalculator: getFizzCalculator(),
      fizzBuzzCalculator: getFizzBuzzCalculator(),
    });
  }

  return instance;
}

export { getCalculator };
