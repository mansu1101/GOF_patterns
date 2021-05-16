class Car {
    doors = 0;

    addParts() {
        this.doors = 4;
    };

    say() {
        console.log("I am a " + this.doors + "-door car");
    };
}

export class CarBuilder {
    car: Car;

    step1() {
        this.car = new Car();
    }

    step2() {
        this.car.addParts();
    }

    get() {
        return this.car;
    }
}