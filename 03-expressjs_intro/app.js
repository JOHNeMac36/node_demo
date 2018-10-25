const express = require("express"); // imports the "express" module

// creating a web server with express is as simple as this one line of code
const app = express();

/*
 * the 'get()' function tells your web server what to do
 * when it receives a GET request at a specific URL path
 */

/*
 * this is the http request/response function for when a GET
 * request happens at http:localhost:3000/
 */
app.get("/", function(request, response) {
  response.send(
    `
    <h1>Hello World</h1>
    <a href="/home">Click Me</a>
    `
  );
});

/*
 * this is the http request/response function for when a GET
 * request happens at http:localhost:3000/home
 */
app.get("/home", function(request, response) {
  response.send(
    `
    <h1>Home Page</h1>
    <a href="/">Click Me to Go Back</a>
    `
  );
});

/*
 * the '*' is a wildcard, meaning that if you are at any
 * unspecified website path and to a GET request,
 * this is the default request response
 */
app.get("*", function(request, response) {
  response.send(
    `
    <h1>Page Not Found</h1>
    `
  );
  // uncomment this code to see how to redirect to another page
  //response.redirect("/home");
});

// Listens for http requests on port 3000
app.listen(3000); // you can view this by going to: http://localhost:3000
