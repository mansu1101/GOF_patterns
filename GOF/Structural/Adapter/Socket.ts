import {Volt} from "./Volt";

export class Socket {
    constructor() {
    }

    public get Volt(): Volt {
        return new Volt(120);
    }
}