import oracledb from "oracledb";


oracledb.initOracleClient({ libDir: "C:\\oracle\\instantclient-basic-windows.x64-23.9.0.25.07\\instantclient_23_9" });

export const getDbConnection = async () => {
  try {
    const connection = await oracledb.getConnection({
      user: 'system',
      password: 'system',            
      connectString: 'localhost:1521/XEPDB1'

    });
    return connection;
    } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
    }
}
