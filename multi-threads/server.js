import http from "node:http";
import crypto from "node:crypto";
const PORT = 4200;
const app = http.createServer((req, res) => {
  if (req.url == "/") {
    for (let i = 0; i < 10; i++) {
      crypto.randomBytes(64).toString("hex");
    }
    res.write("OK");
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
