const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.get("/submit_name", function(request, response){
  response.render("submit_name", {message: ""});
})

app.post("/submit_name", function(request, response){
  const firstname = request.body.fname;
  const lastname = request.body.lname;

  console.log(firstname + " " + lastname + " posted stuff");
  response.render("submit_name", {message: "Thanks for Posting"});
})

app.get("*", function(request, response) {
  response.send(
    `
    <h1>Page Not Found</h1>
    `
  );
  //response.redirect("/home");
});

app.listen(3000); // Listens on port 3000, http://localhost:3000
