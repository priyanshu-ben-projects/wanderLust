
const User = require(`../models/user.js`);


module.exports.signupForm = (req, res) => {
    res.render("./users/signup.ejs");
};

module.exports.signup = async (req, res, next) => {
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
};


module.exports.loginForm = (req, res) => {
    res.render("./users/login.ejs");
};


module.exports.login = async (req, res) => {
    req.flash("success", "User Logged In!");
    res.redirect(res.locals.redirectUrl || "/listings");
};

module.exports.logout = (req, res) => {
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
};