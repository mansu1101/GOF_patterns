import {Shape} from "./Shape";
import {Color} from "./Color";

export class Pentagon extends Shape {
    constructor(color: Color) {
        super(color);
    }

    public applyColor(): void {
        console.log("Pentagon filled with color ");
        this.color.applyColor();
    }
}