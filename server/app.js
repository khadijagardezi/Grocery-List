const express = require("express");
const app = express();
const authRouter = require("./routes/auth");

app.get("/", (req, res) => {
  res.json({ msg: "Home page" });
});

app.use("/auth", authRouter);

app.listen(3001, console.log("Server Started!!"));
