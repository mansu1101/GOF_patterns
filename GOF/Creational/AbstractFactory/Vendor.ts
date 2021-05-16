class Vendor {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    say() {
        console.log("I am Vendor " + this.name);
    }
}

export class VendorFactory {
    create(name: string) {
        return new Vendor(name);
    }
}