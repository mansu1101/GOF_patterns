import {Color} from "./Color";

export abstract class Shape {
    //Composition - implementor
    color: Color;

    //constructor with implementor as input argument
    constructor(c: Color) {
        this.color = c;
    }

    abstract applyColor(): void;
}