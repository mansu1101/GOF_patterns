import {Color} from "./Color";

export class RedColor implements Color {
    public applyColor(): void {
        console.log("red.");
    }
}

export class GreenColor implements Color {
    public applyColor(): void {
        console.log("green.");
    }
}