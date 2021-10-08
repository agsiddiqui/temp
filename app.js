const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end;
  }
  res.write("Welcome to my page");
  res.end();
});

server.listen(5000);
