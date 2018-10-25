const http = require("http");

const app = http.createServer(function (request, response) {
  response.write("<h1>Hello World</h>");
  response.end();
})

app.listen(3000); // Listens on port 3000, http://localhost:3000
