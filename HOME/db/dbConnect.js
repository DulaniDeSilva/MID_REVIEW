const mongoose = require("mongoose");
require('dotenv').config();



async function dbConnect(){
    const uri = '';

    mongoose
    .connect(
       uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        }
    )
    .then(() =>{
        console.log("Successfully conneced to MongoDB Atlas!")
    })
    .catch((error) =>{
        console.log("Unable to connect to MongoDB Atlas");
        console.error(error);
    })
}

module.exports = dbConnect;

