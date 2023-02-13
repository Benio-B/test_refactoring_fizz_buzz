import { MainFactory } from './MainFactory';

function calculate100FizzBuzzSuite() {
  const fizz = new MainFactory().create('Fizz');
  const buzz = new MainFactory().create('Buzz');
  const fizzBuzz = new MainFactory().create('FizzBuzz');

  const result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[] = [];

  for (let i = 1; i <= 100; i++) {
    if (fizzBuzz.isElement(i)) {
      result.push(fizzBuzz.render());
    } else if (fizz.isElement(i)) {
      result.push(fizz.render());
    } else if (buzz.isElement(i)) {
      result.push(buzz.render());
    } else {
      result.push(i);
    }
  }

  return result;
}

export { calculate100FizzBuzzSuite };
