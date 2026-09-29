const express = require("express");
const router = express.Router();

const passport = require("passport")
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js")


// Signup Routes
router.route("/signup").get(userController.signupForm).post(wrapAsync(userController.signup));


// Login Form
router.route("/login").get(userController.loginForm).post(saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), wrapAsync(userController.login));



// Logout Route
router.get("/logout", userController.logout)



module.exports = router;