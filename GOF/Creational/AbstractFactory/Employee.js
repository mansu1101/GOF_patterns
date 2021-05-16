"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeFactory = void 0;
class Employee {
    constructor(name) {
        this.name = name;
    }
    say() {
        console.log("I am employee " + this.name);
    }
}
class EmployeeFactory {
    create(name) {
        return new Employee(name);
    }
}
exports.EmployeeFactory = EmployeeFactory;
