import { BaseComponent } from './BaseComponent';

export class FizzBuzz extends BaseComponent {
  calculate(value: number) {
    if (value % 3 === 0 && value % 5 === 0) {
      this.mediator.notify({ name: 'fizzBuzz', value: 'FizzBuzz' });
      return;
    }

    this.mediator.notify({ name: 'noFizzBuzz', value });
  }
}
