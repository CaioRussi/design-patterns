import { Product } from "../interface/product";

export abstract class Creator {

    public abstract factory(): Product;

    public someOperation(): string {
        const product = this.factory();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }

}