"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketClassAdapterImpl_1 = require("./SocketClassAdapterImpl");
class Consumer {
    static testClassAdapter() {
        let sockAdapter = new SocketClassAdapterImpl_1.SocketClassAdapterImpl();
        let v3 = this.getVolt(sockAdapter, 3);
        let v12 = this.getVolt(sockAdapter, 12);
        let v120 = this.getVolt(sockAdapter, 120);
        console.log("v3 volts using Class Adapter=" + v3.Volts);
        console.log("v12 volts using Class Adapter=" + v12.Volts);
        console.log("v120 volts using Class Adapter=" + v120.Volts);
    }
    static getVolt(sockAdapter, volts) {
        let volt;
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
    static main() {
        Consumer.testClassAdapter();
    }
}
Consumer.main();
