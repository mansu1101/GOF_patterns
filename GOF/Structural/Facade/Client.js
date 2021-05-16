"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MySqlHelper_1 = require("./MySqlHelper");
const OracleHelper_1 = require("./OracleHelper");
const HelperFacade_1 = require("./HelperFacade");
const Types_1 = require("./Types");
class Client {
    static main() {
        const tableName = "Employee";
        //generating MySql HTML report and Oracle PDF report without using Facade
        const con = MySqlHelper_1.MySqlHelper.getMySqlDBConnection();
        const mySqlHelper = new MySqlHelper_1.MySqlHelper();
        mySqlHelper.generateMySqlHTMLReport(tableName, con);
        const con1 = OracleHelper_1.OracleHelper.getOracleDBConnection();
        const oracleHelper = new OracleHelper_1.OracleHelper();
        oracleHelper.generateOraclePDFReport(tableName, con1);
        //generating MySql HTML report and Oracle PDF report using Facade
        HelperFacade_1.HelperFacade.generateReport(Types_1.Types.MYSQL, Types_1.ReportTypes.HTML, tableName);
        HelperFacade_1.HelperFacade.generateReport(Types_1.Types.ORACLE, Types_1.ReportTypes.PDF, tableName);
    }
}
Client.main();
