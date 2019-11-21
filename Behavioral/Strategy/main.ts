import { Context } from "./context";
import { ConcreteStrategyA } from "./strategy/concreteStrategyA";
import { ConcreteStrategyB } from "./strategy/concreteStrategyB";

const context = new Context(new ConcreteStrategyA());
console.log('Client: Strategy is set to normal sorting.');
context.doSomething();

console.log('');

console.log('Client: Strategy is set to reverse sorting.');
context.setStrategy(new ConcreteStrategyB());
context.doSomething();