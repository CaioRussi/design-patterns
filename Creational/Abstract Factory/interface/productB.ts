import { ProductA } from "./productA";

export interface ProductB {

    operationB(): string;

    anotherOperationB(collaborator: ProductA): string;

}