import { Mediator } from './Mediator';
import { Fizz } from './Fizz';
import { FizzBuzz } from './FizzBuzz';
import { Buzz } from './Buzz';

export type Event = {
  name: string;
  value: number | 'Fizz' | 'Buzz' | 'FizzBuzz';
}

export type NewEvent = Event & {
  name: 'new';
  value: number;
}

export type NoEvent = Event & {
  name: 'noFizz' | 'noFizzBuzz' | 'noBuzz';
  value: number;
}

export type ExistEvent = Event & {
  name: 'fizz' | 'fizzBuzz' | 'buzz';
  value: 'Fizz' | 'Buzz' | 'FizzBuzz';
}

function isNoEvent(e: Event): e is NoEvent {
  return ['noFizz', 'noBuzz', 'noFizzBuzz'].includes(e.name);
}

function isExistEvent(e: Event): e is ExistEvent {
  return ['fizz', 'buzz', 'fizzBuzz'].includes(e.name);
}

function isNewEvent(e: Event): e is NewEvent {
  return e.name === 'new';
}

export class ConcreteMediator implements Mediator {
  private fizz: Fizz;
  private buzz: Buzz;
  private fizzBuzz: FizzBuzz;
  private result: (number | 'Fizz' | 'Buzz' | 'FizzBuzz')[];

  public constructor() {
    this.fizz = new Fizz(this);
    this.buzz = new Buzz(this);
    this.fizzBuzz = new FizzBuzz(this);
    this.result = [];
  }

  notify(event: Event | NewEvent | NoEvent) {
    console.log({ event });
    if (isNewEvent(event)) {
      return this.fizzBuzz.calculate(event.value);
    }

    if (isNoEvent(event)) {
      if (event.name === 'noFizzBuzz') {
        return this.fizz.calculate(event.value);
      }
      if (event.name === 'noFizz') {
        return this.buzz.calculate(event.value);
      }
      if (event.name === 'noBuzz') {
        this.result.push(event.value);
      }
      return;
    }

    if (isExistEvent(event)) {
      this.result.push(event.value);
    }
  }

  public getResult() {
    return this.result;
  }
}
