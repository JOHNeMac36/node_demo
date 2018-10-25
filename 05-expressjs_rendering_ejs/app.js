const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.get('/', function(request, response) {
  response.send(
    `
    <a href="/home">Click Me</a>
    `
  );
});

app.get('/home', function(request, response) {
  response.render("index.ejs");
});

app.get("*", function(request, response) {
  response.send(
    `
    <h1>Page Not Found</h1>
    `
  );
  //response.redirect("/home");
});

app.listen(3000); // Listens on port 3000, http://localhost:3000
