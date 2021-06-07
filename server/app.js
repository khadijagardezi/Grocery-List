const express = require("express");
const authRouter = require("./routes/auth");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

(async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/grocery?gssapiServiceName=mongodb",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Database Connected!");
        app.listen(3001, console.log("Server Started!!"));
      }
    );
  } catch (error) {
    console.log(error.message);
  }
})();
