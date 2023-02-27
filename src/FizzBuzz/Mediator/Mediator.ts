import { Event } from './ConcreteMediator';

export interface Mediator {
  notify({ name, value }: Event);
}
