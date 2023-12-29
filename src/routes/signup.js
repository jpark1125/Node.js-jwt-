const express = require("express");
const signup = require("../SQL/signup");
const router = express.Router();
router.post("/", (req, res) => {
  const { id, pw, name, age } = req.body;
  try {
    signup(id, pw, name, age);
    res.status(200).json({
      status: 200,
      message: "회원가입 성공",
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "회원가입 실패",
    });
  }
});
module.exports = router;
