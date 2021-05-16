"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlConnectionManager = void 0;
class MySqlConnectionManager {
    closeConnection() {
        console.log("MySqlConnection closed !!!");
    }
    connect() {
        console.log("MySqlConnection established !!!");
    }
    static Instance() {
        if (!this.instance) {
            this.instance = new MySqlConnectionManager();
        }
        return this.instance;
    }
}
exports.MySqlConnectionManager = MySqlConnectionManager;
