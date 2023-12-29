const connectMySQL = require("./connect");
const profile = async (id) => {
  const connect = await connectMySQL();
  const SQL = `SELECT name, age from login_table where id='${id}'`;
  const [row] = await connect.execute(SQL);
  return row;
};
module.exports = profile;
