const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner } = require("../middleware.js")
const listingController = require("../controllers/listings.js");
const { ListingSchema } = require("../schema.js");


// Server Side Validation
const validateListing = (req, res, next) => {
    const { error } = ListingSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg)
    } else {
        next();
    }
};



// Listings Route
router.get("/", wrapAsync(listingController.index));

// Search Route
router.get("/search", wrapAsync(listingController.searchListing));

// Create Form Route
router.route("/create").get(isLoggedIn, listingController.createForm)
    .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing));


// Show (Read) Route
router.route("/:id").get(wrapAsync(listingController.showListing)).put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing)).delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));


// Edit (Render Form)
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editForm));


module.exports = router;