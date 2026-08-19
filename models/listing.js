const mongoose = require("mongoose");

const defaultLink = "https://i.pinimg.com/originals/98/61/79/9861791d200896f9e966db09978c09f2.jpg?nii=t";

const ListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: defaultLink,
            set: (e) => e === "" ? defaultLink : e
        }
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 4.5
    }
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;