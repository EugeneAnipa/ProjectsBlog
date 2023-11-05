require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(bodyParser.json());

app.get("/", function (request, respond) {
  respond.render("index");
});

app.get("/bmicalc", function (request, respond) {
  respond.render("bmicalc");
});

app.post("/", function (request, respond) {
  respond.render("");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started on port");
});
