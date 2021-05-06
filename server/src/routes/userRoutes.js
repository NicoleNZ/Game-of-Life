const express = require("express");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('../config');

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- PARSER ---------------//

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//--------------- GET ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the user route");
});

router.get("/all", (request, response) => {
    UserModel.find({}).then(function (users) {
        response.send(users);
    });
});

router.get('/me', (request, response) => {
    const token = request.headers['x-access-token'];
    if (!token) return response.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return response.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      UserModel.findById(decoded.id, function (err, user) {
        if (err) return response.status(500).send("There was a problem finding the user.");
        if (!user) return response.status(404).send("No user found.");
        
        response.status(200).send(user);
      });
    });
  });

  router.get('/logout', (request, response) => {
    response.status(200).send({ auth: false, token: null });
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
        // create a token
        const token = jwt.sign({ id: userData._id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        response.status(200).send({ userData, auth: true, token: token });
        if (err) return response.status(500).send("There was a problem registering the user.")
    });
});

router.post("/login", (request, response) => {
    UserModel.findOne({ username: request.body.username }).then((userData) => {
        if (userData) {
            const checkPasswordHash = bcrypt.compareSync(request.body.password, userData.password);
            if (checkPasswordHash) {
                const token = jwt.sign({ id: userData._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                })
                response.status(200).send({ auth: true, token: token });
                console.log("Login successful");
            } else {
                response.status(401).send("Wrong password - try again!");
            }
        } else {
            response.status(401).send("Wrong username - try again!");
        }
    })
});

//--------------- EXPORT ---------------//

module.exports = router;