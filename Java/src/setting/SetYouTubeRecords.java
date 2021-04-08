package setting;

import database.Connector;

import java.sql.PreparedStatement;
import java.sql.SQLException;

public class SetYouTubeRecords {
    public SetYouTubeRecords(String url, int queue, String link) {
        String sql = "INSERT INTO Youtube(queue, link) VALUES(?,?)";

        try {
            Connector connector = Connector.connect();
            PreparedStatement pstmt = connector.conn.prepareStatement(sql);
            pstmt.setInt(1, queue);
            pstmt.setString(2, link);
            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
