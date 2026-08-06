const mongoose = require("mongoose")

async function connnectToDb() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Db ✔️");
    } catch (err) {
        console.error("MONGO DB CONNECT FAILED ❌");
        console.log(err);
    }
}

module.exports = connnectToDb