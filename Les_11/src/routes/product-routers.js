import { Router } from "express";
const product_routers = Router();

product_routers.get("/", (req, res) => {
  res.send("GET product/");
});

product_routers.get("/:id", (req, res) => {
  res.send("GET product/" + req.params.id);
});

product_routers.delete("/:id", (req, res) => {
  res.send("DELETE product/" + req.params.id);
});

export default product_routers;
