const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const cors = require("cors");

// app.get("/", (req, res) => {
//   res.json({ msg: "Home page" });
// });
app.use(cors());
app.use("/auth", authRouter);

app.listen(3001, console.log("Server Started!!"));
