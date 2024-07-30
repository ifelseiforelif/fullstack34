import "dotenv/config";
import fs from "fs";
import express from "express";
import https from "https";
import routers from "./routes/site-routers.js";
import exphbs from "express-handlebars";
import user_routers from "./routes/user-routers.js";
import product_routers from "./routes/product-routers.js";
import logger from "./middlewars/logger-middleware.js";
import menu_items from "./middlewars/menu-middleware.js";
const PORT = process.env.PORT | 3000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const privateKey = fs.readFileSync(
  path.join(__dirname, "..", "cert", "server.key")
);
const certificate = fs.readFileSync(
  path.join(__dirname, "..", "cert", "server.crt")
);
const app = express();
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join("src", "views"));
app.use(express.static("public")); //middleware
app.use(express.json());
app.use(logger);
app.use(menu_items);
app.use("/user", user_routers);
app.use("/product", product_routers);
app.use(routers);

app.all("*", (req, res) => {
  res.status(404).render("page404", { layout: false, title: "Not Found" });
});

const httpsServer = https.createServer(
  {
    key: privateKey,
    cert: certificate,
  },
  app
);

httpsServer.listen(PORT, () => {
  console.log(`Server is running ... http://localhost:${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Home page (GET)</h1>");
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"), (err) => {
//     console.log(err);
//   });
// });

// app.post("/", (req, res) => {
//   res.send("<h1>Home page (POST)</h1>");
// });
