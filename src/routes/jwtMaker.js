const jwt = require("jsonwebtoken");
const jwtMaker = (id) => {
  const payload = { id: id };
  const secret = process.env.SECRET;
  const options = {
    expiresIn: "15m",
  };
  const token = jwt.sign(payload, secret, options);
  return token;
};
module.exports = jwtMaker;
