import {MySqlHelper} from "./MySqlHelper";
import {OracleHelper} from "./OracleHelper";
import {HelperFacade} from "./HelperFacade";
import {Types, ReportTypes} from "./Types";

class Client {

    public static main() {
    const tableName: string  ="Employee";

    //generating MySql HTML report and Oracle PDF report without using Facade
    const  con = MySqlHelper.getMySqlDBConnection();
    const mySqlHelper: MySqlHelper  = new MySqlHelper();
    mySqlHelper.generateMySqlHTMLReport(tableName, con);

    const con1 = OracleHelper.getOracleDBConnection();
    const oracleHelper:OracleHelper = new OracleHelper();
    oracleHelper.generateOraclePDFReport(tableName, con1);

    //generating MySql HTML report and Oracle PDF report using Facade
    HelperFacade.generateReport(Types.MYSQL, ReportTypes.HTML, tableName);
    HelperFacade.generateReport(Types.ORACLE, ReportTypes.PDF, tableName);
}

}
Client.main();