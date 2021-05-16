import {Shape} from "./Shape";
import {GreenColor, RedColor} from "./Colors";
import {Triangle} from "./Triangle";
import {Pentagon} from "./Pentagon";

class Client {
    main(): void {
        const tri: Shape = new Triangle(new RedColor());
        tri.applyColor();

        const pent: Shape = new Pentagon(new GreenColor());
        pent.applyColor();
    }
}

new Client().main();