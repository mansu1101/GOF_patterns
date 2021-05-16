import {Types, ReportTypes} from "./Types";
import {MySqlHelper} from "./MySqlHelper";
import {OracleHelper} from "./OracleHelper";

export class HelperFacade {
    public static generateReport(dbType: Types, reportType: ReportTypes, tableName: string) {
        const con = null;
        switch (dbType) {
            case Types.MYSQL:
                const con1 = MySqlHelper.getMySqlDBConnection();

                const mySqlHelper: MySqlHelper = new MySqlHelper();
                switch (reportType) {
                    case ReportTypes.HTML:
                        console.log('Yes reached here')
                        mySqlHelper.generateMySqlHTMLReport(tableName, con1);
                        break;
                    case ReportTypes.PDF:
                        mySqlHelper.generateMySqlPDFReport(tableName, con1);
                        break;
                }
                break;
            case Types.ORACLE:
                const con = OracleHelper.getOracleDBConnection();

                const oracleHelper: OracleHelper = new OracleHelper();
                switch (reportType) {
                    case ReportTypes.HTML:
                        oracleHelper.generateOracleHTMLReport(tableName, con);
                        break;
                    case ReportTypes.PDF:
                        oracleHelper.generateOraclePDFReport(tableName, con);
                        break;
                }
                break;
        }

    }
}


