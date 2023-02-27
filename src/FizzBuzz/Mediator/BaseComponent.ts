import { Mediator } from './Mediator';

export abstract class BaseComponent {
  protected mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  abstract calculate(value: number): void;
}
