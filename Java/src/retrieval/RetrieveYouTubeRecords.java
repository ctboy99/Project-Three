package retrieval;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.LinkedHashMap;

import database.Connector;


public class RetrieveYouTubeRecords {
    public ArrayList<LinkedHashMap<String, Object>> selectAll() {
        String sql = "SELECT * FROM Youtube";
        ArrayList<LinkedHashMap<String, Object>> results = new ArrayList<>();

        try {
            Connection conn = Connector.connect().conn;
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql);

            while (rs.next()) {
                LinkedHashMap<String, Object> result = new LinkedHashMap<>();
                result.put("queue", rs.getInt("queue"));
                result.put("link", rs.getString("link"));
                results.add(result);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return results;
    }
}
