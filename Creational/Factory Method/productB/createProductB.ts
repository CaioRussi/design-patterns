import { Creator } from '../abstract/creator';
import { ProductB } from './productB';

export class CreateProductB extends Creator {

    public factory() {
        return new ProductB;
    }

}