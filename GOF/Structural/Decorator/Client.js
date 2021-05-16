"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SportCar_1 = require("./SportCar");
const BasicCar_1 = require("./BasicCar");
const LuxuryCar_1 = require("./LuxuryCar");
class Client {
    run() {
        this.sportCar = new SportCar_1.SportCar(new BasicCar_1.BasicCar());
        this.sportCar.assemble();
        console.log('\n*****');
        this.sportLuxuryCar = new SportCar_1.SportCar(new LuxuryCar_1.LuxuryCar(new BasicCar_1.BasicCar()));
        this.sportLuxuryCar.assemble();
    }
}
new Client().run();
