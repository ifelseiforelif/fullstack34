import "dotenv/config";
import express from "express";
import routers from "./routes.js";
import exphbs from "express-handlebars";
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

const app = express();
app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");
app.use(express.static("public"));
app.use(express.json());
app.use(routers);
app.listen(process.env.PORT, () => {
  console.log(`Server is running ... http://localhost:${process.env.PORT}`);
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
