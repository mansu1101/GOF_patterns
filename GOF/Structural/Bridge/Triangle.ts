import {Shape} from "./Shape";
import {Color} from "./Color";

export class Triangle extends Shape {
    constructor(color: Color) {
        super(color);
    }

    public applyColor(): void {
        console.log("Triangle filled with color ");
        this.color.applyColor();
    }
}