const express = require("express");
const authRouter = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.listen(3001, console.log("Server Started!!"));
