import { Router } from "express";
import secure from "../services/user-secure.js";
import cookieHelper from "../helpers/cookie-helper.js";
import userController from "../controllers/user-controller.js";
import Token from "../postgres/models/Token.js";
import userSecure from "../services/user-secure.js";
const user_router = Router();
user_router.get("/signup", (req, res) => {
  res.render("form_register", { title: "Registration Form" });
});

user_router.get("/signin", (req, res) => {
  res.render("form_auth", { title: "Auth Form" });
});

user_router.post(
  "/signin",
  userController.check_user,
  Token.add_token,
  cookieHelper.setAccessToken,
  cookieHelper.setRefreshToken,
  async (req, res) => {
    res.redirect("/");
  }
);

user_router.post(
  "/signup",
  userController.add_user,
  Token.add_token,
  cookieHelper.setAccessToken,
  cookieHelper.setRefreshToken,
  async (req, res) => {
    //req.body.id = await userController.add_user(req.body);
    //req.body.uuid = await Token.add_token(req.body.id);

    // const refresh_token = tokenHelper.createRefreshToken({
    //   id: id,
    //   uuid: data_for_token,
    // });
    // res.cookie("refresh", refresh_token, { httpOnly: true });
    // const access_token = tokenHelper.createAccessToken({
    //   id: id,
    //   login: req.body.login,
    // });
    // res.cookie("access", access_token);
    // res.json({
    //   token: access_token,
    // });
    // req.session.user = login;
    // req.session.email = email;
    // res.cookie("user", login);
    // //res.cookie("email", email, { maxAge: 1000000, httpOnly:true });
    // console.log(login, email, password);
    res.json({ token: req.body.access_token });
  }
);

user_router.get("/logout", async (req, res) => {
  await userSecure.get_payload_from_access_token(req.cookies.access);
  res.clearCookie("refresh");
  res.clearCookie("access");
  //TODO:видалити refresh запісь з БД
  req.session.destroy();
  res.redirect("/");
});

//JWT
/*
{
  "login":"your login",
  "email":"email",
  "password":"123",
  "confirm_password":"123"
}
*/

user_router.post("/", (req, res) => {
  const { login, email, password, confirm_password } = req.body;
  if (login.length > 3 && password === confirm_password) {
    const token = secure.generateToken(req.body);
    res.json({ token: token });
  } else {
    res.send("Error");
  }
});

user_router.get("/", secure.generateAccessToken, (req, res) => {
  res.send(req.user);
});
export default user_router;
