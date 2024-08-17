import { Router } from "express";
const site_router = Router();
site_router.get("/", (req, res) => {
  res.render("home", { title: "Home" });
});
export default site_router;
