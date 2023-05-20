
var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
  res.redirect("index.html");
});
app.listen(3000, function () {
  console.log("Game is running on port 3000");
});