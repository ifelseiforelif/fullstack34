import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logger = (req, res, next) => {
  let ip = req.ip.toString();
  if (ip == "::1") {
    ip = "127.0.0.1";
  }
  fs.appendFile(
    path.join(__dirname, "..", "logs", "logs.txt"),
    "IP: " + ip + "\n",
    () => {
      next();
    }
  );
};
export default logger;
