import {Volt} from "./Volt";
import {ISocketAdapter} from "./ISocketAdapter";
import {SocketClassAdapterImpl} from "./SocketClassAdapterImpl"

class Consumer {
    private static testClassAdapter() {
        let sockAdapter = new SocketClassAdapterImpl();
        let v3: Volt = this.getVolt(sockAdapter, 3);
        let v12: Volt = this.getVolt(sockAdapter, 12);
        let v120: Volt = this.getVolt(sockAdapter, 120);
        console.log("v3 volts using Class Adapter=" + v3.Volts);
        console.log("v12 volts using Class Adapter=" + v12.Volts);
        console.log("v120 volts using Class Adapter=" + v120.Volts);
    }

    private static getVolt(sockAdapter: ISocketAdapter, volts: number): Volt {
        let volt: Volt;
        switch (volts) {
            case 3:
                volt = sockAdapter.get3Volt();
                break;
            case 12:
                volt = sockAdapter.get12Volt();
                break;
            default:
                volt = sockAdapter.get120Volt();
                break;
        }
        return volt;
    }

    public static main() {
        Consumer.testClassAdapter();
    }
}
Consumer.main();