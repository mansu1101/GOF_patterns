class Truck {
    doors = 0;

    addParts() {
        this.doors = 2;
    };

    say() {
        console.log("I am a " + this.doors + "-door truck");
    };
}

export class TruckBuilder {
    truck: Truck;

    step1() {
        this.truck = new Truck();
    }

    step2() {
        this.truck.addParts();
    }

    get() {
        return this.truck;
    }
}