import { Creator } from '../../abstract/creator';
import { ProductA } from './productA';

export class CreateProductA extends Creator {

    public factory() {
        return new ProductA();
    }

}