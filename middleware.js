const Listing = require("./models/listing.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "User must be logged in!");
        res.redirect("/login");
    } else {
        next();
    }
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}


module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    if (res.locals.currentUser && !listing.owner.equals(res.locals.currentUser._id)) {
        req.flash("error", "You don't have permission to do that!");
        return res.redirect(`/listings/${id}`);
    }

    next();
};

module.exports.isAuthor = async (req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(reviewId);

    if (!review) {
        req.flash("error", "Review does not exist!");
        return res.redirect(`/listings/${id}`);
    }

    if (!review.author.equals(res.locals.currentUser._id)) {
        req.flash("error", "You're not the Author!");
        return res.redirect(`/listings/${id}`)
    }
    next();
};