import jwt from "jsonwebtoken";
import tokenHelper from "../helpers/token-helper.js";
import Token from "../postgres/models/Token.js";
import User from "../postgres/models/User.js";
class Secure {
  generateAccessToken(payload) {
    return jwt.sign(payload, process.env.ACCESS_KEY_JWT, {
      expiresIn: process.env.TIME_ACCESS_TOKEN,
    });
  }
  generateRefreshToken(payload) {
    return jwt.sign(payload, process.env.REFRESH_KEY_JWT, {
      expiresIn: process.env.TIME_REFRESH_TOKEN,
    });
  }
  authenticateAccessToken(req, res, next) {
    // const auth = req.headers["authorization"];
    // const token = auth && auth.split(" ")[1];
    const token = req.cookies.access;
    let payload = "";
    if (token === null || token === undefined) {
      //скористатись refresh токеном
      //якщо и він не годний перекинути на авторізацію
      return res.sendStatus(401);
    } else {
      try {
        payload = jwt.verify(token, process.env.ACCESS_KEY_JWT);
        console.log(payload);
      } catch (e) {
        console.log(e);
        if (e instanceof jwt.JsonWebTokenError) {
          console.log("Invalid Token");

          return res.sendStatus(403);
        }
        if (e instanceof jwt.TokenExpiredError) {
          console.log(res.cookies("refresh"));
          res.cookies(
            "access",
            tokenHelper.createAccessToken({
              id: payload.id,
              login: payload.login,
            })
          );
          return res.sendStatus(403);
        }
      }
    }
    res.locals.user = payload.login;
    //res.send(token);
    next();
  }

  async check_token(req, res, next) {
    const token = req.cookies.access;
    jwt.verify(token, process.env.ACCESS_KEY_JWT, (err, payload) => {
      if (payload) {
        res.locals.user = payload.login;
      }
    });
    // if (token !== undefined && token !== null) {
    //   jwt.verify(token, process.env.ACCESS_KEY_JWT, (err, payload) => {
    //     if (err && err.name === "TokenExpiredError") {
    //       const refresh = req.cookies.refresh;
    //       jwt.verify(refresh, process.env.REFRESH_KEY_JWT, (err, payload) => {
    //         if (err) {
    //         } else {
    //           if (Token.get_one_token(payload)) {
    //             //получить логин
    //             const login = User.get_user_by_id(payload.id).login;
    //             const access_token = tokenHelper.createAccessToken({
    //               id: payload.id,
    //               login: login,
    //             });
    //             res.cookie("access", access_token, { httpOnly: true });
    //           }
    //         }
    //       });
    //     }
    //   });
    // }

    next();
  }

  async get_payload_from_access_token(token) {
    await jwt.verify(token, process.env.ACCESS_KEY_JWT, (err, payload) => {
      if (err) {
        return null;
      } else {
        Token.delete_token(payload.id);
      }
    });
  }

  get_payload_from_refresh_token(token) {
    jwt.verify(token, process.env.REFRESH_KEY_JWT, (err, payload) => {
      if (payload) {
        return payload;
      }
    });
    return null;
  }
}

export default new Secure();
