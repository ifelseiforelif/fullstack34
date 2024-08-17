const auth = (req, res, next) => {
  //   if (req.cookies.user && req.cookies.email) {
  //     res.locals.user = req.cookies.user;
  //   }
  if (req.session.user && req.session.email) {
    res.locals.user = req.session.user;
  }
  next();
};

const user_auth = (req, res, next) => {
  if (req.session.user && req.session.email) {
    return res.redirect("/");
  }
  next();
};

export { auth, user_auth };
