"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuxuryCar = void 0;
const CarDecorator_1 = require("./CarDecorator");
class LuxuryCar extends CarDecorator_1.CarDecorator {
    constructor(car) {
        super(car);
    }
    assemble() {
        super.assemble();
        console.log('Adding features of Luxury Car');
    }
}
exports.LuxuryCar = LuxuryCar;
