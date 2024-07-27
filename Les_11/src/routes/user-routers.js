import { Router } from "express";
const user_routers = Router();

user_routers.get("/", (req, res) => {
  res.send("GET user/");
});

user_routers.get("/:id", (req, res) => {
  res.send("GET user/" + req.params.id);
});

user_routers.delete("/:id", (req, res) => {
  res.send("DELETE user/" + req.params.id);
});

user_routers.post("/", (req, res) => {
  const { user, email } = req.body;
  res.json({ status: "OK", message: `Hello ${user}` });
});

export default user_routers;
