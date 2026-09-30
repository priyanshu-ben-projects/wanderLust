const Review = require("../models/review.js");
const Listing = require(`../models/listing.js`);


module.exports.createReview = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    req.body.review.rating = Number(req.body.review.rating);
    // Create New Review
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    // Save Docs
    await newReview.save();
    await listing.save();
    req.flash("success", "Review Posted!");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteReview = async (req, res) => {

    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Listing.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
};