const express = require("express");
const router = express.Router();

//@route    Get api/posts

router.get("/", (req, res) => {
  res.send("Get Posts");
});

module.exports = router;
