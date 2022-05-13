const express = require("express");
const app = express();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Hello World!");
});

app.get("/signup", (req, res) => {
  res.send("Hello World!");
});
