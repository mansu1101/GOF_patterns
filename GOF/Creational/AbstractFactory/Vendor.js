"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorFactory = void 0;
class Vendor {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("I am Vendor " + this.name);
    }
}
class VendorFactory {
    create(name) {
        return new Vendor(name);
    }
}
exports.VendorFactory = VendorFactory;
