const Listing = require("../models/listing");
const ExpressError = require("../utils/ExpressError.js");


const heroData = {
    titlePrefix: "Explore The World",
    highlightText: "Without Limits",
    subtitle: "Discover hand-picked tropical destinations, exclusive travel packages, and custom itineraries crafted for your next big adventure.",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    badge: {
        tag: "EXPLORE 2026",
        text: "Special Summer Packages Available"
    },
    primaryCtaText: "Start Exploring",
    primaryCtaUrl: "#search-bar",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    stats: [
        { value: "500+", label: "Destinations" },
        { value: "12k+", label: "Happy Travelers" },
        { value: "4.9 ★", label: "Average Rating" }
    ],
    featuredSpot: {
        title: "Ubud Cultural Eco-Resort",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
    searchActionUrl: "/search"
};

module.exports.index = async (req, res) => {
    const showAll = await Listing.find({}).populate("owner");
    res.render("listings/index.ejs", { showAll, heroData })

};

module.exports.searchListing = async (req, res) => {
    const { q } = req.query;
    if (!q || q.trim() === "") {
        return res.redirect("/listings");
    }

    const listings = await Listing.find({
        title: {
            $regex: q,
            $options: "i"
        }
    });

    res.render("listings/index", {
        showAll: listings,
        heroData: heroData,
    });

};

module.exports.createForm = (req, res) => {
    res.render("listings/create.ejs");
};

module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect('/listings')
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listings Not Found!");
        return res.redirect("/listings");
        // throw new ExpressError(404, "Listing NOT found!")
    }
    res.render("listings/show.ejs", { e: listing })
};


module.exports.editForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing Not Found!")
    }
    res.render('listings/edit.ejs', { e: listing })
};


module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing, {
        new: true,
        runValidators: true
    });
    req.flash("success", "Listing Updated!")
    return res.redirect(`/listings/${id}`)
};

module.exports.deleteListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect(`/listings`)
};