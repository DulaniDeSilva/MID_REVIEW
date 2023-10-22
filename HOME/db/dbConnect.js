const mongoose = require("mongoose");
require('dotenv').config();



async function dbConnect(){
    const uri = 'mongodb+srv://DulaniDeSilva:gE5asE7vw8T0U7oN@cluster0.feyg0t1.mongodb.net/?retryWrites=true&w=majority';

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

