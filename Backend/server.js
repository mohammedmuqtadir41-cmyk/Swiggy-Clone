const express = require("express")
const app = express();



const connnectToDb = require("./config/db")

app.use(express.json());
require("dotenv").config();

const PORT = 8080;
connnectToDb();
app.listen(PORT, ()=> {
    console.log(`The server is running on port: ${PORT} 🚀`);
})