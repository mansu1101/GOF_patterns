"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pentagon = void 0;
const Shape_1 = require("./Shape");
class Pentagon extends Shape_1.Shape {
    constructor(c) {
        super(c);
    }
    applyColor() {
        console.log("Pentagon filled with color ");
        this.color.applyColor();
    }
}
exports.Pentagon = Pentagon;
