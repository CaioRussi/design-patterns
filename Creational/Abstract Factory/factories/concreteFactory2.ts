import { AbstractFactory } from "../abstract/abstractFactory";
import { ProductA } from "../interface/productA";
import { ProductB } from "../interface/productB";
import { ProductA2 } from "../products/productsA/productA2";
import { ProductB2 } from "../products/productsB/productB2";

export class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ProductA2();
    }

    public createProductB(): ProductB {
        return new ProductB2();
    }
}