import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",   // hoặc "127.0.0.1"
  port: 3306,
  user: "root",
  password: "",        // đổi theo cấu hình MySQL
  database: "testdb"
});

export default pool;
