"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
const Volt_1 = require("./Volt");
class Socket {
    constructor() {
    }
    get Volt() {
        return new Volt_1.Volt(120);
    }
}
exports.Socket = Socket;
