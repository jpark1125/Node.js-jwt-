const express = require("express");
const router = express.Router();
const jwtAuth = require("../auth/jwtAuth");
const profile = require("../SQL/profile");
const verifyjwt = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "JWT가 필요합니다." });
  }
  try {
    const decoded = jwtAuth(token);
    req.user = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "JWT가 유효하지 않습니다." });
  }
};

router.get("/", verifyjwt, async (req, res) => {
  const [result] = await profile(req.user);
  console.log(result);
  res.status(200).json(result);
});

module.exports = router;
