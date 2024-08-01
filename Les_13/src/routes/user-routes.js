import { Router } from "express";
const user_router = Router();
user_router.get("/signup", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.get("/signin", (req, res) => {
  res.render("form_auth", { title: "Auth Form" });
});

user_router.post("/signup", (req, res) => {
  const { login, email, password } = req.body;
  res.cookie("user", login);
  res.cookie("email", email);
  console.log(login, email, password);
  res.redirect("/");
});
export default user_router;
