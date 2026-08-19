const Listing = require(`../models/listing.js`)
const mongoose = require("mongoose")
const initData = require("../init/data.js")


const MONGO_URL = `mongodb://127.0.0.1:27017/major`;

main().then(() => {
    console.log("DB Connected!")
}).catch((err) => {
    console.log(err)
})


async function main() {
    mongoose.connect(MONGO_URL);
}



const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("DB is ready, but your ex isn't 😢");
}

initDB();