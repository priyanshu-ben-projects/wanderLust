module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.flash("error", "User must be logged in!");
        res.redirect("/login");
    } else {
        next();
    }
}