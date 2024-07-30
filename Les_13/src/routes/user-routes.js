import { Router } from "express";
const user_router = Router();
user_router.get("/", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.post("/", (req, res) => {
  const { login, email, password } = req.body;
  res.cookie("user", login);
  res.cookie("email", email);
  console.log(login, email, password);
  res.redirect("/user");
});
export default user_router;
