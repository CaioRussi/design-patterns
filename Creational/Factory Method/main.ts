import { Creator } from './abstract/creator';
import { CreateProductA } from './productA/createProductA';
import { CreateProductB } from './productB/createProductB';

function clientCode(creator: Creator) {
    console.log(creator.someOperation());
}

console.log('App: Launched with the CreateProductA.');
clientCode(new CreateProductA)

console.log('App: Launched with the CreateProductB.');
clientCode(new CreateProductB)