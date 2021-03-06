const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const postRoute = require("./routers/posts");
app.use("/posts", postRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected");
});
