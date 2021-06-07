const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

makeConnection();

async function makeConnection() {
  mongoose.connect(
    "mongodb://127.0.0.1:27017/groceryapp?gssapiServiceName=mongodb",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    },
    () => {
      console.log("Database Connected!");
      app.listen(3001, console.log("Server Started!!"));
    }
  );
}
