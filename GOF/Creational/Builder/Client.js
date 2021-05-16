"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Garage_1 = require("./Garage");
const Car_1 = require("./Car");
const Truck_1 = require("./Truck");
class Client {
    run() {
        const garage = new Garage_1.Garage();
        const carBuilder = new Car_1.CarBuilder();
        const truckBuilder = new Truck_1.TruckBuilder();
        const car = garage.construct(carBuilder);
        const truck = garage.construct(truckBuilder);
        car.say();
        truck.say();
    }
}
new Client().run();
