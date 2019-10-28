import { ProductB } from "../../interface/productB";
import { ProductA } from "../../interface/productA";

export class ProductB1 implements ProductB {

    operationB(): string {
        return 'The result of the product B1.';
    }

    anotherOperationB(collaborator: ProductA): string {
        const result = collaborator.operationA();
        return `The result of the B1 collaborating with the (${result})`;
    }

}