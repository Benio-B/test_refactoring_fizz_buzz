export interface Calculator {
  isEqual(i: number): boolean;

  render(): 'Fizz' | 'Buzz' | 'FizzBuzz';
}
