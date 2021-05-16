"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbConnectionManager = void 0;
class MongodbConnectionManager {
    closeConnection() {
        console.log("MongodbConnection closed !!!");
    }
    connect() {
        console.log("MongodbConnection established !!!");
    }
    static Instance() {
        if (!this.instance) {
            this.instance = new MongodbConnectionManager();
        }
        return this.instance;
    }
}
exports.MongodbConnectionManager = MongodbConnectionManager;
