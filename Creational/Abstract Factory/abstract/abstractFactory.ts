import { ProductA } from "../interface/productA";
import { ProductB } from "../interface/productB";

export interface AbstractFactory {

    createProductA(): ProductA;

    createProductB(): ProductB;

}