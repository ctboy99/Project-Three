package database;

import java.sql.Connection;
import java.sql.DriverManager;

public class Connector {
    private static Connector instance = null;
    public Connection conn = null;
    private Connector() {
        String connectionURL = "jdbc:mysql://bts-verse.cw824owciirp.us-east-1.rds.amazonaws.com:3306/btsverse";
        try {
            Connection connection =  DriverManager.getConnection(connectionURL, "admin", "rantworks");
            System.out.println("connected");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /***
     * Singleton implementation of connecting to a database
     * @return A DatabaseConnector object
     */
    public static Connector connect() {
        if (instance == null) {
            instance = new Connector();
        }
        return instance;
    }
}
