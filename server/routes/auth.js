const express = require("express");
const router = express.Router();
const User = require("../model/user");

// making 2 routes -- 1 for registeration and 1 for login

router.post("/register", async (req, res) => {
  const { name, email, city, password } = req.body;

  try {
    const user = new User({
      name,
      email,
      city,
      password,
    });
    await user.save();

    res.json({ msg: "User Registered!" });
  } catch (error) {
    console.log(error.message);
    res.json({ error: "Unexpected!!!" });
  }
});

router.post("/login", (req, res) => {
  res.json({ msg: "User Logged in!" });
});

module.exports = router;
