import { Target } from "./interface/target";
import { ConcreteTarget } from "./concreteTarget";
import { ConcreteAdaptee } from "./concreteAdaptee";
import { Adapter } from "./adapter";

function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new ConcreteTarget();
clientCode(target);

console.log('');

const concreteAdaptee = new ConcreteAdaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Property 'request' is missing in type 'ConcreteAdaptee' but required in type 'Target'`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(concreteAdaptee);
clientCode(adapter);