const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { ListingSchema } = require("../schema.js");
const Listing = require(`../models/listing.js`);


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
router.get("/", wrapAsync(async (req, res) => {
    const showAll = await Listing.find({});
    res.render("listings/index.ejs", { showAll })

}))

// Search Route
router.get("/search", wrapAsync(async (req, res) => {
    const { q } = req.query;
    if (!q || q.trim() === "") {
        return res.redirect("/listings");
    }
    console.log(q);
    const listings = await Listing.find({
        title: {
            $regex: q,
            $options: "i"
        }
    });

    res.render("listings/index", {
        showAll: listings
    });

}))

// Create Form Route
router.get("/create", (req, res) => {
    res.render("listings/create.ejs")
})

// Create (Post Request)
router.post("/create", validateListing, wrapAsync(async (req, res) => {
    const listing = await Listing.create(req.body.listing);
    res.redirect('/listings')
}));

// Show (Read) Route
router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
        throw new ExpressError(404, "Listing NOT found!")
    }
    res.render("listings/show.ejs", { e: listing })
}));


// Edit (Render Form)
router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing Not Found!")
    }
    res.render('listings/edit.ejs', { e: listing })
}))

// Patch Request (Update Route)
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
        new: true,
        runValidators: true
    });
    res.redirect(`/listings/${id}`)
}));


// Delete Request (Destroy Route)
router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`)
}))

module.exports = router;