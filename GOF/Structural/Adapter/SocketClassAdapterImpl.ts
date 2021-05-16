import {Socket} from "./Socket";
import {ISocketAdapter} from "./ISocketAdapter";
import {Volt} from "./Volt";

//Using inheritance for adapter pattern
export class SocketClassAdapterImpl extends Socket implements ISocketAdapter {

    get120Volt(): Volt {
        return this.Volt;
    }

    get12Volt(): Volt {
        const v = this.Volt;
        return this.convertVolt(v, 10);
    }

    get3Volt(): Volt {
        const v = this.Volt;
        return this.convertVolt(v, 40);
    }

    private convertVolt(v: Volt, i: number): Volt {
        return new Volt(v.Volts / i);
    }

}