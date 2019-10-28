import { Product } from '../../interface/product';

export class ProductB implements Product {

    operation(): string {
        return '{Result of the CreateProductB}\n';
    }

}