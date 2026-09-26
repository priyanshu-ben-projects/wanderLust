const express = require("express");
const router = express.Router();
const User = require(`../models/user.js`);
const passport = require("passport")

router.get("/signup", (req, res) => {
    res.render("./users/signup.ejs");
})

router.post("/signup", async (req, res) => {
    // console.log(req.body);
    const { username, password, email } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password)
    console.log(registeredUser);
    req.flash("success", "user Successfully registered!");
    res.redirect("/listings");
})

router.get("/login", (req, res) => {
    res.render("./users/login.ejs");
})
router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), async (req, res) => {
    res.redirect("/listings");
})



module.exports = router;