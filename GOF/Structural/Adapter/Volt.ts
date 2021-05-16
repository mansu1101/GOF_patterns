export class Volt {

    private volts: number;

    constructor(volt: number) {
        this.volts = volt;
    }

    public get Volts(): number {
        return this.volts;
    }

    public set Volts(volts: number) {
        this.volts = volts;
    }

}