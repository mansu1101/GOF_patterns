import {DBFactory} from "./DBFactory";
import {DBType} from "./DBType";

class Client {
    main() {
        const mongoInstance = new DBFactory().getInstance(DBType.MongoDB);
        const mySqlInstance = new DBFactory().getInstance(DBType.MySql);
        mongoInstance.connect();
        mySqlInstance.connect();
    }
}

new Client().main();