// console.log(" Hello, Deepak! ");

const express = require("express");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Hello Node API, Deepak!");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

