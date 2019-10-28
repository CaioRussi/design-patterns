import { Product } from '../../interface/product';

export class ProductA implements Product {

    operation(): string {
        return '{Result of the CreateProductA}\n';
    }

}