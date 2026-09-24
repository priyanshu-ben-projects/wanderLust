const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { ReviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require(`../models/listing.js`);

const validateReview = (req, res, next) => {
    const { error } = ReviewSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg);
    } else {
        next();
    }
}

// Review Feature
router.post("/", validateReview, wrapAsync(async (req, res) => {
    console.log(req.body)

    const { id } = req.params;
    const listing = await Listing.findById(id);
    req.body.review.rating = Number(req.body.review.rating);
    // Create New Review
    const newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    // Save Docs
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Posted!");
    res.redirect(`/listings/${id}`);
}));

// Delete Review 
router.delete("/:reviewId", wrapAsync(async (req, res) => {

    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Listing.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}));



module.exports = router;