const jwt = require("jsonwebtoken");
const jwtAuth = (token) => {
  return jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      throw err;
    }
    return decoded;
  });
};
module.exports = jwtAuth;
