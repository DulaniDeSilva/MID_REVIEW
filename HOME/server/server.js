const express = require('express');

const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


const dbConnect = require("../db/dbConnect");
dbConnect();
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Accesss-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
})

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../db/userModel");

const auth = require("./auth");

app.post("/signin", (request, response) =>{
    //hashing the password
    bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword)=>{
        //creating a new user instance and colect data
        const user = new User({
            email: request.body.email,
            password: hashedPassword,
        });

        //saving the new user
        user
        .save()
        .then((result) =>{
            response.status(201).send({
                message: "User Created Successfully",
                result,
            });
        })

        //catching error if the new user wasnt added to database
        .catch((error)=>{
            response.status(500).send({
                message: "Error creating user",
                error,
            });
        });
    
        
    })
    //catch error if the password hash isnot successful
    .catch((e) =>{
        response.status(500).send({
            message: "Password was not hashed successfully",
            e,
        });
    });
});



//login endpoint
app.post("/login", (request, response) => {
    //checking email exist 
    User.findOne({email :request.body.email})
    //if exists
    .then((user) =>{
        //comparing the password entered and hased
        bcrypt
        .compare(request.body.password, user.password)
        .then((passwordCheck) =>{
            if(!passwordCheck){
                return response.status(400).send({
                    message: "Password does not match",
                    error,
                });
            }
            //creating jwt token
            const token= jwt.sign(
                {
                    userId: user._id,
                    userEmail:user.email,
                },
                "RANDOM-TOKEN",
                {expiresIn: "24h"}
            );
            response.status(200).send({
                message: "Login Successfull",
                email:user.email,
                token,
            });
        })
        //if password do not match
        .catch((error) =>{
            response.status(400).send({
                message: "Password does not match",
                error,
            });
        });
    })

    //catch error if email does not exist
    .catch((e) =>{
        response.status(404).send({
            message: "Email not found",
            e,
        });
    });
});


//protecting the endpoints: form unautheniticated users

//free endpoint
app.get("/free-endpoint", (request, response) =>{
    reeponse.json({message: "You are free to access me anytime"});
})

//authenitication endpoint
app.get("/auth-endpont", (request, response) =>{
    response.json({message : "You are authorized ot access me"});
})


app.get("/auth-endpoint", auth, (request, response) =>{
    response.json({message: "You are authorized to access me"})
});






app.listen(8000,()=>{
    console.log("port connected");
})