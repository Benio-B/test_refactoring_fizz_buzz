import { Fizz } from './Fizz/Fizz';
import { Buzz } from './Buzz/Buzz';
import { FizzBuzz } from './FizzBuzz/FizzBuzz';

export abstract class IFactory {
  abstract create(): Fizz | Buzz | FizzBuzz;

  isElement(i: number) {
    return this.create().isElement(i);
  }

  render(): 'Fizz' | 'Buzz' | 'FizzBuzz' {
    return this.create().render();
  }
}
