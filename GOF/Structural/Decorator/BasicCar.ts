import {ICar} from "./ICar";

export class BasicCar implements ICar{
    assemble(){
        console.log('Basic CAR!');
    }
}