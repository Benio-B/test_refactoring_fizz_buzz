import { BaseComponent } from './BaseComponent';

export class Fizz extends BaseComponent {
  calculate(value: number) {
    if (value % 3 === 0) {
      this.mediator.notify({ name: 'fizz', value: 'Fizz' });
      return;
    }

    this.mediator.notify({ name: 'noFizz', value });
  }
}
