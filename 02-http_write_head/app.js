const http = require("http");

const app = http.createServer(function (request, response) {
  /*
   * Http responses begin with a HEAD string that tells the
   * browser what type of content the message body is, for example
   * "text/plain", "text/html", "image/png", "image/jpg", etc...
   */
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("This is plain text");

  /*
   * Adds ending to Http response so browser knows that's the end
   * of the response
   */
  response.end();
})

app.listen(3000); // Listens on port 3000, http://localhost:3000
