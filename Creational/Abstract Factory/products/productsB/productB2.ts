import { ProductB } from "../../interface/productB";
import { ProductA } from "../../interface/productA";

export class ProductB2 implements ProductB {

    operationB(): string {
        return 'The result of the product B2.';
    }

    anotherOperationB(collaborator: ProductA): string {
        const result = collaborator.operationA();
        return `The result of the B2 collaborating with the (${result})`;
    }

}