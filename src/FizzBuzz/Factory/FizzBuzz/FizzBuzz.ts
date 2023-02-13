export class FizzBuzz {
  isElement(i: number) {
    return i % 3 === 0 && i % 5 === 0;
  }

  render(): 'FizzBuzz' {
    return 'FizzBuzz';
  }
}
