class FizzCalculator {
  isFizz({ number }: { number: number }): boolean {
    return number % 3 === 0;
  }

  getFizz(): 'Fizz' {
    return 'Fizz';
  }
}

let fizzInstance: FizzCalculator | null = null;

function getFizzCalculator(): FizzCalculator {
  if (!fizzInstance) {
    console.log('new Instance Fizz');
    fizzInstance = new FizzCalculator();
  }

  return fizzInstance;
}

export { getFizzCalculator };
