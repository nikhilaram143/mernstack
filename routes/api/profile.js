const express = require("express");
const router = express.Router();

//@route    Get api/profile

router.get("/", (req, res) => {
  res.send("Get Profile");
});

module.exports = router;
