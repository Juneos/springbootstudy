package com.mhc.bi.common;

import com.mhc.bi.domain.theadvisor.TaskInstance;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author baiyan
 * @date 2018/11/05
 * @description
 */
//TODO 这个类是因为用Mapper不知道怎么生成 where in (1,2,3)临时做的
public class JDBC {
    Connection conn = null;
    Statement stmt = null;
    ResultSet rs;

    public void init() {
        // 不同的数据库有不同的驱动
        String driverName = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://172.21.10.53/forwind?useSSL=false";
        String user = "root";
        String password = "TaoBao-1234";
        try {
            // 加载驱动
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url, user, password);
            stmt = conn.createStatement();
            System.out.println("数据库连接成功..");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int getTotalCountByStatus(String sql) {
        this.init();
        int count = 0;
        try {
            this.stmt = conn.createStatement();
            this.rs = stmt.executeQuery(sql);
            while (rs.next()) {
                count = rs.getInt(1);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                this.rs.close();
                stmt.close();
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return count;
    }

    public List<TaskInstance> selectTaskInstanceList(String sql) {
        List<TaskInstance> taskInstanceList = new ArrayList<>();
        TaskInstance taskInstance;
        this.init();
        try {
            stmt = conn.createStatement();
            rs = stmt.executeQuery(sql);
            while (rs.next()) {
                taskInstance = new TaskInstance();
                taskInstance.setId(rs.getInt("id"));
                taskInstance.setName(rs.getString("name"));
                taskInstance.setShellName(rs.getString("shellname"));
                taskInstance.setInput(rs.getString("input"));
                taskInstance.setOutput(rs.getString("output"));
                taskInstance.setGmtCreate(rs.getString("gmt_create"));
                taskInstance.setGmtModify(rs.getString("gmt_modify"));
                taskInstance.setStatus(rs.getInt("status"));
                taskInstance.setExecuteTime(rs.getString("execute_time"));
                taskInstance.setExecuteDay(rs.getString("execute_day"));
                taskInstance.setParaments(rs.getString("paraments"));
                taskInstance.setParaments(rs.getString("paraments"));
                taskInstanceList.add(taskInstance);
            }
            rs.close();
            stmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return taskInstanceList;
}
}