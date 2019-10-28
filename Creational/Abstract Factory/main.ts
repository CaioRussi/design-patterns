import { AbstractFactory } from "./abstract/abstractFactory";
import { ConcreteFactory1 } from "./factories/concreteFactory1";
import { ConcreteFactory2 } from "./factories/concreteFactory2";

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.operationB());
    console.log(productB.anotherOperationB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('\nClient: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());