import http from "http";
import fs from "fs";
const PORT = 3050;
const server = http.createServer();
server.on("request", (req, res) => {
  const url = req.url;
  console.log(url);
  switch (url) {
    case "/": {
      fs.readFile("./pages/home.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;
    }
    case "/about": {
      fs.readFile("./pages/about.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;
    }
    case "/public/cat.jfif": {
      fs.readFil("./" + url, (err, data) => {
        res.write(data);
        res.end();
      });

      break;
    }
    default:
      res.statusCode = 404;
      res.end("not found");
      break;
  }
});
//TODO: додати обробку помилок
server.on("error", (err) => {
  console.log(err);
});
server.listen(PORT, () => {
  console.log(`Server start http://localhost:${PORT}`);
});

// http
//   .createServer((request, response) => {
//     console.log("request");
//     response.end("hello");
//   })
//   .listen(3050, () => {
//     console.log("Server start....");
//   })
//   .setTimeout(2000);

//127.0.0.1 => localhost
//http://localhost:3050
