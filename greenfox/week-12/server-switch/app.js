const http = require("http");

// Router
const server = http.createServer(function (req, res) {
  switch (true) {
    case req.url === "/" && req.method === "GET":
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(200);
      res.end('Címlap <a href= "/bejelentkezes"> Bejelentkezés </a>');
      break;
    case req.url === "/bejelentkezes" && req.method === "GET":
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(200);
      res.end('Bejelentkezés <a href= "/"> Címlap </a>');
      break;
    default:
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.writeHead(404);
      res.end("Oldal nem található");
  }

  console.log(req.url);
  console.log(req.method);
});

server.listen(8081);
