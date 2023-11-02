const User = require("../models/user");

// signup render page

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};
// signup page
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/signup");
  }
};

// login render page

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};
// login page
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to your Wandlust account!");
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

// logout page

module.exports.logout = (req, res) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out!");
    res.redirect("/listings");
  });
};
