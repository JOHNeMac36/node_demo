const express = require("express");

const app = express();

app.get('/', function(request, response) {
  response.send(
    `
    <h1>Hello World</h1>
    <a href="/home">Click Me</a>
    `
  );
});

app.get('/home', function(request, response) {
  response.send(
    `
    <h1>Home Page</h1>
    <a href="/">Click Me to Go Back</a>
    `
  );
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
