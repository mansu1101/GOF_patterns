import {Volt} from "./Volt";

export interface ISocketAdapter {

    get120Volt(): Volt;

    get12Volt(): Volt;

    get3Volt(): Volt;
}