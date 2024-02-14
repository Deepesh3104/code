const express = require("express");
require("dotenv").config();
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hellow World");
});
app.get("/about", (req, res) => {
  res.send("Welcome Deepesh");
});

app.listen(process.env.PORT, () => {
  console.log("Your Server is running" + port);
});
