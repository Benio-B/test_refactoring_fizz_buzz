import { IFactory } from '../Ifactory';
import { Fizz } from './Fizz';

export class FizzFactory extends IFactory {
  constructor() {
    super();
  }

  create() {
    return new Fizz();
  }
}
