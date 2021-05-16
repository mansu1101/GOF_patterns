"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarDecorator = void 0;
class CarDecorator {
    constructor(car) {
        this.car = car;
    }
    assemble() {
        var _a;
        (_a = this.car) === null || _a === void 0 ? void 0 : _a.assemble();
    }
}
exports.CarDecorator = CarDecorator;
