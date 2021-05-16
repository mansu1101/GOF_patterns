import {IConnection} from "./IConnection";
export class MySqlConnectionManager implements IConnection{
    private static instance: IConnection;
    closeConnection(): any {
        console.log("MySqlConnection closed !!!");
    }

    connect(): any {
        console.log("MySqlConnection established !!!");
    }

    public static Instance(): IConnection {
        if (!this.instance) {
            this.instance = new MySqlConnectionManager();
        }
        return this.instance;
    }

}