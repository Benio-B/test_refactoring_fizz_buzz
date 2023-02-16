import { IFactory } from '../Ifactory';
import { FizzBuzz } from './FizzBuzz';

export class FizzBuzzFactory extends IFactory {
  constructor() {
    super();
  }

  create() {
    return new FizzBuzz();
  }
}
