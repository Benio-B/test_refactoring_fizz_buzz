import { IFactory } from '../Ifactory';
import { Buzz } from './Buzz';

export class BuzzFactory extends IFactory {
  constructor() {
    super();
  }

  create() {
    return new Buzz();
  }
}
