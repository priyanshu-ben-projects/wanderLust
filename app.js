if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

// Imports
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
const engine = require('ejs-mate');
const ATLAS_URL = process.env.ATLAS_URL;
const methodOverride = require("method-override");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")
const User = require("./models/user.js");
const cookieParser = require("cookie-parser");
const { MongoStore } = require("connect-mongo");
const session = require("express-session");
const flash = require("connect-flash")
const localStrategy = require("passport-local")
const passport = require("passport")

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
    await mongoose.connect(ATLAS_URL);
}

// Index Route
app.get("/", (req, res) => {
    res.redirect("/listings")
})


const store = MongoStore.create({
    mongoUrl: ATLAS_URL,
    crypto: {
        secret: "sushi"
    }
})

store.on("error", (err) => {
    console.log("ERROR IN MONGO SESSION STORE", err)
})

const sessionData = {
    store,
    secret: 'sushi',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};


// Session 
app.use(session(sessionData));

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localStrategy(User.authenticate()))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err, null);
    }
});

app.use(flash());


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
})


app.get("/getCookies", (req, res) => {
    let { name = "anonymous" } = req.cookies;
    res.send(`Hi,${name}`);
})

// Routes Here!
app.use("/", userRouter);
app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);


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
