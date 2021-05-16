"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Colors_1 = require("./Colors");
const Triangle_1 = require("./Triangle");
const Pentagon_1 = require("./Pentagon");
class Client {
    main() {
        const tri = new Triangle_1.Triangle(new Colors_1.RedColor());
        tri.applyColor();
        const pent = new Pentagon_1.Pentagon(new Colors_1.GreenColor());
        pent.applyColor();
    }
}
new Client().main();
