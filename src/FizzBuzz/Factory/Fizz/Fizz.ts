export class Fizz {
  isElement(i: number) {
    return i % 3 === 0;
  }

  render(): 'Fizz' {
    return 'Fizz';
  }
}
