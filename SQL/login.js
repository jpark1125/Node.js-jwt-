const connectMySQL = require("./connect");
const login = async (id, pw) => {
  const connect = await connectMySQL();
  const SQL = `SELECT id,pw,salt from login_table`;
  const [rows] = await connect.execute(SQL);
  return rows;
};
module.exports = login;
