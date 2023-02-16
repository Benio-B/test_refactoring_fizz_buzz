export class Buzz {
  isElement(i: number) {
    return i % 5 === 0;
  }

  render(): 'Buzz' {
    return 'Buzz';
  }
}
