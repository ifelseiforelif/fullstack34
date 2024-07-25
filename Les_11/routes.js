import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routers = express.Router();

const products = ["bread", "milk", "banana"];

routers.get("/", (req, res) => {
  res.render("home", { title: "Home" });
  //   res.send("<h1>Home page (GET)</h1>");
});

routers.get("/about", (req, res) => {
  //   res.sendFile(path.join(__dirname, "index.html"), (err) => {
  //     console.log(err);
  //   });
  res.render("about", { title: "About" });
});

routers.get("/info", (req, res) => {
  console.log(req.query.product, req.query.price);
  res.send("<h1>Info Page</h1>");
});

routers.post("/info", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

routers.get("/products", (req, res) => {
  res.send("<ul><li>1. Bread</li><li>2. milk</li><ul>");
});

routers.get("/products/:id", (req, res) => {
  console.log(`ID: ${req.params.id}. Product: ${products[req.params.id]}`);
  res.send(`Product name: ${products[req.params.id]}`);
});

export default routers;
