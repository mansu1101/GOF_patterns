import {CarDecorator} from "./CarDecorator";
import {ICar} from "./ICar";

export class LuxuryCar extends CarDecorator{
    constructor(car:ICar) {
        super(car);
    }
    assemble() {
        super.assemble();
        console.log('Adding features of Luxury Car');
    }
}