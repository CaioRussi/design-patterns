import { Creator } from '../abstract/creator';
import { ProductA } from '../productA/productA';

export class CreateProductA extends Creator {

    public factory() {
        return new ProductA;
    }

}