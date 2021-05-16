import {ICar} from "./ICar";

export class CarDecorator implements ICar{
    car:ICar|undefined;
    constructor(car:ICar) {
        this.car = car;
    }
    assemble() {
        this.car?.assemble();
    }
}