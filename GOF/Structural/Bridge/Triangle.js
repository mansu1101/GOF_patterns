"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
const Shape_1 = require("./Shape");
class Triangle extends Shape_1.Shape {
    constructor(color) {
        super(color);
    }
    applyColor() {
        console.log("Triangle filled with color ");
        this.color.applyColor();
    }
}
exports.Triangle = Triangle;
