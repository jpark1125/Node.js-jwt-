const connectMySQL = require("./connect");
const crypto = require("crypto");
const signup = async (id, pw, name, age) => {
  const salt = crypto.randomBytes(128).toString("base64"); //salt 생성
  const hasedPassword = crypto
    .createHash("sha512") //sha512알고리즘
    .update(pw + salt) //입력받은 pw에 salt를 합침
    .digest("hex");
  const connect = await connectMySQL();
  const signupSQL = `INSERT INTO login_table(id,pw,name,age,salt) values('${id}', '${hasedPassword}', '${name}', '${age}','${salt}')`;
  connect.execute(signupSQL);
};
module.exports = signup;
