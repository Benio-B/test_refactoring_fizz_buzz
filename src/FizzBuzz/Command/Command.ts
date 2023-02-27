export abstract class Command {
  protected i: number;

  public constructor(i: number) {
    this.i = i;
  }

  abstract calculate(): number | 'Fizz' | 'Buzz' | 'FizzBuzz';
}
