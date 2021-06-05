const express = require("express");
const router = express.Router();

// making 2 routes -- 1 for registeration and 1 for login

router.post("/register", (req, res) => {
  res.json({ msg: "User Registered!" });
});

router.post("/login", (req, res) => {
  res.json({ msg: "User Logged in!" });
});

module.exports = router;
