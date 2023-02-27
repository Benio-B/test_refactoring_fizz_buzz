import { ConcreteMediator } from './ConcreteMediator';

function calculate100FizzBuzzSuite() {
  const mediator = new ConcreteMediator();

  for (let i = 1; i <= 100; i++) {
    mediator.notify({ name: 'new', value: i });
  }

  return mediator.getResult();
}

export { calculate100FizzBuzzSuite };
