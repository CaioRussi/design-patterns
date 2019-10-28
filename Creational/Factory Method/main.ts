import { Creator } from './abstract/creator';
import { CreateProductA } from './products/productA/createProductA';
import { CreateProductB } from './products/productB/createProductB';

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('App: Launched with the CreateProductA.');
clientCode(new CreateProductA())

console.log('App: Launched with the CreateProductB.');
clientCode(new CreateProductB())