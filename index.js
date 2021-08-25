var express = require("express");
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "",
  database: "petsdb",
});

var app = express();

app.get("/", function (req, res) {
  connection.connect();
  connection.query(
    "SELECT 1 + 1 AS solution",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
      connection.end();
    }
  );
  res.send("All pets!");
});

app.post("/", function (req, res) {
  res.send("Post a new pet.");
});

app.get("/:id(\\d+)/", function (req, res) {
  res.send("Get pet with id -> " + req.params.id);
});

app.patch("/:id(\\d+)/", function (req, res) {
  res.send("Patch id " + req.params.id);
});

app.delete("/:id(\\d+)/", function (req, res) {
  res.send("Delete id -> " + req.params.id);
});

app.listen(3000, "localhost");
