import { Router } from "express";
import user from "../services/user-service.js";
const user_router = Router();
user_router.get("/signup", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.get("/signin", (req, res) => {
  res.render("form_auth", { title: "Auth Form" });
});

user_router.post("/signup", (req, res) => {
  const { login, email, password } = req.body;
  req.session.user = login;
  req.session.email = email;
  user.add(login, email, password);
  // res.cookie("user", login);
  // //res.cookie("email", email, { maxAge: 1000000 });
  // res.cookie("email", email);
  console.log(login, email, password);
  res.redirect("/");
});

user_router.get("/logout", (req, res) => {
  // res.clearCookie("user");
  // res.clearCookie("email");
  req.session.destroy();
  res.redirect("/");
});

export default user_router;
