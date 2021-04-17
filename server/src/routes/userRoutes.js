const express = require("express");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- GET ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the user route");
});

//--------------- POST ROUTES ---------------//

router.post("/register", (request, response) => {
    
    const body = request.body;
    console.log("new user details: ", body);
    
    const passwordHash = bcrypt.hashSync(body.password, 10);
    console.log("Here's the password hash: ", passwordHash);

    const user = { username: body.username, password: passwordHash };
    console.log("hashed user details: ", user);

    UserModel.create(user).then((userData) => {
        response.send(userData);
    });
});

//--------------- PATCH ROUTES ---------------//


//--------------- DELETE ROUTES ---------------//


//--------------- EXPORT ---------------//

module.exports = router;