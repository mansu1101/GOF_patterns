import {EmployeeFactory} from "./Employee";
import {VendorFactory} from "./Vendor";

export class Client {
    run() {
        let persons = [];
        const employeeFactory = new EmployeeFactory();
        const vendorFactory = new VendorFactory();

        persons.push(employeeFactory.create("Joan DiSilva"));
        persons.push(employeeFactory.create("Tim O'Neill"));
        persons.push(vendorFactory.create("Gerald Watson"));
        persons.push(vendorFactory.create("Nicole McNight"));

        for (let i = 0, len = persons.length; i < len; i++) {
            persons[i].say();
        }
    }
}

new Client().run();