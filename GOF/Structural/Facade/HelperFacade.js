"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelperFacade = void 0;
const Types_1 = require("./Types");
const MySqlHelper_1 = require("./MySqlHelper");
const OracleHelper_1 = require("./OracleHelper");
class HelperFacade {
    static generateReport(dbType, reportType, tableName) {
        const con = null;
        switch (dbType) {
            case Types_1.Types.MYSQL:
                const con1 = MySqlHelper_1.MySqlHelper.getMySqlDBConnection();
                const mySqlHelper = new MySqlHelper_1.MySqlHelper();
                switch (reportType) {
                    case Types_1.ReportTypes.HTML:
                        console.log('Yes reached here');
                        mySqlHelper.generateMySqlHTMLReport(tableName, con1);
                        break;
                    case Types_1.ReportTypes.PDF:
                        mySqlHelper.generateMySqlPDFReport(tableName, con1);
                        break;
                }
                break;
            case Types_1.Types.ORACLE:
                const con = OracleHelper_1.OracleHelper.getOracleDBConnection();
                const oracleHelper = new OracleHelper_1.OracleHelper();
                switch (reportType) {
                    case Types_1.ReportTypes.HTML:
                        oracleHelper.generateOracleHTMLReport(tableName, con);
                        break;
                    case Types_1.ReportTypes.PDF:
                        oracleHelper.generateOraclePDFReport(tableName, con);
                        break;
                }
                break;
        }
    }
}
exports.HelperFacade = HelperFacade;
