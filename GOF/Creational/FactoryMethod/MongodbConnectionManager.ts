import {IConnection} from "./IConnection";
export class MongodbConnectionManager implements IConnection{
    private static instance: IConnection;

    closeConnection(): any {
        console.log("MongodbConnection closed !!!");
    }

    connect(): any {
        console.log("MongodbConnection established !!!");
    }

    public static Instance(): IConnection {
        if (!this.instance) {
            this.instance = new MongodbConnectionManager();
        }
        return this.instance;
    }

}