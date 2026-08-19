// Imports
const express = require('express')
const app = express();
const port = 3000;
const path = require("path")
const Listing = require(`./models/listing.js`)
const mongoose = require("mongoose")
const engine = require('ejs-mate')
const MONGO_URL = `mongodb://127.0.0.1:27017/major`;
const methodOverride = require("method-override");

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
    mongoose.connect(MONGO_URL);
}


// Index Route
app.get("/", (req, res) => {
    res.send("Server Running!")
})


// Listings Route
app.get("/listings", async (req, res) => {
    const showAll = await Listing.find({});
    res.render("listings/index.ejs", { showAll })

})

// Search Route
app.get("/listings/search", async (req, res) => {
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

})

// Create Form Route
app.get("/listings/create", async (req, res) => {
    res.render("listings/create.ejs")
})

// Create (Post Request)
app.post("/listings/create", async (req, res) => {
    const listing = await Listing.create(req.body.listing);
    res.redirect('/listings')
})

// Show (Read) Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { e: listing })
})


// Edit (Render Form)
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render('listings/edit.ejs', { e: listing })
})

// Patch Request (Update Route)
app.put("/listings/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body.listing)
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect(`/listings/${id}`)
})

// Delete Request (Destroy Route)
app.delete("/listings/:id", async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findByIdAndDelete(id);
    res.redirect(`/listings`)
})

// Listen
app.listen(port, () => {
    console.log("Server Running at PORT: " + port);
})