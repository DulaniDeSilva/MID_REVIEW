const jwt = require('jsonwebtoken');

module.exports = async(request, response, next) =>{
    try{
        //getting the authenitication token from header
        const token = await request.headers.authorization.split("")[1];

        //checking the token match with supposed origin
        const decodedToken = await jwt.verify(token, "RANDOM-TOKEN");

        //getting the user details of the logged in user
        const user = await decodedToken;

        //passing the user down to the endpoints
        request.user = user;

        next();

    }catch(error){
        response.status(401).json({
            error:new Error ("Invalid request !")
        });
    }
}