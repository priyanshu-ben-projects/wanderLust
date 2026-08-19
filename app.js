// Imports
const express = require('express')
const app = express();
const port = 3000;
const path = require("path")
const Listing = require(`./models/listing.js`)
const mongoose = require("mongoose")
const engine = require('ejs-mate')
const MONGO_URL = `mongodb://127.0.0.1:27017/major`;


// Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));


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


// Create Form Route
app.get("/listings/create", async (req, res) => {
    res.render("listings/create.ejs")
})

// Create (Post Request)
app.post("/listings/create", async (req, res) => {
    const listing = await Listing.create(req.body.listing);
    res.redirect('/listings')
})

// Listen
app.listen(port, () => {
    console.log("Server Running at PORT: " + port);
})