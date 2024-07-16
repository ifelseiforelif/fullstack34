import dotenv from "dotenv";
dotenv.config();
import http from "http";
import fs from "fs";
import path from "path";
const server = http.createServer();
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpeg": "image/jpeg",
  ".jfif": "image/jfif",
};

function includeStaticFile(res, filePath, ext) {
  res.setHeader("Content-Type", mimeTypes[ext]);
  fs.readFile("./public/" + filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
}

server.on("request", (req, res) => {
  const url = req.url;
  console.log(url);
  switch (url) {
    case "/": {
      fs.readFile("./public/index.html", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.write(data);
        }
        res.end();
      });
      break;
    }
    case "/api/message": {
      console.log("OK");
      res.end();
      //   if (req.method === "POST") {
      //     console.log("OK");
      //   } else {
      //     res.statusCode = 404;
      //     res.end;
      //   }
      break;
    }
    default: {
      const extname = String(path.extname(url)).toLocaleLowerCase();
      if (extname in mimeTypes) {
        includeStaticFile(res, url, extname);
      } else {
        res.statusCode = 404;
        res.end();
      }
      break;
    }
  }
});
server.listen(process.env.PORT, () => {
  console.log(`Server start... ${process.env.host}:${process.env.PORT}:`);
});
