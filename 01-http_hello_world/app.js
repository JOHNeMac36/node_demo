const http = require("http"); // imports the "http" module

// creating an http server and assigning it to the variable app
const app = http.createServer(function (request, response) {
  /*
   * this is a function that is passed in as an argument
   * which is very common when using javascript. In this case,
   * this function will be run everytime an http request is received
   */

  // writes the content of the http response
  response.write("<h1>Hello World</h>");

  // signals the end of the http response
  response.end();
})

// Listens for http requests on port 3000
app.listen(3000); // you can view this by going to: http://localhost:3000
