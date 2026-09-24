// Imports
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const engine = require('ejs-mate');
const MONGO_URL = `mongodb://127.0.0.1:27017/major`;
const methodOverride = require("method-override");
const listings = require("./routes/listing.js");
const review = require("./routes/review.js")
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash")

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.engine('ejs', engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

main().then(() => {
    console.log("DB Connected!")
}).catch((err) => {
    console.log(err)
})


async function main() {
    await mongoose.connect(MONGO_URL);
}

app.use(session({
    secret: 'sushi',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}));

// Index Route
app.get("/", (req, res) => {
    res.redirect("/listings")
})

app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})

app.get("/getCookies", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`Hi,${name}`);
})

app.use("/listings", listings);
app.use("/listings/:id/reviews", review);


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
