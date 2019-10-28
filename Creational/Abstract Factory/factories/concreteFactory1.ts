import { AbstractFactory } from "../abstract/abstractFactory";
import { ProductA } from "../interface/productA";
import { ProductA1 } from "../products/productsA/productA1";
import { ProductB } from "../interface/productB";
import { ProductB1 } from "../products/productsB/productB1";

export class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): ProductA {
        return new ProductA1();
    }

    public createProductB(): ProductB {
        return new ProductB1();
    }
}