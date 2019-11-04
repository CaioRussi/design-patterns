import { Target } from "./target";
import { Adaptee } from "./adaptee";

export class Adapter extends Target {

    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter:  ${result}`;
    }

}