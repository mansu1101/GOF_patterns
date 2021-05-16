import {Garage} from "./Garage";
import {CarBuilder} from "./Car";
import {TruckBuilder} from "./Truck";

class Client {
    run() {
        const garage = new Garage();
        const carBuilder = new CarBuilder();
        const truckBuilder = new TruckBuilder();
        const car = garage.construct(carBuilder);
        const truck = garage.construct(truckBuilder);

        car.say();
        truck.say();
    }
}

new Client().run();