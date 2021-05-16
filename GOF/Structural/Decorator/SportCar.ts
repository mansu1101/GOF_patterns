import {CarDecorator} from "./CarDecorator";
import {ICar} from "./ICar";

export class SportCar extends CarDecorator{
    constructor(car:ICar) {
        super(car);
    }
    assemble() {
        super.assemble();
        console.log('Adding Features of Sport Car.');
    }
}