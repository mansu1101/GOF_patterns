"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const Employee_1 = require("./Employee");
const Vendor_1 = require("./Vendor");
class Client {
    run() {
        let persons = [];
        const employeeFactory = new Employee_1.EmployeeFactory();
        const vendorFactory = new Vendor_1.VendorFactory();
        persons.push(employeeFactory.create("Joan DiSilva"));
        persons.push(employeeFactory.create("Tim O'Neill"));
        persons.push(vendorFactory.create("Gerald Watson"));
        persons.push(vendorFactory.create("Nicole McNight"));
        for (let i = 0, len = persons.length; i < len; i++) {
            persons[i].say();
        }
    }
}
exports.Client = Client;
new Client().run();
