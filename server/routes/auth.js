const express = require("express");
const User = require("../model/user");

const router = express.Router();

// making 2 routes -- 1 for registeration and 1 for login

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const user = new User({
    email,
    password,
  });

  await user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => console.log(err));
  res.json({
    msg: "User Registered!",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid Email",
      });
    }

    console.log(user);
    if (password == user.password) {
      return res.json({
        msg: "Password Matched!",
      });
    } else {
      return res.json({ msg: "Invalid Password" });
    }
  } catch (error) {
    console.log("Something unexpected!!", error.message);
    return res.json({
      error: "Server Error",
    });
  }
});

module.exports = router;
