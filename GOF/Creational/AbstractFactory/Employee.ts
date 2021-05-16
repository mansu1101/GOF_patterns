class Employee {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    say() {
        console.log("I am employee " + this.name);
    }
}

export class EmployeeFactory {
    create(name: string) {
        return new Employee(name);
    }
}