const express = require("express");
const router = express.Router();
const User = require(`../models/user.js`);
const passport = require("passport")
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middleware.js");

// Signup Routes
router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs");
})
router.post("/signup", wrapAsync(async (req, res, next) => {
    try {
        const { username, password, email } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password)
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to WanderLust!");
            res.redirect("/listings");
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

// Login Routes
router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
})
router.post("/login", saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), async (req, res) => {
    req.flash("success", "User Logged In!");
    res.redirect(res.locals.redirectUrl || "/listings");
})


// Logout Route
router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (!req.isAuthenticated()) {
            req.flash("error", "User Logged Out!");
            return res.redirect("/listings");
        }
        if (err) {
            next(err);
        } else {
            req.flash("success", "User Logged Out!");
            res.redirect("/listings");
        }
    })
})



module.exports = router;