const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { ReviewSchema } = require("../schema.js");
const { isAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js")


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
router.post("/", validateReview, wrapAsync(reviewController.createReview));

// Delete Review 
router.delete("/:reviewId", isAuthor, wrapAsync(reviewController.deleteReview));



module.exports = router;