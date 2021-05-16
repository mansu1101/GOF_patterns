import {SportCar} from "./SportCar";
import {BasicCar} from "./BasicCar";
import {ICar} from "./ICar";
import {LuxuryCar} from "./LuxuryCar";

class Client{
    sportCar:ICar|undefined;
    sportLuxuryCar:ICar|undefined;
    run(){
        this.sportCar = new SportCar(new BasicCar());
        this.sportCar.assemble();
        console.log('\n*****');
        this.sportLuxuryCar = new SportCar(new LuxuryCar(new BasicCar()));
        this.sportLuxuryCar.assemble();
    }
}
new Client().run();