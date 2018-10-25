const http = require("http"); // imports the "http" module

const app = http.createServer(function (request, response) {
  /*
   * this is a function that is passed in as an argument
   * which is very common when using javascript. In this case,
   * this function will be run everytime an http request is received
   */

  /*
   * Http responses begin with a HEAD string that tells the
   * browser what type of content the message body is, for example
   * "text/plain", "text/html", "image/png", "image/jpg", etc...
   */
  response.writeHead(200, {"Content-Type": "text/plain"});

  // writes the content of the http response
  response.write("This is plain text");

  // signals the end of the http response
  response.end();
})

// Listens for http requests on port 3000
app.listen(3000); // you can view this by going to: http://localhost:3000
