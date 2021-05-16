"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketClassAdapterImpl = void 0;
const Socket_1 = require("./Socket");
const Volt_1 = require("./Volt");
//Using inheritance for adapter pattern
class SocketClassAdapterImpl extends Socket_1.Socket {
    get120Volt() {
        return this.Volt;
    }
    get12Volt() {
        const v = this.Volt;
        return this.convertVolt(v, 10);
    }
    get3Volt() {
        const v = this.Volt;
        return this.convertVolt(v, 40);
    }
    convertVolt(v, i) {
        return new Volt_1.Volt(v.Volts / i);
    }
}
exports.SocketClassAdapterImpl = SocketClassAdapterImpl;
