// Imports
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")
const Listing = require(`./models/listing.js`)
const mongoose = require("mongoose")
const engine = require('ejs-mate')
const MONGO_URL = `mongodb://127.0.0.1:27017/major`;
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js")
const ExpressError = require("./utils/ExpressError.js");
const { ListingSchema } = require("./schema.js")



// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));



main().then(() => {
    console.log("DB Connected!")
}).catch((err) => {
    console.log(err)
})


async function main() {
    await mongoose.connect(MONGO_URL);
}

const validateListing = (req, res, next) => {
    const { error } = ListingSchema.validate(req.body);

    if (error) {
        const msg = error.details.map(el => el.message).join(", ");
        throw new ExpressError(400, msg)
    } else {
        next();
    }
};


// Index Route
app.get("/", (req, res) => {
    res.redirect("/listings")
})


// Listings Route
app.get("/listings", wrapAsync(async (req, res) => {
    const showAll = await Listing.find({});
    res.render("listings/index.ejs", { showAll })

}))

// Search Route
app.get("/listings/search", wrapAsync(async (req, res) => {
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
app.get("/listings/create", (req, res) => {
    res.render("listings/create.ejs")
})

// Create (Post Request)
app.post("/listings/create", validateListing, wrapAsync(async (req, res) => {
    const listing = await Listing.create(req.body.listing);
    res.redirect('/listings')
}));

// Show (Read) Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing NOT found!")
    }
    res.render("listings/show.ejs", { e: listing })
}));


// Edit (Render Form)
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing Not Found!")
    }
    res.render('listings/edit.ejs', { e: listing })
}))

// Patch Request (Update Route)
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing, {
        new: true,
        runValidators: true
    });
    res.redirect(`/listings/${id}`)
}));


// Delete Request (Destroy Route)
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`)
}))


app.all("/*splat", (req, res, next) => {
    next(new ExpressError(404, "Page not Found!"));
});


// Default Error Handler
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong!" } = err;
    console.log(err);

    res.status(statusCode).render("error.ejs", { statusCode, message });
});

// Listen
app.listen(PORT, () => {
    console.log("Server Running at PORT: " + PORT);
})