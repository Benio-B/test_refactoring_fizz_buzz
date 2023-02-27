import { BaseComponent } from './BaseComponent';

export class Buzz extends BaseComponent {
  calculate(value: number) {
    if (value % 5 === 0) {
      this.mediator.notify({ name: 'buzz', value: 'Buzz' });
      return;
    }

    this.mediator.notify({ name: 'noBuzz', value });
  }
}
