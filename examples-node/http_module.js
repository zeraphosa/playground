const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(req.url, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Sayfa Yok");
        return;
      }
      res.write("Test");
      res.end(data);
    });
  })
  .listen(1234);
