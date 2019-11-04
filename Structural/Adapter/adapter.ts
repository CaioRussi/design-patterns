import { Target } from "./interface/target";
import { ConcreteAdaptee } from "./concreteAdaptee";

export class Adapter implements Target {

    private concreteAdaptee: ConcreteAdaptee;

    constructor(concreteAdaptee: ConcreteAdaptee) {
        this.concreteAdaptee = concreteAdaptee;
    }

    public request(): string {
        return `Adapter: ${this.concreteAdaptee.specificRequest()}`;
    }

}