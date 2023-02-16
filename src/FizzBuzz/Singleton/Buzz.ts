class BuzzCalculator {
  isBuzz({ number }: { number: number }): boolean {
    return number % 5 === 0;
  }

  getBuzz(): 'Buzz' {
    return 'Buzz';
  }
}

let buzzInstance: BuzzCalculator | null = null;

function getBuzzCalculator(): BuzzCalculator {
  if (!buzzInstance) {
    console.log('new Instance Buzz');
    buzzInstance = new BuzzCalculator();
  }

  return buzzInstance;
}

export { getBuzzCalculator };
