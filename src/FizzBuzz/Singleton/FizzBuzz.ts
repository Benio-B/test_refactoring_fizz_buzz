import { getBuzzCalculator } from './Buzz';
import { getFizzCalculator } from './Fizz';

class FizzBuzzCalculator {
  private fizzCalculator: ReturnType<typeof getFizzCalculator>;
  private buzzCalculator: ReturnType<typeof getBuzzCalculator>;

  constructor({
                fizzCalculator,
                buzzCalculator,
              }: {
    fizzCalculator: ReturnType<typeof getFizzCalculator>,
    buzzCalculator: ReturnType<typeof getBuzzCalculator>
  }) {
    this.fizzCalculator = fizzCalculator;
    this.buzzCalculator = buzzCalculator;
  }

  isFizzBuzz({ number }: { number: number }): boolean {
    return this.fizzCalculator.isFizz({ number }) && this.buzzCalculator.isBuzz({ number });
  }

  getFizzBuzz: () => 'FizzBuzz' = () => 'FizzBuzz';
}

let fizzBuzzInstance: FizzBuzzCalculator | null = null;

function getFizzBuzzCalculator(): FizzBuzzCalculator {
  if (!fizzBuzzInstance) {
    console.log('new Instance FizzBuzz');
    fizzBuzzInstance = new FizzBuzzCalculator({
      fizzCalculator: getFizzCalculator(),
      buzzCalculator: getBuzzCalculator(),
    });
  }

  return fizzBuzzInstance;
}

export { getFizzBuzzCalculator };
