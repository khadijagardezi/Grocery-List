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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid Email" });
    }

    if (password == user.password) {
      res.json({
        msg: "Password matched",
      });
    } else {
      res.json({ error: "Invalid Password" });
    }
  } catch (error) {}

  res.json({ msg: "Unexpected!!!" });
});

module.exports = router;
