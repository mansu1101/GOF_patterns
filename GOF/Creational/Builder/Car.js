"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
class Car {
    constructor() {
        this.doors = 0;
    }
    addParts() {
        this.doors = 4;
    }
    ;
    say() {
        console.log("I am a " + this.doors + "-door car");
    }
    ;
}
class CarBuilder {
    step1() {
        this.car = new Car();
    }
    step2() {
        this.car.addParts();
    }
    get() {
        return this.car;
    }
}
exports.CarBuilder = CarBuilder;
