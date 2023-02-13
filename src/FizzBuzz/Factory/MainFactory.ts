import { FizzFactory } from './Fizz/FizzFactory';
import { BuzzFactory } from './Buzz/BuzzFactory';
import { FizzBuzzFactory } from './FizzBuzz/FizzBuzzFactory';
import { IFactory } from './Ifactory';

export class MainFactory {
  create(type: string): IFactory {
    switch (type) {
      case 'Fizz':
        return new FizzFactory();
      case 'Buzz':
        return new BuzzFactory();
      case 'FizzBuzz':
        return new FizzBuzzFactory();
      default:
        throw new Error(`No expected type: ${ type }`);
    }
  }
}
