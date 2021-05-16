import {IConnection} from "./IConnection";
import {MongodbConnectionManager} from "./MongodbConnectionManager";
import {MySqlConnectionManager} from "./MySqlConnectionManager";
import {DBType} from "./DBType";

export class DBFactory{
    public getInstance(type: DBType) {
        let instance: IConnection;
        switch (type) {
            case DBType.MySql: {
                instance = MySqlConnectionManager.Instance();
                break;
            }
            default: {
                instance = MongodbConnectionManager.Instance();
                break;
            }
        }
        return instance;
    }
}