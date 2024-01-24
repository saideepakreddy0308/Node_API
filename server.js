// console.log(" Hello, Deepak! ");

const express = require("express");
const app = express();
const Product = require('./models/productModel');
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello Node API, Deepak!");
});

app.get("/blog", (req, res) => {
  res.send("Hello Deepak!, Its my first blog page");
});

app.post('/product', (req, res) => {
    // req is the request that's coming from the client, and res is the response that's being sent back from the server.
  res.send('Hello Deepak!, Its my first product page');
  console.log(req.body);
  try {
    const product = Product.create(req.body);
    return res.status(201).json({
      success: true,
      data: product
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});