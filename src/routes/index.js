const express = require("express");
const login = require("../SQL/login");
const crypto = require("crypto");
const router = express.Router();

router.post("/", async (req, res) => {
  const { id: reqId, pw: reqPW } = req.body;
  const result = await login();
  let success = false;
  result.forEach((info) => {
    const { id, pw, salt } = info;
    const compareHash = crypto
      .createHash("sha512")
      .update(reqPW + salt) //입력받은 pw와 db의 salt를 더하여 해시한다음
      .digest("hex");
    if (id === reqId && pw === compareHash) {
      //비교함
      const response = {
        status: 200,
        message: "로그인 성공",
      };
      res.json(response);
      success = true;
    }
  });
  if (!success) {
    res.status(401).send("로그인 실패");
  }
});
module.exports = router;
