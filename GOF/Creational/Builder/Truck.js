"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckBuilder = void 0;
class Truck {
    constructor() {
        this.doors = 0;
    }
    addParts() {
        this.doors = 2;
    }
    ;
    say() {
        console.log("I am a " + this.doors + "-door truck");
    }
    ;
}
class TruckBuilder {
    step1() {
        this.truck = new Truck();
    }
    step2() {
        this.truck.addParts();
    }
    get() {
        return this.truck;
    }
}
exports.TruckBuilder = TruckBuilder;
