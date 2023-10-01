// backend in js is made with Express.js
const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

app.use(express.json());

// http://localhost:3001 --> base url

app.get("/", (req, res) => {
  res.send("Hello world");
});

// http://localhost:3001/abc --> base url

app.get("/sum", (req, res) => {
  res.json({
    success: true,
    message: "Hello abc",
  });
});

app.get("/sum/:a/:b", (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  res.json({
    success: true,
    message: `${a + b}`,
  });
});

app.post("/sum", (req, res) => {
  let { a, b } = req.body;

  a = parseInt(a);
  b = parseInt(b);

  res.json({
    success: true,
    message: `${a + b}`,
  });
});

app.listen(port, () => {
  console.log("App is running on 3001");
});
