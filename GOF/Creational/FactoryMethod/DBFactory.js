"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBFactory = void 0;
const MongodbConnectionManager_1 = require("./MongodbConnectionManager");
const MySqlConnectionManager_1 = require("./MySqlConnectionManager");
const DBType_1 = require("./DBType");
class DBFactory {
    getInstance(type) {
        let instance;
        switch (type) {
            case DBType_1.DBType.MySql: {
                instance = MySqlConnectionManager_1.MySqlConnectionManager.Instance();
                break;
            }
            default: {
                instance = MongodbConnectionManager_1.MongodbConnectionManager.Instance();
                break;
            }
        }
        return instance;
    }
}
exports.DBFactory = DBFactory;
