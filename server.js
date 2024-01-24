// console.log(" Hello, Deepak! ");

const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Hello Node API, Deepak!");
});

app.get("/blog", (req, res) => {
  res.send("Hello Deepak!, Its my first blog page");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

