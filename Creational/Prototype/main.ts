import { Prototype } from "./prototype";

function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();

    const p2 = p1.clone();
    if (p1.primitive === p2.primitive) {
        console.log('primitive field successfully cloned!');
    } else {
        console.log('primitive field was not cloned!');
    }
    if (p1.component === p2.component) {
        console.log('component field successfully cloned!');
    } else {
        console.log('component field was not cloned!');
    }
}

clientCode();