const express = require("express");
const router = express.Router();

//@route    Get api/auth

router.get("/", (req, res) => {
  res.send("Get Auth");
});

module.exports = router;
