const mysql = require("mysql2/promise");
const connectInfo = {
  host: "localhost",
  port: "3306",
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: "user",
};
const connectMySQL = async () => {
  const connect = await mysql.createConnection(connectInfo);
  connect.connect();
  return connect;
};
module.exports = connectMySQL;
