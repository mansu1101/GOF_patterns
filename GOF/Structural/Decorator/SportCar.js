"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportCar = void 0;
const CarDecorator_1 = require("./CarDecorator");
class SportCar extends CarDecorator_1.CarDecorator {
    constructor(car) {
        super(car);
    }
    assemble() {
        super.assemble();
        console.log('Adding Features of Sport Car.');
    }
}
exports.SportCar = SportCar;
