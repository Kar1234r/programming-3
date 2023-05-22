
var express = require("express");
var app = express();
app.use(express.static("../client"));
app.get("/", function (req, res) {
  res.redirect("index.html");
});
app.listen(3000, function () {
  console.log("Game is running on port 3000");
});

var Predator = require("./my_moduls/Predator")
var Black_dragon = require("./my_moduls/Black_dragon")
var GrassEater = require("./my_moduls/GrassEater")
var Grass = require("./my_moduls/Grass")
var knight = require("./my_moduls/knight")

var matrix = [];
 function generateMatrix(){

 }
 generateMatrix()
 console.log(matrix)