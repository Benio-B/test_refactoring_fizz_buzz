import { Command } from './Command';

export class FizzBuzzCommand extends Command {
  calculate(): number | 'Fizz' | 'Buzz' | 'FizzBuzz' {
    if (this.i % 3 === 0 && this.i % 5 === 0) {
      return 'FizzBuzz';
    }

    if (this.i % 3 === 0) {
      return 'Fizz';
    }

    if (this.i % 5 === 0) {
      return 'Buzz';
    }

    return this.i;
  }
}
