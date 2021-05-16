"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DBFactory_1 = require("./DBFactory");
const DBType_1 = require("./DBType");
class Client {
    main() {
        const mongoInstance = new DBFactory_1.DBFactory().getInstance(DBType_1.DBType.MongoDB);
        const mySqlInstance = new DBFactory_1.DBFactory().getInstance(DBType_1.DBType.MySql);
        mongoInstance.connect();
        mySqlInstance.connect();
    }
}
new Client().main();
