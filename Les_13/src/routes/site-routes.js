import { Router } from "express";
import { user_auth } from "../middlewars/user-middleware.js";
const site_router = Router();
site_router.get("/", user_auth, (req, res) => {
  res.render("home", { title: "Home" });
});
export default site_router;
